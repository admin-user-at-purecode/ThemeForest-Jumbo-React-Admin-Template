import Layout from "../../components/Layout/Layout";
import LayoutProvider from "../../components/Layout/LayoutProvider";
import IntranetDashboard from "../Intranet/index.js";

function Dashboard() {
  return (
    <LayoutProvider>
      <Layout>
        <IntranetDashboard />
      </Layout>
    </LayoutProvider>
  );
}

export default Dashboard;
