import { songs } from '../data/songs-data'
for(let song of songs){

document.querySelector('.songs-list').innerHTML += 
`
<div class="music-card__wrapper">
    <figure class="music-card">
        <img class="music-card__image" src="${song.image}" alt="new-release">
        <figcaption> 
            <h3 class="song-name">${song.name}</h3>
            <h4 class="singer-name">${song.singers}</h4>
            
        </figcaption>
        <div class="controls">
                <div class="play">
                    <div class="play__icon">
                        <i class="bi bi-caret-right"></i>
                    </div>
                    
                    <audio id="audio">
                        <source src="${song.song}" type="audio/mpeg">
                    </audio>
                </div>
                <div class="download-icon">
                    <i class="bi bi-download"></i>
                </div>
            </div>
    </figure>
</div>
`
}

