import Layout from "../../components/Layout/Layout"
import LayoutProvider from "../../components/Layout/LayoutProvider"
import ListingDashboard from "../ListingDashboard/ListingDashboard"

function Dashboard(){
return(
    <LayoutProvider>
      <Layout>
        <ListingDashboard/>
      </Layout>
    </LayoutProvider>
)
}

export default Dashboard