
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import background1 from './images/bg_1.jpg';




const Carousals = ()=>{
    return(

        <section id="home-section" class="hero">
            <Carousel className="home-slider carousel1" useKeyboardArrows autoPlay showIndicators>
        <div className="slider-item" style={{backgroundImage: `url(${background1})`}} >
            <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

              <div className="col-md-12  text-center">
                <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
                <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                <p><a href="#0" className="btn btn-primary">View Details</a></p>
              </div>

            </div>
          </div>
        </div>

        <div className="slider-item" >
            <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

              <div className="col-md-12  text-center">
                <h1 className="mb-2">We serve Fresh Vegestables &amp; Fruits</h1>
                <h2 className="subheading mb-4">We deliver organic vegetables &amp; fruits</h2>
                <p><a href="#0" className="btn btn-primary">View Details</a></p>
              </div>

            </div>
          </div>
        </div>


        </Carousel>



        </section>




        /*
        <section className="">
                <div className="container">
                    <div className="row no-gutters ftco-services">
            <div className="col-md-3 text-center d-flex align-self-stretch ">
                <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-1 active d-flex justify-content-center align-items-center mb-2">
                        <span className="flaticon-shipped"></span>
                </div>
                <div className="media-body">
                    <h3 className="heading">Free Shipping</h3>
                    <span>On order over $100</span>
                </div>
                </div>      
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ">
                <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-2 d-flex justify-content-center align-items-center mb-2">
                        <span className="flaticon-diet"></span>
                </div>
                <div className="media-body">
                    <h3 className="heading">Always Fresh</h3>
                    <span>Product well package</span>
                </div>
                </div>    
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ">
                <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-3 d-flex justify-content-center align-items-center mb-2">
                        <span className="flaticon-award"></span>
                </div>
                <div className="media-body">
                    <h3 className="heading">Superior Quality</h3>
                    <span>Quality Products</span>
                </div>
                </div>      
            </div>
            <div className="col-md-3 text-center d-flex align-self-stretch ">
                <div className="media block-6 services mb-md-0 mb-4">
                <div className="icon bg-color-4 d-flex justify-content-center align-items-center mb-2">
                        <span className="flaticon-customer-service"></span>
                </div>
                <div className="media-body">
                    <h3 className="heading">Support</h3>
                    <span>24/7 Support</span>
                </div>
                </div>      
            </div>
            </div>
                </div>
            </section>
            */
    );
}


export default Carousals;