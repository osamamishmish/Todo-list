
var theContainer=document.querySelector(".the-list");
var parag =document.createElement("p");  
var buttons =[
    "0 items ",
    "All",
    "Active",
    "Completed",
    "Clear Completed",
];
var completedInput=document.querySelector(".comp-input");
var theRadio =document.querySelector(".radio-button");
var input = document.querySelector(".input");
$.theImageSrc = $(".header-image").attr("src");
var content=[];
var compArr = [];
var actArr=[];

var arr=[];
var arrConv=[];
var arr1=[];
var arrX=[];
var arrClearing=[];
var refArr=[];
var indexArr=[];
console.log(arr);
console.log(arr1);


//create the buttons
function createNode(){
    "use strict";
    var pContainer=document.createElement("div");
    $(".list-footer").prepend(pContainer);
    pContainer.classList.add("the-button-container");
    
};
createNode();
var todo = document.querySelectorAll(".title");
$(document).ready(function(){
    for(let x=0; x<buttons.length;x++){
        var theButtons = document.createElement("button");
        $(theButtons).appendTo(".the-button-container").text(buttons[x]).addClass("buttons");
        $(".buttons").eq(4).attr("id","clear-button");
        $(".buttons").eq(1).css("color","hsl(234, 39%, 85%)")
        $(".buttons").eq(1).attr("id","all-content");
        $(theButtons).on("mouseenter",function(){
            $(this).addClass("button-style");
        })
        $(theButtons).on("mouseleave",function(){
            $(this).removeClass("button-style");
        })
    }
    
});







$(function(){
    "use strict";
    var theNavButton = document.querySelectorAll(".navbar-nav button");
    $(theNavButton).on("mouseenter",function(){
        $(this).addClass("nav-color");
    })
    $(theNavButton).on("mouseleave",function(){
        $(this).removeClass("nav-color");
    })
    
})

//

