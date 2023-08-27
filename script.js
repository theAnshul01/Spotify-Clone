console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');

let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName("songItem"));

let isPlaying = false;

let songs = [
    {songName:"Warriyo - Mortals [NCS Release]" , filePath:"songs/1.mp3", coverPath:"images/covers/1.jpg"},
    {songName:"Cielo - Huma Huma" , filePath:"songs/2.mp3",coverPath:"images/covers/2.jpg"},
    {songName:"Deaf-Kev - Invincible [NCS Release]-320k" , filePath:"songs/3.mp3",coverPath:"images/covers/3.jpg"},
    {songName:"Different heaven & Eh!DE" , filePath:"songs/4.mp3",coverPath:"images/covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-Johning-NCS-Release " , filePath:"songs/5.mp3",coverPath:"images/covers/5.jpg"},
    {songName:"Bhula Dena" , filePath:"songs/6.mp3",coverPath:"images/covers/6.jpg"},
    {songName:"Zihaal-E-mishkil" , filePath:"songs/7.mp3",coverPath:"images/covers/7.jpg"},
    {songName:"Raabta" , filePath:"songs/8.mp3",coverPath:"images/covers/8.jpg"},
    {songName:"Tere Vaste" , filePath:"songs/9.mp3",coverPath:"images/covers/9.jpg"}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    
})

// handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        isPlaying = true;
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
        isPlaying = false;
        
        // adding pause button to each in music list
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.add('fa-circle-play');
            element.classList.remove('fa-circle-pause');
        })
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');

    // uodate seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);

    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration /100);
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

    })
})

// adding functionality of switching the audio player off from the music list
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        if(isPlaying){
            audioElement.pause();
            isPlaying = false;
            myProgressBar.value = audioElement.currentTime;
            e.target.classList.add('fa-circle-play');
            e.target.classList.remove('fa-circle-pause');
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity = 0;
        }
        else{
            audioElement.play();
            isPlaying = true;
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');

        }
        

    })
})






document.getElementById('forward').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex = 0;
    }else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('backward').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 8;
    }else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    
})

document.getElementById('gif').innerHTML = songs[index].songName;

