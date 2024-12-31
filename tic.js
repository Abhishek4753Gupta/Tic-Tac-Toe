let box=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let winnercont=document.querySelector(".winnercont");
let msg=document.querySelector(".msg");
let newgame=document.querySelector(".newgame");



let turn0=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

box.forEach((val)=>{
    val.addEventListener("click",()=>{
        let boxno=val.getAttribute("id");
        console.log(boxno);
        if(turn0){
            val.innerText="0";
            turn0=false;
        }else{
            val.innerText="X";
            turn0=true;
        }
        val.disabled=true;
        checkwinner();
    })  
})
const checkwinner=()=>{
    for(pattern of winpattern){
    let pos1val=box[pattern[0]].innerText;
    let pos2val=box[pattern[1]].innerText;
    let pos3val=box[pattern[2]].innerText;

    if(pos1val!=""&&pos2val!=""&&pos3val!=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("winner");
            disablebtn();
           displaywinner(pos1val);
        }
    }
  }
}
const displaywinner=(pos1val)=>{
    msg.innerText=`Congratulations, Winner is ${pos1val}`;
    winnercont.classList.remove("winnercont");
}
newgame.addEventListener("click",()=>{
    winnercont.classList.add("winnercont");
    box.forEach((val)=>{
        val.innerText="";
        val.disabled=false;
})
})
function disablebtn(){
    box.forEach((val)=>{
        val.disabled=true;
    })
}
resetbtn.addEventListener("click",()=>{
    box.forEach((val)=>{
        val.innerText="";
        val.disabled=false;
    })
})






































// box.forEach((val)=>{
//     val.addEventListener("click",()=>{
//         let x="X";
//         if(x==="X"){
//         val.innerText=x;
//         x="0";
//         }else{
//             val.innerText=x;
//         }
//     })  
// })