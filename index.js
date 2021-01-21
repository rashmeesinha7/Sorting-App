
let arr=[];

function generate_no(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let i,x=10,y=canvas.height,height=0,width=5;
    for(i=0;i<28;i++){

        arr[i]=Math.floor((Math.random() * 100) + 1);
        height=arr[i];
        ctx.fillStyle = "blue";
        ctx.fillRect(x,y-height, width, height);
        x=x+10;        
    }
    console.log(arr);
}

function sleep(milliseconds) {  
    return new Promise(resolve => setTimeout(resolve, milliseconds));  
 }  


 async function bubble_sort(){
    if(arr[0]==undefined){
        window.alert("Please generate graphs first!!!");
    }
    else{
    var len = arr.length,
        i, j, stop;
        var canvas = document.getElementById("myCanvas");
        var ctx1 = canvas.getContext("2d");
        
    var x2=10,y=canvas.height,height=0,width=5;
    for (i=0; i < len; i++){
        x2=10;
        for (j=0;j < len-i; j++){
            if (arr[j] > arr[j+1]){
                
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            
                
                height=arr[j];
                
                ctx1.clearRect(x2,0,width,canvas.height);
                ctx1.fillStyle="red";
                ctx1.fillRect(x2, y-height, width, height);
                x2=x2+10;
            

                height=arr[j+1];

                  
                ctx1.clearRect(x2,0,width,canvas.height);
                ctx1.fillStyle="red";
                ctx1.fillRect(x2, y-height, width, height);
                await sleep(40);
            }
            else{
                if(j==(len-i-1)){
                    ctx1.fillStyle="blue";
                }
                ctx1.fillRect(x2, y-arr[j], width, arr[j]);
                x2=x2+10;
                if(j+1==(len-i-1)){
                    ctx1.fillStyle="blue";
                }
                ctx1.fillRect(x2, y-arr[j+1], width, arr[j+1]);
                await sleep(40); 
            }

        }
    }
    console.log(arr);
}
}

// function bubble_sort(){

//     var len = arr.length,
//         i, j, stop;
//     for (i=0; i < len; i++){
//         for (j=0, stop=len-i; j < stop; j++){
//             if (arr[j] > arr[j+1]){
                
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }

//     var canvas = document.getElementById("myCanvas");
//     var ctx = canvas.getContext("2d");
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     let k,x=10,y=0,height=0,width=5;
//     for(k=0;k<55;k++){

//         height=arr[k];
        
//         ctx.fillStyle = "red";
//         ctx.fillRect(x, y, width, height);
//         x=x+5;        
//     }
//     console.log(arr);
// } 

function reset(){
    for(var i=0;i<arr.length;i++)
    arr[i]=undefined;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}