//starting content
$(document).ready(function(){  
    $(".input").on("keyup",function(e){
        if(e.keyCode===13){
            $(".nav-link").eq(1).addClass("all-button");
            if(theRadio.checked){
                $(".input").css("textDecoration","line-through");
                content.push({title:input.value ,status:"completed"});
              compArr.push(input.value);
              arrConv.push(input.value);
         var deleted=content.map(function(e){
            return e.title
        }).indexOf(input.value);
        arrClearing.push(deleted);
              theRadio.checked=false; 
         } else{
                content.push({title:input.value ,status:"active"});
                    actArr.push(input.value);

            }
            
            
           $(".input").css("textDecoration","none");
         $(".nav-link").eq(0).text($(content).length+"items");
         $(".counter").text($(content).length+"items");
  var newDiv=document.createElement("div"),
  theTitle=document.createElement("p"),
  radio = document.createElement("input"),
  clear = document.createElement("span");
     for(let index=0;index<content.length ; index++){
       
         $(radio).attr("type","radio").appendTo(newDiv).addClass("circle").attr("id","button");
             $(theTitle).appendTo(newDiv);
            
             $(newDiv).slideDown(2000).addClass("added-content").attr("id","all-container");
             theContainer.insertBefore(newDiv ,theContainer.lastElementChild);
             
             $.theImageSrc = $(".header-image").attr("src");
             if($.theImageSrc== "images/bg-desktop-light.jpg"){
                $(newDiv).css({
                    "backgroundColor":"hsl(0, 0%, 98%)",
                    "color":"black",
                })
                 
             }
             $(theTitle).text(content[index].title).css({
                     "marginLeft":"50px",
                     "marginTop":"-25px",
                     "gridArea":"6/3/7/6",
                     "Font-size": "18px",
                     "font-family":"Josefin Sans",
             }).addClass("title");
             
             $(clear).appendTo(newDiv).text("x").addClass("clear").css("visibility","hidden").attr("id","the-clear");
             
           
             if(content[index].status=="completed"){
                 $(newDiv).attr("id","comp-list");
             }if(content[index].status=="active"){
                
                 $(newDiv).attr("id","act-list");
             }          
     if(content[index].status=="completed"){
                 
         $(theTitle).css("textDecoration","line-through");
         
     }if(content[index].status=="active"){
         $(theTitle).css("textDecoration","none"); 
     }
     
   $(newDiv).on("mouseenter",function(){ 
         $(this).children().eq(2).css({
             "visibility":"visible",
             "cursor":"pointer",
             
     });
        $(this).children().eq(1).attr("id","clicked"); 
        
        
     });
     
         
         $(newDiv).eq(index).on("mouseleave",function(){
             $(newDiv).eq(index).children().eq(2).css("visibility","hidden");
             $(this).children().eq(1).removeAttr("id");
         })
         $(".nav-link").eq(0).text($(content).length+"items");
         $(".counter").text($(content).length+"items");
        }
        
        $(radio).on("click",function(){
            $(this).parent().children().eq(1).css("textDecoration","line-through");
            $(this).parent().attr("id","comp-list");
            compArr.push($(this).next().text());
            arrConv.push($(this).next().text());
            var deletedIndex=content.map(function(e){
               return e.title
           }).indexOf($(this).next().text());
           arrClearing.push(deletedIndex);
          
         
            var delFromAct=actArr.indexOf($(this).next().text());
            actArr.splice(delFromAct,1);
            for(let index=0 ;index<content.length;index++){
            if(content[index].title==$(this).parent().children().eq(1).text() &&content[index].status=="active"){
                content[index].status="completed";
            }
             
            }
            
    });
    
    $(clear).on("click",function(){            
        
        arr.push($("#clicked").text());
        refArr.push($("#clicked").text());
        var deleted=content.map(function(e){
            return e.title
        }).indexOf($("#clicked").text());
        console.log(deleted);
        arr1.push(deleted);
        indexArr.push(deleted);
        
        for(let index=0;index<indexArr.length;index++){
            content.splice(arr1[0],1);
            arr1.shift();
            if(index==indexArr.length-1){
                indexArr=[];
            }
        }
        var theId = $("#clicked").parent().attr("id");
        console.log(arr); 
        $("#clicked").parent().remove();
     for(let i=0 ;i<refArr.length ; i++){
        
      console.log("hhhhhhhhhh")
      var  actRemove=actArr.indexOf(arr[0]),
           compRemove=compArr.indexOf(arr[0]);
      if(theId=="act-list"){
          actArr.splice(actRemove,1);
      }if(theId=="comp-list"){
          compArr.splice(compRemove,1);
      }
      arr.shift();
      if(i==refArr.length-1){
          refArr=[];
      }
    }
    $(".nav-link").eq(0).text($(content).length+"items");
    $(".counter").text($(content).length+"items");
    }) 
    
    $(".nav-link").eq(4).on("click",function(){
        $(".nav-link").eq(0).text($(content).length+"items");
        $(".counter").text($(content).length+"items");
    })   
    
} 
})   
})







//clear completed
$(document).ready(function(){
   
    $(".nav-link").eq(4).on("click",function(){
        $(".navbar-collapse").removeClass("show");
      $("div[id='comp-list']").remove();
      $("div[id='comp-content']").remove();
    
    for(let x=0;x<arrClearing.length;x++){    
        compArr.splice(compArr.indexOf(arrConv[0]),1);
       
                let index=content.findIndex(x=>x.title==arrConv[0]);
                content.splice(index,1);
                console.log("hhhhhh")
                arrConv.shift();
                if(x==arrClearing.length-1){
                    arrClearing=[];
                }
    } 


    })

})

console.log("arrClear",arrClearing);
console.log("arrConv",arrConv);







