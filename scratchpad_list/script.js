$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
    $("body").css("overflow","hidden"); 
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
    $("body").css("overflow","auto");
}

document.addEventListener("click", function(e) {
    if (e.target.className=="b-popup") {
        PopUpHide()
    }
  });

function buy(){
    window.location.href = 'scratchpad/index.html';
}
