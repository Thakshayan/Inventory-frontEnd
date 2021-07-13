const DealBar = ()=>{
    return(     
		<section class="img" style={{backgroundImage: 'url("images/bg_3.jpg")'}}>
    	<div class="container">
		    <div class="row justify-content-end">
                <div class="col-md-6 heading-section deal-of-the-day">
                    <span class="subheading">Best Price For You</span>
                    <h2 class="mb-4">Deal of the day</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <h3><a href="#0">Spinach</a></h3>
                    <span class="price">$10 <a href="#0">now $5 only</a></span>
                    <div id="timer" class="d-flex mt-5">
                        <div class="time" id="days"></div>
                        <div class="time pl-3" id="hours"></div>
                        <div class="time pl-3" id="minutes"></div>
                        <div class="time pl-3" id="seconds"></div>                        
                    </div>
                </div>
            </div>   		
    	</div>
        </section>

    );
}

export default DealBar;