$(document).ready(function() {

	//Checbox
	$.each($('.checkbox'), function(index, val) {
		if($(this).find('input').prop('checked')==true) {
			$(this).addClass('active');
		}
	});

$(document).on('click', '.checkbox', function(event) {
	if($(this).hasClass('active')) {
		$(this).find('input').prop('checked', false);
	}else{
		$(this).find('input').prop('checked', true);
	}
	$(this).toggleClass('active');

	return false;
	});

 //Radio
$.each($('.rediobuttoms__item'), function(index,val) {
	if($(this).find('input').prop('checked')==true) {
		$(this).addClass('active');
	}
});
$(document).on('click', ".rediobuttoms__item", function(event) {
	$(this).parents('.rediobuttoms').find(".rediobuttoms__item").removeClass('active');
	$(this).parents('.rediobuttoms').find(".rediobuttoms__item input").prop('checked', false);
	$(this).toggleClass('active');
	$(this).find('input').prop('checked', true);
	return false;
});
});

