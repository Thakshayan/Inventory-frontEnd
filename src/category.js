
const Category = ()=>{
    return(
        <section className="ftco-section ftco-category ftco-no-pt">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-6 order-md-last align-items-stretch d-flex">
								<div className="category-wrap-2 img align-self-stretch d-flex" style="background-image: url(images/category.jpg);">
									<div className="text text-center">
										<h2>Vegetables</h2>
										<p>Protect the health of every home</p>
										<p><a href="#0" class="btn btn-primary">Shop now</a></p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="category-wrap img mb-4 d-flex align-items-end" style="background-image: url(images/category-1.jpg);">
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Fruits</a></h2>
									</div>
								</div>
								<div className="category-wrap  img d-flex align-items-end" style="background-image: url(images/category-2.jpg);">
									<div className="text px-3 py-1">
										<h2 className="mb-0"><a href="#">Vegetables</a></h2>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-4">
						<div className="category-wrap  img mb-4 d-flex align-items-end" style="background-image: url(images/category-3.jpg);">
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Juices</a></h2>
							</div>		
						</div>
						<div className="category-wrap  img d-flex align-items-end" style="background-image: url(images/category-4.jpg);">
							<div className="text px-3 py-1">
								<h2 className="mb-0"><a href="#">Dried</a></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

    )
}

export default Category;