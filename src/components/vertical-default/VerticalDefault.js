import React from "react";
import Layout from "../Layout/Layout";
import Header from "../headers";
import Sidebar from "../shared/Sidebar";
import Footer from "../footers";

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
