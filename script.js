function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

if(moveRandom){
moveRandom.addEventListener("mouseenter", function(e){
    moveRandomEl(e.target);
});
}
function openLetter(){
    const box = document.getElementById("letterBox");
    const msg = "Haha, silly… did you really think I’d help you?😜 “There’s no other option for you except yes.” 😄";

    const messageElement = document.getElementById("message");

    box.style.display = "block";
    messageElement.innerHTML = "";

    let i = 0;

    function typeWriter(){
        if(i < msg.length){
            messageElement.innerHTML += msg.charAt(i);
            i++;
            setTimeout(typeWriter,40);
        }
    }

    typeWriter();
}

document.getElementById("closeLetter").onclick = function(){
    document.getElementById("letterBox").style.display = "none";
}