$(() => {
	$(".logo").on("animationend", (e) => {
		$(e.target).removeClass("animate")
	}).on("mouseenter", (e) => {
		if(!$(e.target).hasClass("animate"))
			$(e.target).addClass("animate")
	})
	
	lozad().observe()
	
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