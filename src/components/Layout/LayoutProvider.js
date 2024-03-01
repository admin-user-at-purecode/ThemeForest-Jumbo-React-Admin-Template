import React from 'react';

import LayoutSidebarContext from '../../Context/LayoutSidebarContext';
import LayoutContentContext from '../../Context/LayoutContentContext';
import {useMediaQuery} from "@mui/material";
import { LAYOUT_ACTIONS,  SIDEBAR_SCROLL_TYPES,
  SIDEBAR_STYLES,
  SIDEBAR_VARIANTS,
  SIDEBAR_VIEWS } from '../../utils/constants/layout';
import LayoutRootContext from '../../Context/LayoutRootContext';
import LayoutFooterContext from '../../Context/LayoutFooterContext';
import LayoutHeaderContext from '../../Context/LayoutHeaderContext';

const init = (activeLayoutConfig) => {
  const layoutInitOptions = {
      header: {
          hide: false,
          ...(activeLayoutConfig?.layoutOptions?.header ? activeLayoutConfig?.layoutOptions?.header : {}),
      },
      sidebar: {
          hide: false,
          width: 240,
          minWidth: 80,
          variant: SIDEBAR_VARIANTS.PERSISTENT,
          style: SIDEBAR_STYLES.FULL_HEIGHT,
          scrollType: SIDEBAR_SCROLL_TYPES.FIXED,
          ...(activeLayoutConfig?.layoutOptions?.sidebar ? activeLayoutConfig?.layoutOptions?.sidebar : {}),
      },
      footer: {
          hide: false,
          ...(activeLayoutConfig?.layoutOptions?.footer ? activeLayoutConfig?.layoutOptions?.footer : {}),
      },
      content: {
          ...(activeLayoutConfig?.layoutOptions?.content ? activeLayoutConfig?.layoutOptions?.content : {}),
      },
  };

  return (
      {
          ...layoutInitOptions,
          previousOptions: {...layoutInitOptions},
      }
  );
};

const LayoutReducer = (state, action) => {
  const {
      previousOptions,
      ...currentOptions
  } = state;

  switch (action.type) {
      case LAYOUT_ACTIONS.SET_HEADER_OPTIONS:
          return {
              ...state,
              header: {
                  ...state?.header,
                  ...action?.payload,
              }
          };


      case LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS:
          let newSidebarOptions = {};
          let sidebarPreviousOptions = {};


          if(action.isMobile && !action.payload.hasOwnProperty("variant")) {
              newSidebarOptions = {
                  variant: SIDEBAR_VARIANTS.TEMPORARY,
                  style: SIDEBAR_STYLES.FULL_HEIGHT,
                  view: SIDEBAR_VIEWS.FULL,
                  open: false,
                  ...action.payload
              };
              sidebarPreviousOptions = {...previousOptions.sidebar};
          }
          else if (action.isMobile && action.payload.hasOwnProperty("variant")) {
              newSidebarOptions = {
                  variant: SIDEBAR_VARIANTS.TEMPORARY,
                  style: SIDEBAR_STYLES.FULL_HEIGHT,
                  view: SIDEBAR_VIEWS.FULL,
                  open: false,
              };
              if(action.payload?.variant !== SIDEBAR_VARIANTS.TEMPORARY) {
                  sidebarPreviousOptions = {
                      ...previousOptions.sidebar,
                      ...action.payload,
                  };
              }
              else {
                  sidebarPreviousOptions = {
                      ...previousOptions.sidebar
                  }
              }

          }
          else if (!action.isMobile) {
              newSidebarOptions = {
                  ...currentOptions.sidebar,
                  ...action.payload,
              };
              sidebarPreviousOptions = {
                  ...currentOptions.sidebar,
                  ...action.payload
              }
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
              }
          };

      case LAYOUT_ACTIONS.SET_CONTENT_OPTIONS:
          return {
              ...state,
              content: {
                  ...state?.content,
                  ...action?.payload
              }
          };

      case LAYOUT_ACTIONS.SET_FOOTER_OPTIONS:
          return {
              ...state,
              footer: {
                  ...state?.footer,
                  ...action?.payload,
              }
          };


      case LAYOUT_ACTIONS.SET_ROOT_OPTIONS:
          return {
              ...state,
              root: {
                  ...state?.root,
                  ...action?.payload
              }
          };

      case LAYOUT_ACTIONS.SET_OPTIONS:
          return {
              ...state,
              ...action.payload,
          };

      default:
          return state;
  }
};

const LayoutProvider = ({children}) => {
  const [layoutOptions, setLayoutOptions] = React.useReducer(
      LayoutReducer,
      {},
      init
  );

  const isNotMobile = useMediaQuery('(min-width:1200px)');

  React.useEffect(() => {
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

  const setHeaderOptions = React.useCallback((options) => {
      setLayoutOptions({type: LAYOUT_ACTIONS.SET_HEADER_OPTIONS, payload: options, isMobile: !isNotMobile});
  }, [setLayoutOptions, isNotMobile]);

  const setSidebarOptions = React.useCallback((options) => {
      setLayoutOptions({type: LAYOUT_ACTIONS.SET_SIDEBAR_OPTIONS, payload: options, isMobile: !isNotMobile});
  }, [setLayoutOptions, isNotMobile]);

  const setFooterOptions = React.useCallback((options) => {
      setLayoutOptions({type: LAYOUT_ACTIONS.SET_FOOTER_OPTIONS, payload: options, isMobile: !isNotMobile});
  }, [setLayoutOptions, isNotMobile]);

  const setRootOptions = React.useCallback((options) => {
      setLayoutOptions({type: LAYOUT_ACTIONS.SET_ROOT_OPTIONS, payload: options, isMobile: !isNotMobile});
  }, [setLayoutOptions, isNotMobile]);

  const setContentOptions = React.useCallback((options) => {
      setLayoutOptions({type: LAYOUT_ACTIONS.SET_CONTENT_OPTIONS, payload: options, isMobile: !isNotMobile});
  }, [setLayoutOptions, isNotMobile]);


  const contentContextValue = React.useMemo(() => ({
      contentOptions: layoutOptions?.content,
      setContentOptions: setContentOptions,
  }), [layoutOptions?.content]);

  const sidebarContextValue = React.useMemo(() => {
      return {
          sidebarOptions: layoutOptions?.sidebar,
          setSidebarOptions: setSidebarOptions,
      }
  }, [layoutOptions?.sidebar]);

  const headerContextValue = React.useMemo(() => ({
      headerOptions: layoutOptions?.header,
      setHeaderOptions: setHeaderOptions,
  }), [layoutOptions?.header]);

  const footerContextValue = React.useMemo(() => ({
      footerOptions: layoutOptions?.footer,
      setFooterOptions: setFooterOptions,
  }), [layoutOptions?.footer]);

  const rootContextValue = React.useMemo(() => {
      return ({
          rootOptions: layoutOptions?.root,
          setRootOptions: setRootOptions,
      });
  }, [layoutOptions?.root]);


  return (
      <LayoutRootContext.Provider value={rootContextValue}>
          <LayoutSidebarContext.Provider value={sidebarContextValue}>
              <LayoutHeaderContext.Provider value={headerContextValue}>
                  <LayoutFooterContext.Provider value={footerContextValue}>
                      <LayoutContentContext.Provider value={contentContextValue}>
                          {children}
                      </LayoutContentContext.Provider>
                  </LayoutFooterContext.Provider>
              </LayoutHeaderContext.Provider>
          </LayoutSidebarContext.Provider>
      </LayoutRootContext.Provider>
  );
};

export default LayoutProvider;