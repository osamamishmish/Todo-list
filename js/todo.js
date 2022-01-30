
var theContainer=document.querySelector(".the-list");
var parag =document.createElement("p");  

var theInput=document.querySelector(".input");
var theCheck =document.querySelector(".check-field");
var input = document.querySelector(".input");
$.theImageSrc = $(".header-image").attr("src");
var content=[];
//var compArr = [];
//var actArr=[];

/*var arr=[];
var arrConv=[];
var arr1=[];
var arrX=[];
var arrClearing=[];
var refArr=[];
var indexArr=[];
console.log(arr);
console.log(arr1);*/
//$(".all").addClass("shine");
$(".all").css("color","#0d6efd");
//All
$(document).ready(function(){
    
    $(theInput).on("keyup",function(e){
if(e.keyCode===13){
    
    if(theCheck.checked){
        content.push({title:theInput.value ,status:"completed"});
        theCheck.checked=false;
        var theContainer=document.createElement("div"),
            theMark=document.createElement("input"),
            theTodo=document.createElement("p"),
            theClear=document.createElement("span");
            $(theContainer).appendTo(".the-content").addClass("comp-content");
            $(theMark).attr("type","checkbox").prependTo(theContainer).addClass("checking col-2").attr("checked",true);
            $(theTodo).appendTo(theContainer).text(theInput.value).addClass("comp-todos col-8");
            $(theClear).appendTo(theContainer).text("X").addClass("clear col-2 ms-auto").hide();
    }else{
        content.push({title:theInput.value ,status:"active"});
        var theContainer=document.createElement("div"),
            theMark=document.createElement("input"),
            theTodo=document.createElement("p"),
            theClear=document.createElement("span");
            $(theContainer).appendTo(".the-content").addClass("act-content");
            $(theMark).attr("type","checkbox").prependTo(theContainer).addClass("checking col-2");
            $(theTodo).appendTo(theContainer).text(theInput.value).addClass("act-todos col-8");
            $(theClear).appendTo(theContainer).text("X").addClass("clear col-2 ms-auto").hide();
    }
    
}
    })
})

//change lists
$(document).ready(function(){
    $(".active-list").on("click",function(){
        $(".check-field").attr("checked",false);
        $(".comp-content").hide();
        $(".act-content").show();
    });
    $(".completed").on("click",function(){
        $(".check-field").attr("checked",true);
        $(".act-content").hide();
        $(".comp-content").show();
    });
    $(".all").on("click",function(){
        $(".check-field").attr("checked",false);
        $(".comp-content").show();
        $(".act-content").show();
    });

})


$(document).ready(function(){
    $(".checking").click(function(){
        if($(this).prop("checked") == true){
           var indexOfComp=content.indexOf($(this).siblings().next().text());
           content[indexOfComp].status="active";
           $(".checking").siblings().next().toggleClass("comp-todos act-todos");
           $(".checking").parent().toggleClass("comp-content act-content");
           $(this).prop("checked") = false;
        }
        else if($(this).prop("checked") == false){
            var indexOfAct=content.indexOf($(this).siblings().next().text());
           content[indexOfAct].status="completed";
           $(".checking").siblings().next().toggleClass("comp-todos act-todos");
           $(".checking").parent().toggleClass("comp-content act-content");
           $(this).prop("checked") = true;
        }
    });
})

/*$(document).ready(function(){
    
        for(let index=0 ;index<content.length;index++){
           if($(".checking").eq(index).attr("checked")==true&&content[index].status=="completed"){

           $(".checking").eq(index).on("click",function(){

           
           // if($(this).siblings().next().text()==content[index].title&& content[index].status=="completed"){
                content[index].status="active";
                $(".checking").eq(index).siblings().next().toggleClass("comp-todos act-todos");
                $(".checking").eq(index).parent().toggleClass("comp-content act-content");
                //$(this).parent().addClass("act-content");
         //   }
         
})
        }
        }
    
})*/

/*$(function(){
    "use strict";
    $.theImageSrc = $(".header-image").attr("src");
    
        $(".navbar-nav button").eq(4).on("mouseenter",function(){
            $(this).css("color","#0d6efd");
        })
        $(".navbar-nav button").eq(4).on("mouseleave",function(){
            $(this).css("color","darkgrey")
        })
})*/

//
//$(".nav-link").eq(1).css("color","#0d6efd");
//starting content
/*$(document).ready(function(){  
    $(".input").on("keyup",function(e){
        if(e.keyCode===13){
           
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




$(document).ready(function(){


$(".circle").on("click",function(){
for(let index=0 ;index<content.length;index++){
    
    if(content[index].title==$(".circle").parent().children().eq(1).text() &&content[index].status=="active"){
        content[index].status="completed";
$(".circle").parent().children().eq(1).css("textDecoration","line-through");
$(".circle").parent().attr("id","comp-list");
compArr.push($(".circle").next().text());
arrConv.push($(".circle").next().text());
var deletedIndex=content.map(function(e){
   return e.title
}).indexOf($(".circle").next().text());
arrClearing.push(deletedIndex);


var delFromAct=actArr.indexOf($(".circle").next().text());
actArr.splice(delFromAct,1);

}if(content[index].title==$(".circle").parent().children().eq(1).text() &&content[index].status=="completed"){
    content[index].status="active";
    $(".circle").parent().children().eq(1).css("textDecoration","none");
$(".circle").parent().attr("id","act-list");
actArr.push($(".circle").next().text());
/* arrConv.push($(this).next().text());
var deletedIndex=content.map(function(e){
   return e.title
}).indexOf($(this).next().text());
arrClearing.push(deletedIndex);*/


/*var delFromComp=compArr.indexOf($(".circle").next().text());
compArr.splice(delFromComp,1);
}
 
}

});
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
        $(".nav-link").eq(1).css("color","#0d6efd");
        $(".nav-link").eq(2).css("color","darkgrey");
        $(".nav-link").eq(3).css("color","darkgrey");
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
               /*  theContainer.insertBefore(newDiv ,theContainer.lastElementChild);
                 
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

$(".nav-link").eq(3).css("color","#0d6efd");
$(".nav-link").eq(2).css("color","darkgrey");
$(".nav-link").eq(1).css("color","darkgrey");
     $(".added-one").remove();
     $(".added-content").remove();
     $("#act-content").remove();
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
            $(".nav-link").eq(2).css("color","#0d6efd");
        $(".nav-link").eq(1).css("color","darkgrey");
        $(".nav-link").eq(3).css("color","darkgrey");
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
                        
       
    })
})


console.log("arrX",arrXcomp);*/



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

   
 



//create footer
/*function createFooter(){
    'use strict';
    var p = document.createElement("p");
   $(".the-list").append(p);
    p.classList.add("footer");
    p.textContent="Drag and drop to record list";
}
createFooter();*/






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

console.log("content",content);
//console.log("compArr",compArr);
//console.log("actArr",actArr);
