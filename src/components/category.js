
import Category1 from './images/category/category-1.jpg';
import Category2 from './images/category/category-2.jpg';
import Category3 from './images/category/category-3.jpg';
import Category4 from './images/category/category-4.jpg'


const Category = ()=>{

	const imgStyle ={
		textDecoration:'none',
		backgroundColor:'#82ae46',
		color:'white',
		padding:'5px 15px',
		fontSize:'1rem'
	}

	const linkStyle ={
		color:'white',
		fontSize:'1rem'
	}

    return(
        <section className="" style={{marginBottom:'50px'}}>
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6 order-md-last align-items-stretch" >
								<div className="category-wrap-2 img align-self-stretch  text-center" >
									<div className="text text-center">
										<h2>Vegetables</h2>
										<p class="mb-4">Protect the health of every home</p>
										<p><a href="#0" class="btn btn-primary">Shop now</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-6" >
								<div className="category-wrap img mb-4 d-flex align-items-end" style={{backgroundImage: `url("${Category1}")`,backgroundSize:'cover',width:'100%',height:'250px'}}>	
									<div className="text">
										<h2 className="mb-0" style={imgStyle}><a href="#0" style={linkStyle}>Fruits</a></h2>
									</div>
								</div>
								<div className="category-wrap  img mb-4 d-flex align-items-end" style={{backgroundImage: `url("${Category2}")`,backgroundSize:'cover',height:'250px'}}>
									<div className="text">
										<h2 className="mb-0" style={imgStyle}><a href="#0" style={linkStyle}>Vegetables</a></h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="category-wrap  img mb-4 d-flex align-items-end" style={{backgroundImage: `url("${Category3}")`,backgroundSize:'cover',height:'250px'}}>
							<div className="text">
								<h2 className="mb-0" style={imgStyle}><a href="#0" style={linkStyle}>Juice</a></h2>
							</div>		
						</div>
						<div className="category-wrap  img d-flex align-items-end" style={{backgroundImage: `url("${Category4}")`,backgroundSize:'cover',height:'250px'}}>
							<div className="text">
								<h2 className="mb-0" style={imgStyle}><a href="#0" style={linkStyle}>Dried</a></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    )
}

export default Category;