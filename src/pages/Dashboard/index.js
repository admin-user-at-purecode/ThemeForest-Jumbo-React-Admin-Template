import Layout from "../../components/Layout/Layout";
import LayoutProvider from "../../components/Layout/LayoutProvider";
import CrmDashboard from "../CrmDashboard";

function Dashboard() {
  return (
    <LayoutProvider>
      <Layout>
        <CrmDashboard />
      </Layout>
    </LayoutProvider>
  );
}

export default Dashboard;