//ALL
$(document).ready(function(){
    $(".nav-link").eq(1).on("click",function(){
        $(".navbar-collapse").removeClass("show");
        $(".the-menu").text($(".nav-link").eq(1).text());
        theRadio.checked=false;
        $(".input").on("keyup",function(e){
            if(e.keyCode===13){
                $(".nav-link").eq(0).text($(content).length+"items");
                $(".counter").text($(content).length+"items");
            }
        })
        $(".nav-link").eq(1).addClass("nav-color");
        $(".nav-link").eq(2).removeClass("nav-color");
        $(".nav-link").eq(3).removeClass("nav-color");
       /* $(".buttons").eq(1).css("color","hsl(234, 39%, 85%)");
        $(".buttons").eq(2).css("color","hsl(233, 14%, 35%)");
        $(".buttons").eq(3).css("color","hsl(233, 14%, 35%)");*/
        $("#act-content").remove();
        $("#comp-content").remove();
        $(".added-content").remove();
        $(".added-one").remove();
       $("#comp-list").remove();
        
        $(".nav-link").eq(0).text($(content).length+"items");
        $(".counter").text($(content).length+"items");
         for(let index=0;index<content.length ; index++){
            var newDiv=document.createElement("div"),
            theTitle=document.createElement("p"),
            radio = document.createElement("input"),
            clear = document.createElement("span");
             $(radio).attr("type","radio").appendTo(newDiv).addClass("circle").attr("id","button");
                 $(theTitle).appendTo(newDiv);
                
                 $(newDiv).slideDown(2000).addClass("added-content")/*.attr("id","all-container")*/;
                 theContainer.insertBefore(newDiv ,theContainer.lastElementChild);
                 
                 $.theImageSrc = $(".header-image").attr("src");
                 if($.theImageSrc== "images/bg-desktop-light.jpg"){
                    $(newDiv).css({
                        "backgroundColor":"hsl(0, 0%, 98%)",
                        "color":"black",
                    })
                     
                 }
                 $(theTitle).text(content[index].title).css({
                         "marginLeft":"50px",
                         "marginTop":"-25px",
                         "gridArea":"6/3/7/6",
                         "Font-size": "18px",
                         "font-family":"Josefin Sans",
                 }).addClass("title");
                 
                 $(clear).appendTo(newDiv).text("x").addClass("clear").css("visibility","hidden").attr("id","the-clear");
                 
               
                 if(content[index].status=="completed"){
                     $(newDiv).attr("id","comp-list");
                 }if(content[index].status=="active"){
                    
                     $(newDiv).attr("id","act-list");
                 }          
         if(content[index].status=="completed"){
                     
             $(theTitle).css("textDecoration","line-through");
             
         }if(content[index].status=="active"){
             $(theTitle).css("textDecoration","none"); 
         }
       $(newDiv).on("mouseenter",function(){ 
             $(this).children().eq(2).css({
                 "visibility":"visible",
                 "cursor":"pointer",
         })
         $(this).children().eq(1).attr("id","clicked");
      });
             
             $(newDiv).on("mouseleave",function(){
                $(this).children().eq(2).css("visibility","hidden");
                $(this).children().eq(1).removeAttr("id");
             })
             $(".nav-link").eq(0).text($(content).length+"items");
             $(".counter").text($(content).length+"items");
             
            }
            $(".circle").on("click",function(){
                $(this).parent().children().eq(1).css("textDecoration","line-through");
                $(this).parent().attr("id","comp-list");
                compArr.push($(this).next().text());
                arrConv.push($(this).next().text());
               var deletedIndex=content.map(function(e){
                    return e.title
                }).indexOf($(this).next().text());
                arrClearing.push(deletedIndex);
                var delFromAct=actArr.indexOf($(this).next().text());
                actArr.splice(delFromAct,1);
                for(let index=0 ;index<content.length;index++){
                if(content[index].title==$(this).parent().children().eq(1).text() &&content[index].status=="active"){
                    content[index].status="completed";
                }
                 
                }
        });
        
        $(".clear").on("click",function(){            
        
            arrX.push($("#clicked").text());
            refArr.push($("#clicked").text());
            var deleted=content.map(function(e){
                return e.title
            }).indexOf($("#clicked").text());
            console.log(deleted);
            var arrDeleted=[];
            arrDeleted.push(deleted);
            indexArr.push(deleted);
            
            for(let index=0;index<indexArr.length;index++){
                content.splice(arrDeleted[0],1);
                arrDeleted.shift();
                if(index==indexArr.length-1){
                    indexArr=[];
                }
            }
            var theId = $("#clicked").parent().attr("id");
            console.log(arr); 
            $("#clicked").parent().remove();
         for(let i=0 ;i<refArr.length ; i++){
            
          console.log("hhhhhhhhhh")
          var  actRemove=actArr.indexOf(arrX[0]),
               compRemove=compArr.indexOf(arrX[0]);
          if(theId=="act-list"){
              actArr.splice(actRemove,1);
          }if(theId=="comp-list"){
              compArr.splice(compRemove,1);
          }
          arrX.shift();
          if(i==refArr.length-1){
              refArr=[];
          }
        }
        $(".nav-link").eq(0).text($(content).length+"items");
        $(".counter").text($(content).length+"items");
        })
        
        $(".nav-link").eq(4).on("click",function(){
            $(".nav-link").eq(0).text($(content).length+"items");
            $(".counter").text($(content).length+"items");
        })
      //  $(".buttons").eq(0).text($(content).length+"items");   
    })
})  
 

 

 



