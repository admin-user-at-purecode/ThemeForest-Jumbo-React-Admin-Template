import Layout from "../../components/Layout/Layout";
import LayoutProvider from "../../components/Layout/LayoutProvider";
import CalendarCulture from "../Calendar/Culture/CalendarCulture";

function Dashboard() {
  return (
    <LayoutProvider>
      <Layout>
        <CalendarCulture />
      </Layout>
    </LayoutProvider>
  );
}

export default Dashboard;
