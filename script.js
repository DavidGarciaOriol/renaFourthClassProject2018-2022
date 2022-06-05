let cards = ["wind_adept", "white_zephyr", "ethereal_hurricane"];
let titles = ["Wind Adept", "White Zephyr", "Ethereal Hurricane"];

$(document).ready(function(){

    $(".card").click(function(){
        cardId = $(this).attr("id");

        let pageTitle = "";
        let i = 0;
        cards.forEach(card => {
            if(card !== cardId){
                $(`#${card}`).hide();
                i++;
            } else {
                pageTitle = titles[i];
            }
            
        });

        $(this).attr("class", "blink");
        $("#rena_page_title").html(`${pageTitle.toUpperCase()}`);

        
        setTimeout(function(){
            window.location.href = `./rena/${cardId}.html`
        }, 1000);

    });

});