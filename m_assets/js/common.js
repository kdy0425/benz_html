//체크 전체선택
$(document).on('change', '.label_control input[type="checkbox"]', function () {
	if($(this).closest('label').hasClass('check_all') ){
		if ($(this).is(":checked")) {
			$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", true);
		} else {
			$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", false);
		}
	}else{
		if (!$(this).is(":checked")) {
			$(this).closest('.label_control').find('.check_all input[type="checkbox"]').prop("checked", false);
		}
	}
});

$(document).on('change', '.label_control input[type="checkbox"]', function () {
	if($(this).closest('label').hasClass('check_all') ){
		if ($(this).is(":checked")) {
			$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", true);
		} else {
			$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", false);
		}
	}else{
		if (!$(this).is(":checked")) {
			$(this).closest('.label_control').find('.check_all input[type="checkbox"]').prop("checked", false);
		}
	}
});

$("label.ec_radio.all").bind("click", function() {
	if ($(this).hasClass('black')) {
		$('.ec_radio.black').addClass('active');
		$('.ec_radio.black input').prop("checked", true);
		$('.ec_radio.green').removeClass('active');
		$('.ec_radio.green input').prop("checked", false);
		$(this).addClass('active');
		console.log(2)
		return false;
	}else{
		$('.ec_radio.green').addClass('active');
		$('.ec_radio.green input').prop("checked", true);
		$('.ec_radio.black').removeClass('active');
		$('.ec_radio.black input').prop("checked", false);
		$(this).addClass('active');
		console.log(1)
		return false;
	}
});

$("label.ec_radio.one").bind("click", function() {
	$(this).closest('.ec_control').find('label').removeClass('active');
	$(this).addClass('active');
	$('.ec_radio.green.all').removeClass('active');
	$('.ec_radio.black.all').removeClass('active');
	$('.ec_radio.green.all input').prop("checked", false);
	$('.ec_radio.black.all input').prop("checked", false);
});

$(document).ready(function() {
	$("label.ec_radio input:checked").closest('label').addClass("active");
});

//슬라이더 리로드
function sliderRe(){
	$('.slider').slick('refresh');
}

//레이어팝업 */
function layerShow(thisClass){
    //$('.contLayer').hide();
    $('.'+thisClass).show();
	
	if($('.'+thisClass).hasClass('fixed_layer')){
		$('html,body,.ui-page').css('overflow-y' , 'hidden');
	}
}
function layerHide(thisClass){
    $('.'+thisClass).hide();
	
	if($('.layer_form.fixed_layer:visible').length == 0 ){
		$('html,body,.ui-page').css('overflow-y' , 'auto');
	}
}

//인풋최대 글자수 제한
$(document).on('keyup', '.max_text', function () {
    var numChar = $(this).val().length;
	var maxNum = $(this).attr('maxlength');
	var lenDisplay = $(this).closest('.ip_group').find('.max_len b');
	 if(numChar == maxNum){
	  alert('최대 글자 수가 모두 찼습니다.');
	}
	lenDisplay.text(numChar);
});

//글자수 제한있는 항목 첫 로드 시 계산
if ($('span').hasClass('max_len')){
	$(".max_len").each(function() {
		var numChar = $(this).closest('.ip_group').find('.max_text').val().length;
		$(this).find('b').text(numChar);
	});
}

/*active 토글*/
$('.active_control li a').click(function(){
	$(this).closest('.active_control').find('li').removeClass('active');
	$(this).closest('li').addClass('active');
});


/*메뉴*/
$('.menu_toggle').click(function(){
	$('html').css('overflow-y', 'hidden');
	$('.menu_form').show();
	$('.menu_form .menu_bg').fadeIn(300);
	$('.menu_box').animate({left: "0"}, {
		duration: 300}
	);
});

$('.menu_form .menu_bg').click(function(){
	var hideCnt = function(){
		$('.menu_form').hide();
	}
	$('html').css('overflow-y', 'auto');
	$('.menu_form').show();
	$('.menu_form .menu_bg').fadeOut(300);
	$('.menu_box').animate({left: "-80%"}, {
		duration: 300, complete:hideCnt}
	);
});

