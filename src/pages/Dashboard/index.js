import Layout from "../../components/Layout/Layout";
import LayoutProvider from "../../components/Layout/LayoutProvider";
import NewsDashboard from "../News";

function Dashboard() {
  return (
    <LayoutProvider>
      <Layout>
        <NewsDashboard />
      </Layout>
    </LayoutProvider>
  );
}

export default Dashboard;
