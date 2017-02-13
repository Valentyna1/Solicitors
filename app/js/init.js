(function ($){
	// init bpopup
	$('._js-btn-open-modal').on('click', function (){
		$('#modal-order').bPopup({
			closeClass: 'modal-close',
		});
	});

	// init slickNav
	$('.header-nav').slicknav({
		label: '',
		prependTo: '.header .container',
	});

	// init formstayler
	$('select').styler();

	

})(jQuery);

