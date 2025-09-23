const div = document.getElementsByTagName('div');
const box = document.getElementsByClassName('box')[0];
var inner_text = document.getElementById('inner-text');
const celeb_gif = document.getElementById('celeb_gif');
const h1 = document.getElementsByTagName('h1')[0];
celeb_gif.style.display = 'none';
// const name1 = inner_text.slice((inner_text.indexOf('y')+2),(inner_text.indexOf('!')))
console.log("Veer")

div[0].addEventListener('click', (e)=>{
    // Head or lid
    div[1].style.top = '-220px';
    div[1].style.left = '220px';
    div[1].style.transform = 'rotateZ(60deg)';

    // Dissappearing Shadow
    div[4].style.backgroundColor = 'red';
    div[5].style.backgroundColor = 'yellow';

    // Heading 1
    h1.style.display = 'none';

    // Text
    div[3].style.top = '-300px';
    inner_text.style.fontSize = '2.5rem';

    // if(bday_song.)
    setTimeout(celebration, 1000);
}, {once: true})

function celebration(){
    celeb_gif.style.display = 'block';
    var bday_song = new Audio('https://s3-us-west-2.amazonaws.com/1hbcf/Veer.mp3');
    bday_song.play();
}

document.getElementsByTagName('title')[0].innerText = "Bday Only - Veer"