import Layout from "../../components/Layout/Layout"
import LayoutProvider from "../../components/Layout/LayoutProvider"
import CryptoDashboard from "../Crypto"

function Dashboard(){
return(
    <LayoutProvider>
      <Layout>
        <CryptoDashboard/>
      </Layout>
    </LayoutProvider>
)
}

export default Dashboard