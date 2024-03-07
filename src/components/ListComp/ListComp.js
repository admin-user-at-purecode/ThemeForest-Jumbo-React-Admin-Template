import React, {
  useCallback,
  useEffect,
  forwardRef,
  useReducer,
  useMemo,
  useImperativeHandle,
} from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";

import ListContext from "./ListContext";
import ListWrapper from "./components/ListWrapper";
import ListNoDataPlaceholder from "./components/ListNoDataPlaceHolder";
import {
  CHANGE_ACTIVE_PAGE,
  SET_BULK_ACTIONS,
  SET_DATA,
  SET_ITEMS_PER_PAGE,
  SET_SELECTED_ITEMS,
} from "./utils/constants";
import { getUpdatedSelectedItems } from "./utils/listHelpers";
import Grid from "@mui/material/Grid";
import { CircularProgress, Typography } from "@mui/material";
import Div from "@/shared/Div";

const init = (initArgs) => {
  return {
    selectedItems: [],
    ...initArgs,
  };
};

const ListReducer = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEMS:
      return {
        ...state,
        selectedItems: getUpdatedSelectedItems(
          state.selectedItems,
          action.payload,
          state.primaryKey
        ),
      };

    case SET_DATA:
      return {
        ...state,
        data: action.payload.data,
        totalCount: action.payload.totalCount,
      };

    case CHANGE_ACTIVE_PAGE:
      return {
        ...state,
        activePage: parseInt(action.payload),
      };

    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: parseInt(action.payload),
        activePage: 0,
      };

    case SET_BULK_ACTIONS:
      return {
        ...state,
        bulkActions: action.payload,
      };

    default:
      return state;
  }
};

const ListComp = forwardRef((props, ref) => {
  const {
    header,
    toolbar,
    footer,
    data,
    primaryKey,
    renderItem,
    totalCount,
    itemsPerPage,
    onPageChange,
    itemsPerPageOptions,
    onSelectionChange,
    multiSelectOptions,
    noDataPlaceholder,
    wrapperComponent,
    wrapperSx,
    component,
    componentElement,
    sx,
    onItemsPerPageChange,
    isLoading,
    page,
    disableTransition,
    view,
  } = props;

  const [List, setList] = useReducer(
    ListReducer,
    {
      primaryKey: primaryKey,
      data: data,
      totalCount: totalCount,
      itemsPerPage: itemsPerPage,
      itemsPerPageOptions: itemsPerPageOptions,
      activePage: page,
      isLoading: isLoading,
      multiSelectOptions: multiSelectOptions,
      bulkActions: null,
    },
    init
  );

  const setActivePage = useCallback(
    (pageNumber) => {
      setList({ type: CHANGE_ACTIVE_PAGE, payload: pageNumber });
    },
    [setList]
  );

  if (data.length === 0 && totalCount > 0 && List.activePage > 0) {
    setActivePage(List.activePage - 1);
  }

  const setItemsPerPage = useCallback(
    (value) => {
      setList({ type: SET_ITEMS_PER_PAGE, payload: value });
    },
    [setList]
  );

  const setSelectedItems = useCallback(
    (itemsData) => {
      setList({ type: SET_SELECTED_ITEMS, payload: itemsData });
    },
    [setList]
  );

  const setBulkActions = useCallback((bulkActions) => {
    setList({ type: SET_BULK_ACTIONS, payload: bulkActions ?? [] });
  }, []);

  useEffect(() => {
    setList({
      type: SET_DATA,
      payload: { data: data, totalCount: totalCount },
    });
  }, [data]);

  const ListContextValue = useMemo(
    () => ({
      ...List,
      setActivePage,
      setSelectedItems,
      setBulkActions,
      setItemsPerPage,
    }),
    [List]
  );

  useEffect(() => {
    onSelectionChange(List.selectedItems);
  }, [List.selectedItems]);

  useEffect(() => {
    onPageChange(List.activePage);
  }, [List.activePage]);

  useEffect(() => {
    onItemsPerPageChange(List.itemsPerPage);
  }, [List.itemsPerPage]);

  useImperativeHandle(
    ref,
    () => ({
      resetSelection() {
        setSelectedItems([]);
      },
    }),
    []
  );

  if (isLoading) {
    return (
      <ListContext.Provider value={ListContextValue}>
        <ListWrapper component={wrapperComponent} sx={wrapperSx}>
          <Div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              p: (theme) => theme.spacing(3),
              m: "auto",
            }}
          >
            <CircularProgress />
            <Typography variant={"h6"} color={"text.secondary"} mt={2}>
              Loading messages
            </Typography>
          </Div>
        </ListWrapper>
      </ListContext.Provider>
    );
  }

  const componentProps = componentElement
    ? { component: componentElement }
    : {};
  const ListComponent = component ? component : List;
  return (
    <ListContext.Provider value={ListContextValue}>
      <ListWrapper component={wrapperComponent} sx={wrapperSx}>
        {header}
        {toolbar}
        {data?.length <= 0 && !isLoading && (
          <ListNoDataPlaceholder>{noDataPlaceholder}</ListNoDataPlaceholder>
        )}
        {data.length > 0 && view === "list" && (
          <ListComponent {...componentProps} disablePadding sx={{ ...sx }}>
            {disableTransition ? (
              data.map((row) => (
                <React.Fragment key={row[primaryKey]}>
                  {renderItem(row, view)}
                </React.Fragment>
              ))
            ) : (
              <TransitionGroup>
                {data.map((row) => (
                  <Collapse key={`${row[primaryKey]}`}>
                    {renderItem(row)}
                  </Collapse>
                ))}
              </TransitionGroup>
            )}
          </ListComponent>
        )}
        {data.length > 0 && view === "grid" && (
          <Grid container spacing={3} sx={sx}>
            {data.map((row) => (
              <React.Fragment key={row[primaryKey]}>
                {renderItem(row)}
              </React.Fragment>
            ))}
          </Grid>
        )}
        {footer}
      </ListWrapper>
    </ListContext.Provider>
  );
});

ListComp.defaultProps = {
  onPageChange: () => {},
  onSelectionChange: () => {},
  onItemsPerPageChange: () => {},
  onSelectedItemsReset: () => {},
  page: 0,
  view: "list",
};

export default ListComp;
