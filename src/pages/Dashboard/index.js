import Layout from "../../components/Layout/Layout"
import LayoutProvider from "../../components/Layout/LayoutProvider"
import MiscDashboard from "../misc";

function Dashboard(){
return(
    <LayoutProvider>
      <Layout>
        <MiscDashboard/>
      </Layout>
    </LayoutProvider>
)
}

export default Dashboard;
