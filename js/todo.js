
var theContainer=document.querySelector(".the-list");
var parag =document.createElement("p");  

var theInput=document.querySelector(".input");
var theCheck =document.querySelector(".check-field");
var input = document.querySelector(".input");




$(".all").css("color","#0d6efd");
//All
$(document).ready(function(){
    
    $(theInput).on("keyup",function(e){
if(e.keyCode===13){
    
    if(theCheck.checked){
        theCheck.checked=false;
        var theContainer=document.createElement("div"),
            theMark=document.createElement("input"),
            theTodo=document.createElement("p"),
            theClear=document.createElement("span");
            $(theContainer).appendTo(".the-content").addClass("comp-content").attr("id","the-container");
            
            $(theTodo).appendTo(theContainer).text(theInput.value).addClass("comp-todos col-8");
            $(theClear).appendTo(theContainer).text("X").addClass("clear col-2 ms-auto").hide();
            $(theMark).attr("type","checkbox").prependTo(theContainer).addClass("checking col-2").attr("checked",true).on("click",function(){
              
                $(this).attr("checked",false);
                $(this).parent().children().eq(1).toggleClass("comp-todos act-todos");
                $(this).parent().toggleClass("act-content comp-content");
             
            })
            $(theInput).val("");
    }else{
        var theContainer=document.createElement("div"),
            theMark=document.createElement("input"),
            theTodo=document.createElement("p"),
            theClear=document.createElement("span");
            
            $(theContainer).appendTo(".the-content").addClass("act-content").attr("id","the-container");;
            
            $(theTodo).appendTo(theContainer).text(theInput.value).addClass("act-todos col-8");
            $(theClear).appendTo(theContainer).text("X").addClass("clear col-2 ms-auto").hide();
            $(theMark).attr("type","checkbox").prependTo(theContainer).addClass("checking col-2").attr("checked",false).on("click",function(){
                $(this).attr("checked",true);
                $(this).parent().children().eq(1).toggleClass("comp-todos act-todos");
                $(this).parent().toggleClass("act-content comp-content");
                
            });  
            $(theInput).val("");
    }
    $(theContainer).on("mouseenter",function(){
        $(this).addClass("hover");
        $(this).children().eq(2).show().on("click",function(){
            $(theContainer).remove();    
            $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
        });
    })
    $(theContainer).on("mouseleave",function(){
        $(this).removeClass("hover");
        $(this).children().eq(2).hide();
    })
    $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
}
    })
})




//switch between the buttons of the menu
$(document).ready(function(){
    $(".active-list").on("click",function(){
        $(".the-buttons").children().css("color","hsl(234, 39%, 85%)");
        $(".the-buttons").children().eq(2).css("color","#0d6efd");
      theCheck.checked=false;
        $(".comp-content").hide();
        $(".act-content").show();
        $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
        $(".clear-completed").on("click",function(){
         $("div[class='comp-content']").remove();
         $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
     })
    });
    $(".completed").on("click",function(){
        $(".the-buttons").children().css("color","hsl(234, 39%, 85%)");
        $(".the-buttons").children().eq(3).css("color","#0d6efd");
        $(".check-field").attr("checked",true);
        $(".act-content").hide();
        $(".comp-content").show();
        $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
        $(".clear-completed").on("click",function(){
         $("div[class='comp-content']").remove();
         $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
     })
    });
    $(".all").on("click",function(){
        $(".the-buttons").children().css("color","hsl(234, 39%, 85%)");
        $(".the-buttons").children().eq(1).css("color","#0d6efd");
        $(".check-field").attr("checked",false);
        $(".comp-content").show();
        $(".act-content").show();
        $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
        $(".clear-completed").on("click",function(){
             $("div[class='comp-content']").remove();
             $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
         })
    });
    $(".clear-completed").on("click",function(){
         $("div[class='comp-content']").remove();
         $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
     })
})



//title
$(document).ready(function(){
    $(".header-img").css("width","100%").children().css("width","100%");
    $(parag).prependTo(".header-container").text('T'+' '+'O'+' '+'D'+' '+'O').addClass("justify-content-start").css({
        "color":"white",
        "fontFamily" :"arial",
        "fontSize":"30px",
    });
    $(".mode").addClass("ms-auto");
});

   



 //dark and light mode
 $(document).ready(function(){
    
     $(".mode").on("click",function(){
       $.theImageSrc = $(".header-image").attr("src");
       if($.theImageSrc=="images/bg-desktop-dark.jpg"){
             $("body").css("backgroundColor","white");
             $(".mode").attr("src","images/icon-moon.svg");
             $(".header-image").attr("src","images/bg-desktop-light.jpg");
             $(".head-of-list").addClass("light-mode");
             $(".head-of-list").children().addClass("light-mode");
             $(".the-buttons").addClass("light-mode");
             $(".footer").css("color","black");
             $(".counter,.clear-completed,.all,.active-list,.completed").css({
                 "backgroundColor":"hsl(0, 0%, 98%)",
                 "color":"black",
                 "border":"none",
             })
             $(".the-buttons button").on("click",function(){
                $(this).css("color","#0d6efd");
                $(this).siblings().css("color","black");
            })
             $(".comp-content,.act-content").css({
                 "borderBottom":"1px solid black",
                 "backgroundColor": "hsl(0, 0%, 98%)",
                 "color":"black",
                });
             $(".input").on("keyup",function(e){
                if(e.keyCode===13){
                    $(".comp-content ,.act-content").css({
                        "borderBottom":"1px solid black",
                        "backgroundColor": "hsl(0, 0%, 98%)",
                        "color":"black",
                    });
                   
                    $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
                }
             })
            
         }if($.theImageSrc=="images/bg-desktop-light.jpg"){
          

            
            $("body").css("backgroundColor","hsl(235, 21%, 11%)");
            $(".mode").attr("src","images/icon-sun.svg");
            $(".header-image").attr("src","images/bg-desktop-dark.jpg");
            $(".head-of-list").removeClass("light-mode");
            $(".head-of-list").children().removeClass("light-mode");
            $(".the-buttons").removeClass("light-mode");
            $(".footer").css("color","white");
            $(".counter,.clear-completed,.all,.active-list,.completed").css({
                "backgroundColor":"hsl(235,24%,19%)",
                "color":"hsl(234, 39%, 85%)",
                "border":"none",
            })
            $(".the-buttons button").on("click",function(){
                $(this).css("color","#0d6efd");
                $(this).siblings().css("color","hsl(234, 39%, 85%)");
            })
            $(".counter").css("color","#0d6efd");
           
            $(".comp-content,.act-content").css({
                "backgroundColor":"hsl(235,24%,19%)",
                "color":"hsl(234, 39%, 85%)",
                "borderBottom":"1px solid hsl(234, 39%, 85%)",
            });

            $(".input").on("keyup",function(e){
               if(e.keyCode===13){
                   $(".comp-content ,.act-content").css({
                       "borderBottom":"1px solid hsl(234, 39%, 85%)",
                       "backgroundColor": "hsl(235,24%,19%)",
                        "color":"white",
                    });
                
                   $(".counter").text($("div[class='comp-content']:visible").length+$("div[class='act-content']:visible").length+"items");
               }
        })
        }
    })
 })







