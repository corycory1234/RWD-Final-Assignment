$(document).ready(function (){

    // 漢寶線 & 原始menu
    $(".burger-menu").click((event) =>{
        event.preventDefault();
        $("body").toggleClass("show-menu")
    })

    // 愛心填滿
    $(".fa-regular.fa-heart").click(function () {
        $(this).toggleClass("fa-solid");
        console.log(this);
    })
})
