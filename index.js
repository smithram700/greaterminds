// var loader=document.querySelector(".pre-load");
let navbar=document.querySelector('.menu');
let list=document.querySelector(".list");
let nav=document.querySelector('.navbar');
let select=document.getElementById("select");
let footer=document.getElementById("footer");

// let fixtures=document.getElementById("fixtures");
// let standings=document.getElementById('standings');
// let all=document.getElementById("all");

// select.addEventListener("change",function(){
//     if(select.value==='standings'){
//         fixtures.style.display='none';
//         if(fixtures.style.display='none'){
//             standings.style.display='table'
//             standings.style.width='100%'
//         }
//     }
//     else if(select.value==='videos'){
//         console.log("you choose videos")
//     }
//     else if(select.value==='all'){
//        all.style.display='block'; 
//        fixtures.style.display='block';
//        standings.style.display='table';
//        console.log(all)
//     }
//     else{
//         standings.style.display='none';
//         if(standings.style.display==='none'){
//             fixtures.style.display='block'
//         }
//     }
// })
// window.addEventListener("load",finishload)

for(let i=0;i<navbar.length;i++){
  navbar[i].addEventListener('click',openmenu
  )
}
// function finishload(){
//     loader.classList.add("finish")
// }
navbar.addEventListener("click",openmenu);
function openmenu(){
    if(navbar.innerText==="menu"){
        navbar.innerText="close";
        list.classList.add('open');

    }
    else{
        navbar.innerText="menu"
        list.classList.remove("open")

    }
}


window.addEventListener("scroll",function(){
    if(scrollY>=200){
       nav.style.position='fixed';
       nav.style.top='0';
       nav.style.width='100%';
    }
    else{
        nav.style.position='static';
        nav.style.width='100%';
    }
})
console.log("how are you arizona how are you doing in the land of the dead");



