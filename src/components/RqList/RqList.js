import { useMemo } from "react";
import {
  useCallback,
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  useEffect,
} from "react";

import ListComp from "../ListComp/ListComp";
import { useQuery, useQueryClient } from "react-query";
import { getArrayElementFromKey } from "../../utils/systemHelpers";

const RqList = forwardRef((props, ref) => {
  const {
    queryOptions,
    itemsPerPage,
    service,
    primaryKey,
    itemsPerPageOptions,
    toolbar,
    multiSelectOptions,
    onSelectionChange,
    renderItem,
    noDataPlaceholder,
    wrapperComponent,
    wrapperSx,
    component,
    sx,
    componentElement,
    itemSx,
    transition,
    view,
    onRefresh,
  } = props;
  const listRef = useRef();
  const [key, setKey] = useState([
    queryOptions.queryKey,
    { queryParams: queryOptions.queryParams, page: 0, limit: itemsPerPage },
  ]);
  const listQuery = useQuery(key, service);
  const queryClient = useQueryClient();
  useImperativeHandle(ref, () => ({
    async refresh() {
      listRef.current.resetSelection();
      await queryClient.invalidateQueries(queryOptions.queryKey);
      await listQuery.refetch();
      onRefresh();
    },
  }));

  useEffect(() => {
    setKey([
      queryOptions.queryKey,
      {
        ...key[1],
        queryParams: queryOptions.queryParams,
      },
    ]);
  }, [queryOptions]);

  const handlePageChange = useCallback(
    (pageNumber) => {
      const newKey = [
        key[0],
        {
          queryParams: queryOptions.queryParams,
          ...key[1],
          page: pageNumber,
        },
      ];
      setKey(newKey);
    },
    [queryOptions]
  );

  const handleItemsPerPageChange = useCallback(
    async (newValue) => {
      const newKey = [
        key[0],
        {
          ...key[1],
          limit: newValue,
        },
      ];

      setKey(newKey);
      await queryClient.invalidateQueries(queryOptions.queryKey);
      await listQuery.refetch();
      onRefresh();
    },
    [listQuery, queryClient]
  );

  const queryData = useMemo(() => {
    const dataArray = getArrayElementFromKey(
      listQuery?.data,
      queryOptions?.dataKey
    );
    if (!Array.isArray(dataArray)) {
      return {
        data: [],
        totalCount: 0,
      };
    }
    return {
      data: dataArray,
      totalCount: getArrayElementFromKey(
        listQuery?.data,
        queryOptions.countKey
      ),
    };
  }, [listQuery, queryOptions]);

  return (
    <ListComp
      ref={listRef}
      data={queryData.data}
      primaryKey={primaryKey}
      renderItem={renderItem}
      itemsPerPage={itemsPerPage}
      totalCount={queryData.totalCount}
      onPageChange={handlePageChange}
      onItemsPerPageChange={handleItemsPerPageChange}
      itemsPerPageOptions={itemsPerPageOptions}
      toolbar={toolbar}
      onSelectionChange={onSelectionChange}
      multiSelectOptions={multiSelectOptions}
      noDataPlaceholder={noDataPlaceholder}
      isLoading={listQuery?.isLoading}
      wrapperComponent={wrapperComponent}
      wrapperSx={wrapperSx}
      componentElement={componentElement}
      itemSx={itemSx}
      component={component}
      sx={sx}
      transition={transition}
      view={view}
    />
  );
});

RqList.defaultProps = {
  onRefresh: () => {},
};

export default RqList;
