const nodeList = document.querySelectorAll('.xx');
const btn = document.getElementById('text-bubble');
const frame = document.getElementById('chan');
const frame1 = document.getElementById('chan1');

function pla() {
    document.getElementById('mac').play();
    document.getElementById('text-bubble').style.display = 'block';
    document.getElementById('text-bubble').style.animationName = 'fade';
}

frame.addEventListener('click', ifram)
function ifram(params) {
    document.getElementById('frame').src = 'https://discord.com/channels/962262543747923978/1000714221752950855';

}


//https://discord.com/channels/962262543747923978/1000714221752950855