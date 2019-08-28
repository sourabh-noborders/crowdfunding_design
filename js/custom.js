jQuery('document').ready(function(){

	jQuery('.cat_select').on('change',function(){
		var cat_val = jQuery(this).val();
		if(cat_val!=='') {
			jQuery('.next_btn').removeClass('disabled');
		} else {
			jQuery('.next_btn').addClass('disabled');
		}
	});

	jQuery('.next_btn').on('click', function(){
		var step_ele = jQuery(this).closest('.step');
		var step_no = step_ele.data('step');
		var next_step = step_no+1;
		jQuery(step_ele).hide();
		jQuery('.step_form_'+next_step).show();
		jQuery('.step_text').text(next_step+' of 3'); 
	});

	jQuery('input[type="checkbox"]').on('change',function(e){
		// e.preventDefault();
		jQuery(this).closest('li').toggleClass('active');
	});
 
});