//completed tasks
$(document).ready(function(){
    
    $(".nav-link").eq(3).on("click",function(){
        $(".navbar-collapse").removeClass("show");
        $(".the-menu").text($(".nav-link").eq(3).text());
        theRadio.checked=true;
$(".input").on("keyup",function(e){
if(e.keyCode===13){
    $(".nav-link").eq(0).text($(compArr).length+"items");
    $(".counter").text($(compArr).length+"items");
}
})
$(".nav-link").eq(3).addClass("nav-color");
$(".nav-link").eq(2).removeClass("nav-color");
$(".nav-link").eq(1).removeClass("nav-color");
       /* $(".buttons").eq(3).css("color","hsl(234, 39%, 85%)");
        $(".buttons").eq(2).css("color","hsl(233, 14%, 35%)");
        $(".buttons").eq(1).css("color","hsl(233, 14%, 35%)"); */
     $(".added-one").remove();
     $(".added-content").remove();
     $("#act-content").remove();
      /* $(".list-footer").show();*/
      $(".nav-link").eq(0).text($(compArr).length+"items");
      $(".counter").text($(compArr).length+"items");
     for(let i =0 ; i<compArr.length;i++){
            var newDiv=document.createElement("div"),
            theTitle=document.createElement("p"),
            radio = document.createElement("input"),
            clear = document.createElement("span");
            $(theTitle).appendTo(newDiv);
           
                
            
           $(newDiv).slideDown(2000).addClass("added-one").attr("id","comp-content");
           theContainer.insertBefore(newDiv ,theContainer.lastElementChild);
           $.theImageSrc = $(".header-image").attr("src");
           if($.theImageSrc== "images/bg-desktop-light.jpg"){
               $(newDiv).toggleClass("the-added");
               
           }if($.theImageSrc== "images/bg-desktop-dark.jpg"){
               $(newDiv).toggleClass("the-added-dark").css({
                   "border":"1px solid transparent",
                   "borderBottom":"1px solid lightgrey",
               });
               
           }  
            $(theTitle).text(compArr[i]).css({
                            "marginLeft":"50px",
                            "marginTop":"-25px",
                            "gridArea":"6/3/7/6",
                            "Font-size": "18px",
                            "font-family":"Josefin Sans",
                        }).addClass("title");
                        
                        $(radio).attr("type","radio").prependTo(newDiv).addClass("circle");
                        $(clear).appendTo(newDiv).text("x").addClass("clear").css("visibility","hidden"); 
                       $(".added-one").on("mouseenter",function(){
                          $(this).children().eq(2).css({
                              "visibility":"visible",
                              "cursor":"pointer",
                      }).attr("id","clicked");
                      
                      $(".added-one").on("mouseleave",function(){
                          $(this).children().eq(2).css("visibility","hidden").removeAttr("id");
                          
                      })  
                        })   
        }
        $(".nav-link").eq(4).on("click",function(){
            $(".nav-link").eq(0).text($(compArr).length+"items");
            $(".counter").text($(compArr).length+"items");
        })
    })
})








