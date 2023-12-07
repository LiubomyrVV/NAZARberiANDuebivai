
const playEl = document.querySelector('.play')

const pauseIcon = `
                    <i class="bi bi-pause-circle"></i>
                  `
const playIcon =   `
                   <i class="bi bi-caret-right"></i>
                    `   
const downloadedIcon =  `
                            <i class="bi bi-check2-circle"></i>
                         `

document.querySelectorAll('.download-icon').forEach(e => e.addEventListener('click', () => {
    e.innerHTML = downloadedIcon
}))

const audios = document.querySelectorAll('#audio');

function play(audio) {
    audio.play()
}


function pause(audio) {
    audio.pause()
}


function stop() {
    for(let audio of audios){
        audio.pause()
        audio.currentTime = 0;
    }  
}


document.querySelectorAll('.play').forEach(e => e.addEventListener('click', () => {
   
    if(!e.classList.contains('pause')){
        document.querySelector('.songs-bars').classList.add('active')

        document.querySelectorAll('.play').forEach(e => {
            e.classList.remove('pause')
            e.querySelector('.play__icon').innerHTML = playIcon 
        })
    } else {
        document.querySelector('.songs-bars').classList.remove('active')
    }

    if(e.querySelector('audio').currentTime === 0){
        stop()
    } else {
        pause(e.querySelector('audio'))
    }
    
    if(e.classList.contains('play') && !e.classList.contains('pause')){
        e.classList.add('pause')
        e.querySelector('.play__icon').innerHTML = pauseIcon
        play(e.querySelector('audio'))

    } else { 
        e.classList.remove('pause')
        e.querySelector('.play__icon').innerHTML = playIcon
        pause(e.querySelector('audio'))
    }
    
}))

