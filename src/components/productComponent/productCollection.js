import Product from './product';

const ProductCollection = (props)=> {
        const List = [
            {
                discount:"45",
                price:"100"
            },
            {
                discount:"100",
                price:"100"
            }
        ]
        
        return(

            <section >
                <div className="container">
                        <div className="row justify-content-center mb-3 pb-3">
                <div className="col-md-12 heading-section text-center ">
                    <span className="subheading">Featured Products</span>
                    <h2 className="mb-4">Our Products</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                </div>
                </div>   		
                </div>
            
                <div className="container">
                    <div className="row">
                    {
                        List.map((val) => {
                            console.log(val.discount);
                            
                            return <Product state={val}/>
                        })
                    }
                    </div>
                </div>
            </section>
        
        );


    

}

export default ProductCollection;