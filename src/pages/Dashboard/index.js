import Layout from "../../components/Layout/Layout";
import LayoutProvider from "../../components/Layout/LayoutProvider";
import CalendarBasic from "../Calendars/Basic/CalendarBasic";

function Dashboard() {
  return (
    <LayoutProvider>
      <Layout>
        <CalendarBasic />
      </Layout>
    </LayoutProvider>
  );
}

export default Dashboard;