//active tasks
$(document).ready(function(){
    $(".nav-link").eq(2).on("click",function(){
        "use strict";
        $(".navbar-collapse").removeClass("show");
        $(".the-menu").text($(".nav-link").eq(2).text());
        theRadio.checked=false;
        $(".input").on("keyup",function(e){
            if(e.keyCode===13){
                $(".nav-link").eq(0).text($(actArr).length+"items");
                $(".counter").text($(actArr).length+"items");
            }
            })
            $(".nav-link").eq(2).addClass("nav-color");
            $(".nav-link").eq(1).removeClass("nav-color");
            $(".nav-link").eq(3).removeClass("nav-color");
    $(".added-content").remove();
    $(".added-one").remove();
       $("#comp-content").remove();
        $(".list-footer").show();
        
        
        $(".nav-link").eq(0).text($(actArr).length+"items");
        $(".counter").text($(actArr).length+"items");
       
        for(let i =0 ; i<actArr.length;i++){
            var newDiv=document.createElement("div"),
                theTitle=document.createElement("p"),
                radio = document.createElement("input"),
                clear = document.createElement("span");
            $(theTitle).appendTo(newDiv);
            
           $(newDiv).slideDown(2000).addClass("added-one").attr("id","act-content");
           theContainer.insertBefore(newDiv ,theContainer.lastElementChild);
           
           $.theImageSrc = $(".header-image").attr("src");
           if($.theImageSrc== "images/bg-desktop-light.jpg"){
               $(newDiv).toggleClass("the-added");
               
           }if($.theImageSrc== "images/bg-desktop-dark.jpg"){
               $(newDiv).toggleClass("the-added-dark").css({
                   "border":"1px solid transparent",
                   "borderBottom":"1px solid lightgrey",
               }); 
           }  
            $(theTitle).text(actArr[i]).css({
                            "marginLeft":"50px",
                            "marginTop":"-25px",
                            "gridArea":"6/3/7/6",
                            "Font-size": "18px",
                            "font-family":"Josefin Sans",
                        }).addClass("title");
                        
                        $(radio).attr("type","radio").prependTo(newDiv).addClass("circle");
                        $(clear).appendTo(newDiv).text("x").addClass("clear").css("visibility","hidden");
                       $(newDiv).on("mouseenter",function(){
                          $(this).children().eq(2).css({
                              "visibility":"visible",
                              "cursor":"pointer",
                      }).attr("id","clicked");
                          })
                      
                      $(newDiv).on("mouseleave",function(){
                          $(this).children().eq(2).css("visibility","hidden").removeAttr("id");
                      })
                    
                     
        }
        $(".nav-link").eq(0).text($(actArr).length+"items");
        $(".counter").text($(actArr).length+"items");
    })
})