//탭 박스
$('.tap_control li a').click(function(){
	var target = $(this).attr('data-rel');

	$(this).closest('.tap_control').find('li').removeClass('active');
	$(this).closest('li').addClass('active');
	
	$(this).closest('.tap_wrap').find('.tap_cnt .tap_item').hide();
	$(this).closest('.tap_wrap').find('.' + target).show();
	if($('.tap_closest').find('.slider')){
		$('.slider').slick('refresh');
	}
});

//제품문의내역 탭 아코디언
$('.question_list .qst_item').click(function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
		$(this).closest('li').find('.answer_box').slideUp();
	}else{
		$(this).closest('ul').find('.qst_item').removeClass('active');
		$(this).closest('ul').find('.answer_box').slideUp();
		$(this).addClass('active');
		$(this).closest('li').find('.answer_box').slideDown();
	}
});

// check element
function isThisComponent(elem){
    var checkResult = $(elem).length;
    return checkResult;
}

//Layer Content
function commonPopupOpen(thisClass){
    $('.'+thisClass).show();
 }
 function commonPopupClose(thisClass){
    $('.'+thisClass).hide();
 }
 
//제이쿼리 모바일 페이지 변경시 상단고정네비, 하단 고정네비 존재유무 
function content_padding(){
	if($('.fixedNav').is(":hidden")){
		$('#content').css('padding-bottom', '0');
		console.log(1);
	}
	if($('.fixedNav').length == 0){
		$('#content').css('padding-bottom', '0');
		console.log(2);
	}
	if($('.fixBtns').length == 0){
		$('#content').css('padding-bottom', '0');
		console.log(3);
	}
	if($('.fixedNav').is(":visible")){
		$('#content').css('padding-bottom', '54px');
		console.log(4);
	}
	if($('.fixBtns').is(":visible")){
		$('#content').css('padding-bottom', '52px');
		console.log(5);
	}
	
	if($('#header').is(":hidden")){
		$('#content').css('padding-top', '0');
		console.log(6);
	}
	if($('#header').length == 0){
		$('#content').css('padding-top', '0');
		console.log(7);
	}
	if($('#header').is(":visible")){
		$('#content').css('padding-top', '54px');
		console.log(8);
	}
}

jQuery( "#content" ).on( "pagechange", function( event ){
	content_padding()
});

$(document).ready(function(){
	content_padding();
});

//delegate binding to only links that have the `.top` class
$(document).delegate('.to_top', 'click', function () {
   $.mobile.silentScroll(0)
});

   
//이미지 첨부  
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var target = $(input).closest('.img_upload').find('.img_upcnt');
		var ext = $(input).val().split('.').pop().toLowerCase();

		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			alert('gif,png,jpg,jpeg만 등록가능합니다.');
			return;
		}
		reader.onload = function(e) {
			target.css('background-image', 'url(' + e.target.result + ')');
		}
		reader.readAsDataURL(input.files[0]);
	}
}

$(document).on('change', ".img_upload input[type='file']", function() {
	readURL(this);
});

//이미지 첨부2
function readURL2(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		var target = $(input).closest('.file_upload').find('.photo_box img');
		var ext = $(input).val().split('.').pop().toLowerCase();

		if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
			alert('gif,png,jpg,jpeg만 등록가능합니다.');
			return;
		}
		reader.onload = function(e) {
			target.attr('src', e.target.result);
			target.show();
		}
		reader.readAsDataURL(input.files[0]);
	}
}

$(document).on('change', ".file_upload input[type='file']", function() {
	readURL2(this);
});


$('.fixedNav .nav01 a').click(function(){
	$('html').css('overflow-y', 'hidden');
	$('.menu_layer').show();
	$('.nav_close').fadeIn(300);
	$('.menu_box').animate({left: "0"}, {
		duration: 300}
	);
});

$('.nav_close').click(function(){
	var hideCnt = function(){
		$('.menu_layer').hide();
	}
	$('html').css('overflow-y', 'auto');
	$('.menu_layer').show();
	$('.nav_close').fadeOut(300);
	$('.menu_box').animate({left: "-80%"}, {
		duration: 300, complete:hideCnt}
	);
});

$('.mb_nav2 > li > a').click(function(){
	if($(this).closest('li').hasClass('active')){
		$(this).closest('li').find('ul').slideUp();
		$(this).closest('li').removeClass('active');
		return false;
	}
	$('.mb_nav2 li').removeClass('active');
	$('.mb_nav2 ul').slideUp();
	$(this).closest('li').toggleClass('active');
	$(this).closest('li').find('ul').slideToggle();
});
