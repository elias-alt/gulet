
document.querySelectorAll('.popup img').forEach(Img => {
   Img.onclick = () =>{
    document.querySelector('.popup_img').style.display='block';
    document.querySelector('.popup_img img').src = Img.getAttribute('src');
   }
});
document.querySelector('.popup_img span').onclick = () =>{
    document.querySelector('.popup_img').style.display='none';
}


function first(){
    document.querySelector(".div1").style.display="inline-block";
    document.querySelector(".aaa").setAttribute("style", "transform: scaleX(.9); color:#bbb;");

    document.querySelector(".bbb").style.transform="scaleX(1)";
    document.querySelector(".ccc").style.transform="scaleX(1)";
    document.querySelector(".ddd").style.transform="scaleX(1)";
    document.querySelector(".div2").style.display="none";
    document.querySelector(".div3").style.display="none";
    document.querySelector(".div4").style.display="none";
}
function second(){
    document.querySelector(".div1").style.display="none";
    document.querySelector(".div2").style.display="inline-block";
    document.querySelector(".bbb").style.transform="scaleX(.9)";
    document.querySelector(".aaa").style.transform="scaleX(1)";
    document.querySelector(".ccc").style.transform="scaleX(1)";
    document.querySelector(".ddd").style.transform="scaleX(1)";
    document.querySelector(".div3").style.display="none";
    document.querySelector(".div4").style.display="none";
}
function third(){
    document.querySelector(".div1").style.display="none";
    document.querySelector(".div2").style.display="none";
    document.querySelector(".div3").style.display="inline-block";
    document.querySelector(".ccc").style.transform="scaleX(.9)";
    document.querySelector(".aaa").style.transform="scaleX(1)";
    document.querySelector(".bbb").style.transform="scaleX(1)";
    document.querySelector(".ddd").style.transform="scaleX(1)";
    document.querySelector(".div4").style.display="none";
}
function forth(){
    document.querySelector(".div1").style.display="none";
    document.querySelector(".div2").style.display="none";
    document.querySelector(".div3").style.display="none";
    document.querySelector(".div4").style.display="inline-block";
    document.querySelector(".ddd").style.transform="scaleX(.9)";
    document.querySelector(".aaa").style.transform="scaleX(1)";
    document.querySelector(".bbb").style.transform="scaleX(1)";
    document.querySelector(".ccc").style.transform="scaleX(1)";
}




