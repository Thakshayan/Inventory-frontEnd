//components
import ProductCollection from "../components/productComponent/productCollection";


function View(){
    return(
        <div class="" style={{margin:'75px'}}>
            <div class="row justify-content-center">
    			<div class="col-md-10 mb-5 text-center">
    				<ul class="product-category">
    					<li><a href="#0" class="active">All</a></li>
    					<li><a href="#0">Vegetables</a></li>
    					<li><a href="#0">Fruits</a></li>
    					<li><a href="#0">Juice</a></li>
    					<li><a href="#0">Dried</a></li>
    				</ul>
    			</div>
    		</div>
            <div class="sidebar-box" style={{padding:'0px'}}>
              <form action="#" class="search-form" >
                <div class="form-group">
                  
                  <input type="text" class="form-control" placeholder="Search..." style={{borderRadius:'15px'}}/>
                  <button class="btn icon ion-ios-search" style={{backgroundColor:'#82ae46',color:'white',borderRadius:'9px',right:'11px'}}></button>
                
                    
                
                </div>
              </form>

              <form action="#" className="subscribe-form" style={{}}>
                    <div className="form-group d-flex">
                    <input type="text" className="form-control" placeholder="Search....." style={{borderSize:'5px',borderColor:'#82ae46',borderRadius:'15px 0px 0px 15px'}}/>
                    <input type="submit" value="Search" className="submit px-3" style={{borderRadius:'0px 10px 10px 0px',fontSize:'18px'}}/>
                    </div>
            </form>

            </div>
            <ProductCollection />
            <div class="row mt-5">
                <div class="col text-center">
                    <div class="block-27">
                    <ul>
                        <li><a href="#0">&lt;</a></li>
                        <li class="active"><span>1</span></li>
                        <li><a href="#0">2</a></li>
                        <li><a href="#0">3</a></li>
                        <li><a href="#0">4</a></li>
                        <li><a href="#0">5</a></li>
                        <li><a href="#0">&gt;</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;