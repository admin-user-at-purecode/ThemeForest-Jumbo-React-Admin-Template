import Layout from "../../components/Layout/Layout";
import LayoutProvider from "../../components/Layout/LayoutProvider";
import MetricsPage from "../Metrics";

function Dashboard() {
  return (
    <LayoutProvider>
      <Layout>
        <MetricsPage />
      </Layout>
    </LayoutProvider>
  );
}

export default Dashboard;
