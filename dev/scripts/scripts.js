$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'linear', function () {
        window.location.hash = target;
    });
});

const hamFunction = function(){
	const nav = $('.mainNav ul');
	const hamburgerIcon = $('.toggle-nav');
	const navSelection = $('.mainNav ul li a ');
	let navOpenorClose = false;

	function openNav(){
		nav.css("right", "0px");
		hamburgerIcon.css("color", "#319883");
		navOpenorClose = true;
	};

	function closeNav(){
		nav.css("right", "-150px");
		hamburgerIcon.css("color", "#ffffff");
		navOpenorClose = false;
	};

	function toggleNav(){
		if(navOpenorClose === true){
			closeNav();
		}
		else{
			openNav();
		}
	};

	hamburgerIcon.on('click', function() {
		toggleNav();
	});

	navSelection.on('click', function(){
		closeNav();
	});
	
if(window.innerWidth > 768){

	hamburgerIcon.on('mouseenter', function(){
		openNav();
	});

	navSelection.on('click', function(){
		closeNav();
	});

	nav.on('mouseleave', function(){
		closeNav();
	});
}

	window.onscroll = function(){
		closeNav();
	}
};

$(function(){
	hamFunction();
});