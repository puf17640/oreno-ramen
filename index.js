$(() => {
	lozad(".lozad", {
		loaded: (el) => { console.log(el) }
	}).observe()
	
	let slideIndex = 0
	function slider() {
		let slides = $(".slide")
		$(slides[slideIndex++]).fadeOut(1500)
		if(slideIndex >= slides.length){
			slides.fadeIn(1500)
			slideIndex = 0
		}
	}
	setInterval(slider, 5000)
})