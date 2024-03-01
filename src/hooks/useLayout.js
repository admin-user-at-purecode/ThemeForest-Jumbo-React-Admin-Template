import useLayoutFooter from "./useLayoutFooter";
import useLayoutHeader from "./useLayoutHeader";
import useLayoutSidebar from "./useLayoutSidebar";
import useLayoutRoot from "./useLayoutRoot";
import useLayoutContent from "./useLayoutContent";

const useLayout = () => {
    const {setSidebarOptions} = useLayoutSidebar();
    const {setHeaderOptions} = useLayoutHeader();
    const {setFooterOptions} = useLayoutFooter();
    const {setRootOptions} = useLayoutRoot();
    const {setContentOptions} = useLayoutContent();

    const setLayoutOptions = (layoutOptions) => {
        setSidebarOptions(layoutOptions?.sidebar);
        setHeaderOptions(layoutOptions?.header);
        setFooterOptions(layoutOptions?.footer);
        setRootOptions(layoutOptions?.root);
        setContentOptions(layoutOptions?.content);
    };

    return {setLayoutOptions};
};

export default useLayout;
