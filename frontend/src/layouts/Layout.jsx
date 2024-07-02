import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Route from "../Routes/Route";

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
        <Route />
    </main>
    <Footer/>
    </>
  )
}

export default Layout