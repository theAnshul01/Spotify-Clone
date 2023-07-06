console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let song = [
    {songName:"Warriyo - Mortals (feat. Laura Brehm) [NCS Release]" , filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Cielo - Huma Huma" , filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Deaf-Kev - Invincible [NCS Release]-320k" , filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Different heaven & Eh!DE - my heart [NCS Release]-320k" , filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-Johning-NCS-Release " , filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Random 1" , filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Random-2" , filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Random-3" , filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Random-4" , filePath:"songs/9.mp3",coverPath:"covers/9.jpg"}
]

// handle play/pause click
// backward.addEventListener('click', ()=>{
//     if(songIndex != 0){
//         songIndex--;

//     }
// })



masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    // uodate seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);

    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration /100);
})