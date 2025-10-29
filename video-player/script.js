const video = document.querySelector('video');
const progress = document.querySelector('progress');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const volume = document.querySelector('#volume');
const speed = document.querySelectorAll('.speed');
const back = document.querySelector('#back');
const forward = document.querySelector('#forward');

//Give a play inline function to the play button
play.addEventListener('click', function play(){
    video.play()
});

//Give a pause inline function to the pause button
pause.addEventListener('click', function pause(){
    video.pause()
});

//Pause and play the video by clicking on it
function togglePlay() {
    if(video.paused) {
        video.play();
        return;
    }
    video.pause();
}

video.addEventListener('click', togglePlay);

//Pause and play the video by push 'space' on the keyboard
document.addEventListener('keydown', function(e){
    if(e.code === 'Space') {
        togglePlay();
    }
});

//Make volume range button working
volume.addEventListener('input', function changeVolume(){
    video.volume = volume.value;
});

//Make play speed buttons working
function setSelected(e){
    video.play();
    video.playbackRate = e.target.getAttribute('data-speed')

}

speed.forEach(function(button){
    button.addEventListener('click', setSelected)
})

//Make the progress bar working under the video
function updateProgress() {
    if(video.currentTime > 0){
        progress.value = video.currentTime / video.duration
    }
}

video.addEventListener('timeupdate', updateProgress)

//Make the back and forward button working
back.addEventListener('click', function back(){
    video.currentTime -= 5;
})

forward.addEventListener('click', function forward(){
    video.currentTime += 5;
})