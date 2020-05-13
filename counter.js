var upper=document.getElementById("div1")
var lower=document.getElementById("div2")
count=0;

var start=document.getElementById("start");
start.addEventListener("click",function(){
        start.style.boxShadow="2px 2px 10px black";
        var num=document.getElementById("input").value;
        // console.log(num)
        var count=0;
        var outerid=setInterval(function(){
           
            console.log("OUTER INTERVAL")
            text=parseFloat(upper.innerText)
            console.log("*",text);
            upper.innerText=count;
            if(count<num){
                lower.innerText=count+1;
            }
            console.log("__",count)
            
                        if(count>=num){
                            
                            clearInterval(outerid);
                            window.alert("Counter has stopped");
                            return;
                        } 
    
                    
                    var currentTop="120vh"
                    var top=parseFloat(currentTop)
                    lower.style.height="0vh";
                    var h =0;
                    var innerid=setInterval(
                        function(){

                            lower.style.backgroundColor="hotpink";

                            console.log("INNER INTERVAL");
                             
                                height=parseFloat(lower.style.height)
                                if(height>=60 || top<=60){
                                    lower.style.top=top+"px";
                                    clearInterval(innerid);
                                    return;

                                }
                                h+=10;
                                lower.style.height=h+"px";    
                                top-=10;
                                lower.style.top=top+"px"                           
    
            
                    },100)
            
            
                
                    
                
                count++;
    
        },1100)
    
    
    
    })

