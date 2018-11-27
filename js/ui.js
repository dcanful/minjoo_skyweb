
$(function(){

	sky.menu();

	if( $("#body_container.north_page").length ){
		sky.sub.init();
	}

});

var sky = {}

sky = {
	/* 404 error */
	notFound : function(){
		alert('이 페이지는 현재 작업중입니다.');
		return false;
	},
	/* 공통 모션 */
	motion : function(el, motionType){
		el.css({opacity:1}).addClass("animated " + motionType);
	},
	/* 메뉴 */
	menu : function(){
		var $header = $("#header_container");
		var $gnb = $header.find(".gnb_wrap");
		$header.find(".btnMenu").on("click", function(){
			$gnb.addClass("open");
		});
		$gnb.find(".btnClose").on("click", function(){
			$gnb.removeClass("open");
		});
	}
}





/*
*	dddd
*/
sky.sub = {
	init : function(){
		// this.popup();
	}
}



