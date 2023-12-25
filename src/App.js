import Navbar from "./Components/Navbar"
import SearchBar from "./Components/Search"
import Product from './Components/Product';
import About from "./Components/About"
import Footer from "./Components/Footer"


function App(){
    return(
        <>
            <Navbar></Navbar>  
            <SearchBar></SearchBar>
            <Product></Product>
            <About></About>     
            <Footer></Footer>   
        </>
    )
}
export default App