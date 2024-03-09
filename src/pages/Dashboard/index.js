import Layout from "../../components/Layout/Layout";
import LayoutProvider from "../../components/Layout/LayoutProvider";
import EcommerceDashboard from "../Ecommerce";

function Dashboard() {
  return (
    <LayoutProvider>
      <Layout>
        <EcommerceDashboard />
      </Layout>
    </LayoutProvider>
  );
}

export default Dashboard;
