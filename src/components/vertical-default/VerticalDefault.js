 "react";
import Layout from "../Layout/Layout";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const VerticalDefault = ({children}) => {

    return (
        <Layout
            header={<Header/>}
            sidebar={<Sidebar/>}
            footer={<Footer/>}
            headerSx={{
                height: 80,
            }}
        >
            {children}
        </Layout>
    );
};

export default VerticalDefault;
