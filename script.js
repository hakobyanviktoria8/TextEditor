//նոր տողից նոր սթայլեր տա
textInput.addEventListener("keyup",function(event) {
    if (event.keyCode === 13) {
        console.log("arach")
    }
});
textInput.oninput = function () {
    textOutput.innerText = textInput.value;
};
bold.onclick=function () {
    textOutput.classList.toggle("bold");
    bold.classList.toggle("active");
};
italic.onclick=function () {
    textOutput.classList.toggle("italic");
    italic.classList.toggle("active");
};
underline.onclick=function () {
    textOutput.classList.toggle("underline");
    underline.classList.toggle("active");
};
color.onclick = function () {
    textOutput.style.color= myColor.value;
    color.classList.toggle("active");
};
function textAlignFun(elem,align){
    let textAlignBtns = document.getElementsByClassName("textAlign");
    for (let i=0; i< textAlignBtns.length;i++){
        textAlignBtns[i].classList.remove("active");
    }
    elem.classList.add("active");
    textOutput.style.textAlign = align;
}
