let music = new Audio('audio/1.mp3');
// music.play();

const songs = [
    {
        id: '1',
        songName: `Dilbar
        <div class="subtitle">Neha Kakkar</div>`,
        plainName: "Dilbar",
        poster: "images/1.jpg"
    },
    {
        id: '2',
        songName: `Sajni <br>
        <div class="subtitle">Arijit Singh</div>`,
        plainName: "Sajni",
        poster: "images/2.jpg"
    },
    {
        id: '3',
        songName: `Mi amor <br>
        <div class="subtitle">Harsh Sandhu</div>`,
        plainName: "Mi amor",
        poster: "images/3.jpg"
    },
    {
        id: '4',
        songName: `Mangwa Laage <br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        plainName: "Mangwa Laage",
        poster: "images/4.jpg"
    },
    {
        id: '5',
        songName: `King Shit  <br>
        <div class="subtitle">Subh</div>`,
        plainName: "King Shit",
        poster: "images/5.jpg"
    },
    {
        id: '6',
        songName: `Agar Tum Sath Ho <br>
        <div class="subtitle">Arijit Singh</div>`,
        plainName: "Agar Tum Sath Ho",
        poster: "images/6.jpg"
    },
    {
        id: '7',
        songName: `On my way <br>
        <div class="subtitle">Alan Walker</div>`,
        plainName: "On my way",
        poster: "images/7.jpg"
    },
    {
        id: '8',
        songName: `Soulmate <br>
        <div class="subtitle">Arjit Singh</div>`,
        plainName: "Soulmate",
        poster: "images/8.jpg"
    },
    {
        id: '9',
        songName: `Ve Kamleya <br>
        <div class="subtitle">Arjit Singh</div>`,
        plainName: "Ve Kamleya",
        poster: "images/9.jpg"
    },
    {
        id: '10',
        songName: `Deva Deva <br>
        <div class="subtitle">Pritam,Arjit Singh</div>`,
        plainName: "Deva Deva",
        poster: "images/10.jpg"
    },
    {
        id: '11',
        songName: `Heeriye <br>
        <div class="subtitle">Arjit Singh</div>`,
        plainName: "Heeriye",
        poster: "images/11.jpg"
    },
    {
        id: '12',
        songName: `Qafirana <br>
        <div class="subtitle">Arjit Singh</div>`,
        plainName: "Qafirana",
        poster: "images/12.jpg"
    },
    {
        id: '13',
        songName: `Shayad <br>
        <div class="subtitle">Arjit Singh</div>`,
        plainName: "Shayad",
        poster: "images/13.jpg"
    },

]

Array.from(document.getElementsByClassName('songI')).forEach((e,i)=>{
    
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
Array.from(document.getElementsByClassName('popS')).forEach((e,i)=>{
    
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// search data start
let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element => {
    const {id,songName, poster} = element;
    // console.log(plainName);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `<img src="${poster}" alt="">
    <div class="content">
       ${songName}
    </div>`;
    search_result.appendChild(card);

});
let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_val = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_val = as.textContent || as.innerHTML;

        if (text_val.toUpperCase().indexOf(input_val) > -1) {
            items[index].style.display = "flex";
        }
        else{
            items[index].style.display = "none";
        }

        if(input.value == 0){
            search_result.style.display = "none"
        }
        else{
            search_result.style.display = "";
        }
        
    }
})
// search data end
let wave = document.getElementById('wave');
let masterPlay = document.getElementById('masterPlayBtn');

masterPlay.addEventListener('click', () => {
    console.log("print");
    if (music.paused || music.currentTime <= 0) {
        console.log("print");
        music.play();
        wave.classList.add('active1'); // Ensure 'active1' class exists in your CSS
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
       
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.remove('bx-pause');
        masterPlay.classList.add('bx-play');
    }
});

let index = 0;
let poster_master_play  = document.getElementById('poster_master_play');
let title  = document.getElementById('title');
let download_music = document.getElementById('download-music');

Array.from(document.getElementsByClassName ('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
       music.src =`audio/${index}.mp3`
       poster_master_play.src = `images/${index}.jpg`;
       music.play();
       masterPlay.classList.remove('bx-play');
       masterPlay.classList.add('bx-pause');
        download_music.href = `audio/${index}.mp3`;

       let songTitles = songs.filter((els)=>{
        return els.id == index;
       });
       songTitles.forEach(elss =>{
        let {songName, plainName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', plainName);
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105,0.1)';

       makeAllPlay();
       console.log("print");
       el.target.classList.remove('bx-play-circle');
       el.target.classList.add('bx-pause-circle');
    })

})


const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105,0)';
    })
}
const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.remove('bx-pause-circle');
        el.classList.add('bx-play-circle');
        wave.classList.add('active1'); 
    });
}

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let  seek =  document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate' ,()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);
     let min1 = Math.floor(music_dur/60);
     let sec1 = Math.floor(music_dur % 60);
    //   console.log(min1);
    //    console.log(sec1);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr /60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;
    
  // Update the progress bar
  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;
  bar2.style.width = `${progressBar}%`;

  dot.style.left = `${progressBar}%`
});

// Seek functionality
seek.addEventListener('input', () => {
if (!isNaN(music.duration)) {
  let seekValue = seek.value;
  let seekTime = music.duration * (seekValue / 100);
  music.currentTime = seekTime;
}
});

let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol-bar')[0];
let vol_dot = document.getElementById('vol-dot');

vol.addEventListener('change', ()=>{
    if(vol.value ==  0){
        vol_icon.classList.remove('bxs-volume-full');
        vol_icon.classList.remove('bxs-volume-low');
        vol_icon.classList.add('bxs-volume-mute');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bxs-volume-full');
        vol_icon.classList.add('bxs-volume-low');
        vol_icon.classList.remove('bxs-volume-mute');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bxs-volume-full');
        vol_icon.classList.remove('bxs-volume-low');
        vol_icon.classList.remove('bxs-volume-mute');
    }
    let vol_a = vol.value ;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{

    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songI')).length;

    }

    music.src =`audio/${index}.mp3`
    poster_master_play.src = `images/${index}.jpg`;

    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');

    let songTitles = songs.filter((els)=>{
     return els.id == index;
    });
    songTitles.forEach(elss =>{
     let {songName} = elss;
     title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105,0.1)';

    makeAllPlay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
});


next.addEventListener('click', ()=>{
    index++;
    if(index  >  Array.from(document.getElementsByClassName('songI')).length){
        index = 1;

    }
    music.src =`audio/${index}.mp3`
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');

    let songTitles = songs.filter((els)=>{
     return els.id == index;
    });
    songTitles.forEach(elss =>{
     let {songName} = elss;
     title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105,0.1)';

    makeAllPlay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
})

let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () =>{
    let a  = shuffle.innerHTML;

    switch(a){
        case "next" :
            shuffle.classList.add('bx-repeat');
            shuffle.classList.remove('bxs-music');
            shuffle.classList.remove('bx-shuffle');

            shuffle.innerHTML = 'repeat';
            break;
        case "repeat" :
            shuffle.classList.remove('bx-repeat');
            shuffle.classList.remove('bxs-music');
            shuffle.classList.add('bx-shuffle');
            shuffle.innerHTML = 'random';
            break;
        case "random" :
            shuffle.classList.remove('bx-repeat');
            shuffle.classList.add('bxs-music');
            shuffle.classList.remove('bx-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

 const next_music = () =>{
    index++;
    if(index  >  Array.from(document.getElementsByClassName('songI')).length){
        index = 1;

    }
    music.src =`audio/${index}.mp3`
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
     download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els)=>{
     return els.id == index;
    });
    songTitles.forEach(elss =>{
     let {songName, plainName} = elss;
     title.innerHTML = songName;
     download_music.setAttribute('download', plainName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105,0.1)';

    makeAllPlay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
 }

 const repeat_music = () =>{
    index = index;
    
    music.src =`audio/${index}.mp3`
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
     download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els)=>{
     return els.id == index;
    });
    songTitles.forEach(elss =>{
     let {songName, plainName} = elss;
     title.innerHTML = songName;
     download_music.setAttribute('download', plainName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105,0.1)';

    makeAllPlay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
 }

 const random_music = () =>{
    if(index == songs.length ){
        index = 1;
    }
    else{
        index = Math.floor(Math.random() * songs.length  + 1);
    }
    
    music.src =`audio/${index}.mp3`
    poster_master_play.src = `images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bx-play');
    masterPlay.classList.add('bx-pause');
     download_music.href = `audio/${index}.mp3`;

    let songTitles = songs.filter((els)=>{
     return els.id == index;
    });
    songTitles.forEach(elss =>{
     let {songName, plainName} = elss;
     title.innerHTML = songName;
     download_music.setAttribute('download', plainName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = 'rgb(105, 105, 105,0.1)';

    makeAllPlay();
    el.target.classList.remove('bx-play-circle');
    el.target.classList.add('bx-pause-circle');
 }

 music.addEventListener('ended' , () =>{
   let b = shuffle.innerHTML;
   switch (b) {
    case 'repeat':
        repeat_music();
        break;
   case 'next':
        next_music();
        break;
    case 'random':
            console.log("work");
            random_music();
            break;
   }
 })





// scroll left and right using side arrow
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop-song')[0];


pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})

let pop_artist_left = document.getElementById('pop_artist_left');
let pop_artist_right = document.getElementById('pop_artist_right');
let pop_artist = document.getElementsByClassName('items')[0];

pop_artist_right.addEventListener('click', ()=>{
    pop_artist.scrollLeft += 330;
})
pop_artist_left.addEventListener('click', ()=>{
    pop_artist.scrollLeft -= 330;
})


let menu_list_active_btn = document.getElementById('menu_list_active_btn');
let menu_side = document.getElementsByClassName('menu_side')[0];


menu_list_active_btn.addEventListener('click', ()=>{
  
    menu_side.style.transform = "unset";
   
    menu_list_active_btn.style.opacity  = 0;
});

let song_side = document.getElementsByClassName('song_side')[0];

song_side.addEventListener('click', ()=>{
    if(window.innerWidth < 980){
         menu_side.style.transform = "translateX(-100%)";
   
        menu_list_active_btn.style.opacity  = 1;
    }
    
   
})


