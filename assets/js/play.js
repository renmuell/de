(function(){

    if (window.location.hash.indexOf('Spielen') != -1) {
        document.body.classList.add("playing");
        window.rM_AtMo_Instance.showCosmosControl();
        document.getElementById("play_buton").innerText = 'Ende';
        document.getElementById("play_buton").setAttribute('href', "#Spielen");
    }

    // play
    window.onhashchange = function () {
        if (window.location.hash.indexOf('Spielen') != -1) {
            document.body.classList.add("playing");
            window.rM_AtMo_Instance.showCosmosControl();
        } else {
            document.body.classList.remove("playing");
            window.rM_AtMo_Instance.hideCosmosControl();
        }
    }

    document.getElementById("play_buton").addEventListener("click", function(event){

        if (document.getElementById("play_buton").innerText == 'Spielen') {
            document.getElementById("play_buton").innerText = 'Ende';
            document.getElementById("play_buton").setAttribute('href', "#Spielen");
            
        } else {
            document.getElementById("play_buton").innerText = 'Spielen';
            document.getElementById("play_buton").setAttribute('href', "#");
        }
    })

}())