//clear by (x) from active list
var arr2=[];
$(document).ready(function(){
    $(".nav-link").eq(2).on("click",function(){
            $(".clear").on("click",function(){
                $(".nav-link").eq(0).text($(actArr).length+"items");
                $(".counter").text($(actArr).length+"items");
                console.log("sssss")
                
                arr2.push($("#clicked").prev().text());
                refArr.push($("#clicked").prev().text());
                console.log(arr2);
                var deleted=content.map(function(e){
                    return e.title
                }).indexOf($("#clicked").prev().text());
                console.log(deleted);
                var arrXactive=[];
                arrXactive.push(deleted);
                indexArr.push(deleted);
                $("#clicked").parent().remove();
                for(let index=0;index<indexArr.length;index++){
                    content.splice(arrXactive[0],1);
                    arrXactive.shift();
                    $(".nav-link").eq(0).text($(actArr).length+"items");
                    if(index==indexArr.length-1){
                        indexArr=[];
                    }
                }
                for(let i=0;i<refArr.length;i++){
                    var actRemoved=actArr.indexOf(arr2[0]);
                    actArr.splice(actRemoved,1);
                    $(".nav-link").eq(0).text($(actArr).length+"items");
                    arr2.shift();  
                if(i==refArr.length-1){
                    refArr=[];
                }
                }
                
                $(".nav-link").eq(0).text($(actArr).length+"items");
                $(".counter").text($(actArr).length+"items");
            })
            
           // $(".buttons").eq(0).text($("#act-content").children().length+"items");           
                       
        
    })
})




//clear by (x) from completed list
var arr3=[];
var arrXcomp=[];
$(document).ready(function(){
    $(".nav-link").eq(3).on("click",function(){
            $(".clear").on("click",function(){
                $(".nav-link").eq(0).text($(compArr).length+"items");
                $(".counter").text($(compArr).length+"items");
                arr3.push($("#clicked").prev().text());
                refArr.push($("#clicked").prev().text());
                console.log(arr3);
                var deleted=content.map(function(e){
                    return e.title
                }).indexOf($("#clicked").prev().text());
                console.log(deleted);
                
                arrXcomp.push(deleted);
                indexArr.push(deleted);
                
                $("#clicked").parent().remove();
                for(let index=0;index<indexArr.length;index++){
                    content.splice(arrXcomp[0],1);
                    arrXcomp.shift();
                    if(index==indexArr.length-1){
                        indexArr=[];
                    }
                    $(".nav-link").eq(0).text($(compArr).length+"items");
                    $(".counter").text($(compArr).length+"items");
                    
                }
                for(let i=0;i<refArr.length;i++){
                    var compRemoved=compArr.indexOf(arr3[0]);
                    compArr.splice(compRemoved,1);
                    $(".nav-link").eq(0).text($(compArr).length+"items");
                    $(".counter").text($(compArr).length+"items");
                    arr3.shift();
                    if(i==refArr.length-1){
                        refArr=[];
                    }
                }
                
                
               
            })
            $(".nav-link").eq(0).text($(compArr).length+"items");
            $(".counter").text($(compArr).length+"items");
           // $(".buttons").eq(0).text($("#comp-content").children().length+"items");
                        
       
    })
})


console.log("arrX",arrXcomp);



//title
$(document).ready(function(){
    $(".header-img").css("width","100%").children().css("width","100%");
    $(parag).appendTo(".header-container").text('T'+' '+'O'+' '+'D'+' '+'O').css({
        "color":"white",
        "fontFamily" :"arial",
    });
});

   
 



//create footer
function createFooter(){
    'use strict';
    var p = document.createElement("p");
   $(".the-list").append(p);
    p.classList.add("footer");
    p.textContent="Drag and drop to record list";
}
createFooter();






//dark and light mode
$(document).ready(function(){

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
 //  $(".nav-link").css("backgroundColor","hsl(0, 0%, 98%)");
    $(".navbar").css("backgroundColor","hsl(0, 0%, 98%)");
    $(".navbar-nav button").css({
        "border":"1px solid hsl(0, 0%, 98%)",
        "backgroundColor":"hsl(0, 0%, 98%)",
        "color":"black",
    });
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
     //   $(".nav-link").css("backgroundColor","hsl(235,24%,19%)");
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
      
})

console.log("content",content);
console.log("compArr",compArr);
console.log("actArr",actArr);
