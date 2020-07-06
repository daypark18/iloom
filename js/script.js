$(function(){

      global = {
        mainMenu : $(".main_menu > ul > li > a"),
        subMenu : $(".main_menu > ul > li > ul"),
        shelvImg:$(".sing_shelv .img"),
        singdeskImg:$(".sing_desk .img"),
        kidbedImg:$(".kid_bed .img"),
        kidorgImg:$(".kid_org .img"),
        kidtblImg:$(".kid_tbl .img"),
        kidcharImg:$(".kid_char .img")
      }
      var menuEnter = function(){
        global.mainMenu.removeClass("active");
        $(this).addClass("active");
        global.subMenu.stop().slideUp(200);
        $(this).next('ul').stop().slideDown(300);
      }

      var menuLeave = function(){
        global.mainMenu.removeClass("active");
        global.subMenu.stop().slideUp(200);
      }

      global.subMenu.hide();

      // global.mainMenu.hover(
    	// 	function() {
    	// 		menuEnter();
    	// 	},
    	// 	function() {
    	// 		menuLeave();
    	// 	}
    	// )

      global.mainMenu.mouseenter(function(){
        global.mainMenu.removeClass("active");
        $(this).addClass("active");
        global.subMenu.stop().slideUp(200);
        $(this).next('ul').stop().slideDown(300);
      })

      $(".main_menu").mouseleave(function(){
        global.mainMenu.removeClass("active");
        global.subMenu.stop().slideUp(200);
      })

      $(".sing_shelv .colors .shel").eq(0).addClass("active");
      $(".sing_desk .colors .des").eq(0).addClass("active");
      $(".kid_bed .colors .bed").eq(0).addClass("active");
      $(".kid_org .colors .org").eq(0).addClass("active");
      $(".kid_tbl .colors .tbl").eq(0).addClass("active");
      $(".kid_char .colors .char").eq(0).addClass("active");



      var classIndex = $(".sing_shelv .colors .shel.active").index();
      console.log("classIndex===",classIndex);

        $(".sing_shelv .colors .shel").click(function(){
          
          var _index = $(this).index();    
            
          $(".sing_shelv .colors .shel").removeClass("active");    
          $(".sing_shelv .colors .shel").eq(_index).addClass("active");
            
          global.shelvImg.css({"background-image" : "url(img/shel" + _index + ".png)"})    
          //var index = $(this).index(".shel");
          
          /*    
          switch(index){
            case 0 :
            $(".sing_shelv .colors .shel.active").removeClass("active");
            $(this).addClass("active");
            global.shelvImg.css({
                "background-image":"url(img/shel0.png)"
            });
            break;
            case 1 :
            // $(".sing_shelv .colors .shel").eq(classIndex).removeClass("active");
            $(".sing_shelv .colors .shel.active").removeClass("active");
            $(this).addClass("active");
            global.shelvImg.css({
                "background-image":"url(img/shel1.png)"
            });
            break;
            case 2 :
            $(".sing_shelv .colors .shel.active").removeClass("active");
            $(this).addClass("active");
            global.shelvImg.css({
                "background-image":"url(img/shel2.png)"
            });
            break;
            case 3 :
            $(".sing_shelv .colors .shel.active").removeClass("active");
            $(this).addClass("active");
            global.shelvImg.css({
                "background-image":"url(img/shel3.png)"
            });
            break;
            default:
            global.shelvImg.css({
                "background-image":"url(img/shel0.png)"
            });
          }
          */
        })

        $(".sing_desk .colors .des").click(function(){
          $(".sing_desk .colors .des").eq(0).removeClass("active");

          var index = $(this).index(".des");

          switch(index){
            case 0 :
            $(".sing_desk .colors .des.active").removeClass("active");
            $(this).addClass("active");
            global.singdeskImg.css({
                "background-image":"url(img/sing_des0.png)"
            });
            break;
            case 1 :
            $(".sing_desk .colors .shel.active").removeClass("active");
            $(this).addClass("active");
            global.singdeskImg.css({
                "background-image":"url(img/sing_des1.png)"
            });
            break;
            default:
            global.singdeskImg.css({
                "background-image":"url(img/sing_des0.png)"
            });
          }
        })

        $(".kid_bed .colors .bed").click(function(){
          $(".kid_bed .colors .bed").eq(0).removeClass("active");

          var index = $(this).index(".bed");

          switch(index){
            case 0 :
            $(".kid_bed .colors .bed.active").removeClass("active");
            $(this).addClass("active");
            global.kidbedImg.css({
                "background-image":"url(img/kid_bed0.png)"
            });
            break;
            case 1 :
            $(".kid_bed .colors .bed.active").removeClass("active");
            $(this).addClass("active");
            global.kidbedImg.css({
                "background-image":"url(img/kid_bed1.png)"
            });
            break;
            case 2 :
            $(".kid_bed .colors .bed.active").removeClass("active");
            $(this).addClass("active");
            global.kidbedImg.css({
                "background-image":"url(img/kid_bed2.png)"
            });
            break;
            case 3 :
            $(".kid_bed .colors .bed.active").removeClass("active");
            $(this).addClass("active");
            global.kidbedImg.css({
                "background-image":"url(img/kid_bed3.png)"
            });
            break;
            default:
            global.kidbedImg.css({
                "background-image":"url(img/kid_bed0.png)"
            });
          }
        })

        $(".kid_org .colors .org").click(function(){
          $(".kid_org .colors .org").eq(0).removeClass("active");

          var index = $(this).index(".org");

          switch(index){
            case 0 :
            $(".kid_org .colors .org.active").removeClass("active");
            $(this).addClass("active");
            global.kidorgImg.css({
                "background-image":"url(img/org0.png)"
            });
            break;
            case 1 :
            $(".kid_org .colors .org.active").removeClass("active");
            $(this).addClass("active");
            global.kidorgImg.css({
                "background-image":"url(img/org1.png)"
            });
            break;
            case 2 :
            $(".kid_org .colors .org.active").removeClass("active");
            $(this).addClass("active");
            global.kidorgImg.css({
                "background-image":"url(img/org2.png)"
            });
            break;
            case 3 :
            $(".kid_org .colors .org.active").removeClass("active");
            $(this).addClass("active");
            global.kidorgImg.css({
                "background-image":"url(img/org3.png)"
            });
            break;
            default:
            global.kidorgImg.css({
                "background-image":"url(img/org0.png)"
            });
          }
        })

        $(".kid_tbl .colors .tbl").click(function(){
          $(".kid_tbl .colors .tbl").eq(0).removeClass("active");

          var index = $(this).index(".tbl");

          switch(index){
            case 0 :
            $(".kid_tbl .colors .tbl.active").removeClass("active");
            $(this).addClass("active");
            global.kidtblImg.css({
                "background-image":"url(img/kid_tbl0.png)"
            });
            break;
            case 1 :
            $(".kid_tbl .colors .tbl.active").removeClass("active");
            $(this).addClass("active");
            global.kidtblImg.css({
                "background-image":"url(img/kid_tbl1.png)"
            });
            break;
            case 2 :
            $(".kid_tbl .colors .tbl.active").removeClass("active");
            $(this).addClass("active");
            global.kidtblImg.css({
                "background-image":"url(img/kid_tbl2.png)"
            });
            break;
            case 3 :
            $(".kid_tbl .colors .tbl.active").removeClass("active");
            $(this).addClass("active");
            global.kidtblImg.css({
                "background-image":"url(img/kid_tbl3.png)"
            });
            break;
            default:
            global.kidtblImg.css({
                "background-image":"url(img/kid_tbl0.png)"
            });
          }
        })

        $(".kid_char .colors .char").click(function(){
          $(".kid_char .colors .char").eq(0).removeClass("active");

          var index = $(this).index(".char");

          switch(index){
            case 0 :
            $(".kid_char .colors .char.active").removeClass("active");
            $(this).addClass("active");
            global.kidcharImg.css({
                "background-image":"url(img/kid_tbl0.png)"
            });
            break;
            case 1 :
            $(".kid_char .colors .char.active").removeClass("active");
            $(this).addClass("active");
            global.kidcharImg.css({
                "background-image":"url(img/kid_chair1.png)"
            });
            break;
            default:
            global.kidcharImg.css({
                "background-image":"url(img/kid_chair0.png)"
            });
          }
        })

var now=0;
var maxData=2;

$(".visual .visual_inner > div").eq(0).addClass("on");

function hwSlide(){
  now = now === maxData ? 0 : now +=1;
  console.log("now ===", now);
  $(".visual .visual_inner > div").eq(now-1).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
  $(".visual .visual_inner > div").css({"opacity" : 0});
  $(".visual .visual_inner > div").removeClass("on");

  $(".visual .visual_inner > div").eq(now).css({"opacity" : 1});
  $(".visual .visual_inner > div").eq(now).addClass("on");
  });
}


setInterval(function() {
		hwSlide();
	}, 5000);

})
