//Components from components
import Carousals from "../components/carousal";
import Category from "../components/category";
import ProductCollection from "../components/productComponent/productCollection";
import DealBar from "../components/dealBar";


function Home(){
    return(
        <div>
            <Carousals/>
            <Category/>
            <ProductCollection />
            <DealBar/>
        </div>
        
    );
}

export default Home;