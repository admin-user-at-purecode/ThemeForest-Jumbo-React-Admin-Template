import { useReducer,useEffect,useCallback,useMemo } from "react";
import {
  LayoutSidebarContext,
  LayoutHeaderContext,
} from "../../Context/context";
import { useMediaQuery } from "@mui/material";
import {
  LAYOUT_ACTIONS,
  SIDEBAR_STYLES,
  SIDEBAR_VARIANTS,
  SIDEBAR_VIEWS,
} from "../../utils/constants/layout";

const init = (activeLayoutConfig) => {
  const layoutInitOptions = {
    header: {
      hide: false,
      ...(activeLayoutConfig?.layoutOptions?.header
        ? activeLayoutConfig?.layoutOptions?.header
        : {}),
    },
    sidebar: {
      hide: false,
      width: 240,
      minWidth: 80,
      variant: SIDEBAR_VARIANTS.PERSISTENT,
      style: SIDEBAR_STYLES.FULL_HEIGHT,
      ...(activeLayoutConfig?.layoutOptions?.sidebar
        ? activeLayoutConfig?.layoutOptions?.sidebar
        : {}),
    },
  };

  return {
    ...layoutInitOptions,
    previousOptions: { ...layoutInitOptions },
  };
};

const LayoutReducer = (state, action) => {
  const { previousOptions, ...currentOptions } = state;

  switch (action.type) {
    case LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS:
      let newSidebarOptions = {};
      let sidebarPreviousOptions = {};

      if (action.isMobile && !action.payload.hasOwnProperty("variant")) {
        newSidebarOptions = {
          variant: SIDEBAR_VARIANTS.TEMPORARY,
          style: SIDEBAR_STYLES.FULL_HEIGHT,
          view: SIDEBAR_VIEWS.FULL,
          open: false,
          ...action.payload,
        };
        sidebarPreviousOptions = { ...previousOptions.sidebar };
      } else if (action.isMobile && action.payload.hasOwnProperty("variant")) {
        newSidebarOptions = {
          variant: SIDEBAR_VARIANTS.TEMPORARY,
          style: SIDEBAR_STYLES.FULL_HEIGHT,
          view: SIDEBAR_VIEWS.FULL,
          open: false,
        };
        if (action.payload?.variant !== SIDEBAR_VARIANTS.TEMPORARY) {
          sidebarPreviousOptions = {
            ...previousOptions.sidebar,
            ...action.payload,
          };
        } else {
          sidebarPreviousOptions = {
            ...previousOptions.sidebar,
          };
        }
      } else if (!action.isMobile) {
        newSidebarOptions = {
          ...currentOptions.sidebar,
          ...action.payload,
        };
        sidebarPreviousOptions = {
          ...currentOptions.sidebar,
          ...action.payload,
        };
      }

      return {
        ...state,
        previousOptions: {
          ...previousOptions,
          sidebar: sidebarPreviousOptions,
        },
        sidebar: {
          ...state?.sidebar,
          ...newSidebarOptions,
        },
      };

    default:
      return state;
  }
};

const LayoutProvider = ({ children }) => {
  const [layoutOptions, setLayoutOptions] = useReducer(
    LayoutReducer,
    {},
    init
  );

  const isNotMobile = useMediaQuery("(min-width:1200px)");

  useEffect(() => {
    if (!isNotMobile) {
      setSidebarOptions({
        variant: SIDEBAR_VARIANTS.TEMPORARY,
        style: SIDEBAR_STYLES.FULL_HEIGHT,
        view: SIDEBAR_VIEWS.FULL,
        open: false,
      });
      return;
    }
    setSidebarOptions(layoutOptions.previousOptions.sidebar);
  }, [isNotMobile]);

  const setHeaderOptions = useCallback(
    (options) => {
      setLayoutOptions({
        type: LAYOUT_ACTIONS.SET_HEADER_OPTIONS,
        payload: options,
        isMobile: !isNotMobile,
      });
    },
    [setLayoutOptions, isNotMobile]
  );

  const setSidebarOptions = useCallback(
    (options) => {
      setLayoutOptions({
        type: LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS,
        payload: options,
        isMobile: !isNotMobile,
      });
    },
    [setLayoutOptions, isNotMobile]
  );

  const sidebarContextValue = useMemo(() => {
    return {
      sidebarOptions: layoutOptions?.sidebar,
      setSidebarOptions: setSidebarOptions,
    };
  }, [layoutOptions?.sidebar]);

  const headerContextValue = useMemo(
    () => ({
      headerOptions: layoutOptions?.header,
      setHeaderOptions: setHeaderOptions,
    }),
    [layoutOptions?.header]
  );

  return (
    <LayoutSidebarContext.Provider value={sidebarContextValue}>
      <LayoutHeaderContext.Provider value={headerContextValue}>
        {children}
      </LayoutHeaderContext.Provider>
    </LayoutSidebarContext.Provider>
  );
};

export default LayoutProvider;
