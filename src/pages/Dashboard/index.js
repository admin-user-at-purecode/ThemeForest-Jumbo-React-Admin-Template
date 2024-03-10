import Layout from "../../components/Layout/Layout";
import LayoutProvider from "../../components/Layout/LayoutProvider";
import Widgets from "../Widgets/Widgets";

function Dashboard() {
  return (
    <LayoutProvider>
      <Layout>
        <Widgets />
      </Layout>
    </LayoutProvider>
  );
}

export default Dashboard;
