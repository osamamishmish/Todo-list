
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
    }
    $(theContainer).on("mouseenter",function(){
        $(this).addClass("hover");
        $(this).children().eq(2).show().on("click",function(){
            $(theContainer).remove();    
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
    // $(function(){

     
    
     $(".mode").on("click",function(){
       //  $(this).off("click");
       $.theImageSrc = $(".header-image").attr("src");
       if($.theImageSrc=="images/bg-desktop-dark.jpg"){
             $("body").css("backgroundColor","white");
             $(".mode").attr("src","images/icon-moon.svg");
             $(".header-image").attr("src","images/bg-desktop-light.jpg");
             $(".head-of-list").addClass("light-mode");
             $(".head-of-list").children().addClass("light-mode");
             $(".the-buttons").addClass("light-mode");
             $(".footer").css("color","black");
           //  $(".the-buttons").addClass("light-mode");
             $(".counter,.clear-completed,.all,.active-list,.completed").css({
                 "backgroundColor":"hsl(0, 0%, 98%)",
                 "color":"black",
                 "border":"none",
             })
             $(".comp-content").addClass("light-mode").css("borderBottom","1px solid black");
                    $(".act-content").addClass("light-mode").css("borderBottom","1px solid black");
             $(".input").on("keyup",function(e){
                if(e.keyCode===13){
                    $(".comp-content").addClass("light-mode").css("borderBottom","1px solid black");
                    $(".act-content").addClass("light-mode").css("borderBottom","1px solid black");
                }
             })
            
         }if($.theImageSrc=="images/bg-desktop-light.jpg"){
          // $(".mode").on("click",function(){

            
            $("body").css("backgroundColor","hsl(235, 21%, 11%)");
            $(".mode").attr("src","images/icon-sun.svg");
            $(".header-image").attr("src","images/bg-desktop-dark.jpg");
            $(".head-of-list").removeClass("light-mode");
            $(".head-of-list").children().removeClass("light-mode");
            $(".the-buttons").removeClass("light-mode");
            $(".footer").css("color","black");
            $(".counter,.clear-completed,.all,.active-list,.completed").css({
                "backgroundColor":"hsl(235,24%,19%)",
                "color":"hsl(234, 39%, 85%)",
                "border":"none",
            })
            $(".comp-content").removeClass("light-mode").css("borderBottom","1px solid black");
                   $(".act-content").removeClass("light-mode").css("borderBottom","1px solid black");
            $(".input").on("keyup",function(e){
               if(e.keyCode===13){
                   $(".comp-content").removeClass("light-mode").css("borderBottom","1px solid black");
                   $(".act-content").removeClass("light-mode").css("borderBottom","1px solid black");
               }
       //     })
        })
        }
    })
 })







//dark and light mode
/*$(document).ready(function(){

$(".mode").on("click",function(){
    "use strict";
    $.theImageSrc = $(".header-image").attr("src");
    if($.theImageSrc=="images/bg-desktop-dark.jpg"){
    $(".mode").attr("src","images/icon-moon.svg");
    $(".header-image").attr("src","images/bg-desktop-light.jpg");
    $("body").css("backgroundColor","hsl(236, 33%, 92%)");
    $(".head-of-list").css("backgroundColor","hsl(0, 0%, 98%)");
    $(".input").css("backgroundColor","hsl(0, 0%, 98%)");
    $(".input").css("color","black");
    $(".navbar").css("backgroundColor","hsl(0, 0%, 98%)");
    $(".navbar-nav button").css({
        "border":"1px solid hsl(0, 0%, 98%)",
        "backgroundColor":"hsl(0, 0%, 98%)",
        "color":"black",
    });
    $(".nav-link").css("color","black");
    $(".navbar-toggler-icon").css("backgroundColor","lightgrey");
    $(".added-one").css({
        "backgroundColor":"hsl(0, 0%, 98%)",
        "color":"black",
        "borderBottom":"1px solid lightgrey",   
    })
    $(".added-content").css({
        "backgroundColor":"hsl(0, 0%, 98%)",
        "color":"black",
        "borderBottom":"1px solid lightgrey",   
    })
    $(".the-added, .added-one ,.the-added-dark ,.added-content").on("mouseenter",function(){
        $(this).css({
            "backgroundColor":"hsl(0, 0%, 98%)",
        })
    })
    $(".the-added, .added-one ,.the-added-dark ,.added-content").on("mouseleave",function(){
        $(this).css({
            "backgroundColor":"hsl(0, 0%, 98%)",
        })
    })

   
}if($.theImageSrc=="images/bg-desktop-light.jpg"){
        $(".mode").attr("src","images/icon-sun.svg");
        $(".header-image").attr("src","images/bg-desktop-dark.jpg");
        $("body").css("backgroundColor","hsl(235, 21%, 11%)");
        $(".head-of-list").css("backgroundColor","hsl(235,24%,19%)");
        $(".input").css("backgroundColor","hsl(235,24%,19%)");
        $(".input").css("color","lightgrey");
        
     $(".navbar-nav button").css({
        "border":"1px solid hsl(235,24%,19%)",
        "backgroundColor":"hsl(235,24%,19%)",
        "color":"lightgrey",
    });
   
    $(".navbar-toggler-icon").css("color","black");
        $(".navbar").css("backgroundColor","hsl(235,24%,19%)");
        $(".added-one").css({
            "backgroundColor":"hsl(235,24%,19%)",
            "color":"lightgrey",
        })
        $(".added-content").css({
            "backgroundColor":"hsl(235,24%,19%)",
            "color":"lightgrey",
        }) 
        $(".the-added, .added-one ,.the-added-dark ,.added-content").on("mouseenter",function(){
            $(this).css({
                "backgroundColor":"hsl(233, 14%, 35%)",
            })
        })
        $(".the-added, .added-one ,.the-added-dark ,.added-content").on("mouseleave",function(){
            $(this).css({
                "backgroundColor":"hsl(235,24%,19%)",
            })
        })
}

})
      
})*/

//console.log("content",content);
//console.log("compArr",compArr);
//console.log("actArr",actArr);
