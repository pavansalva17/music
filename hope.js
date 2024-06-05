const music = new Audio('Oh Prema.mp3');
const songs = [
    {
        id:'1',
        songName:` Ammadi<br>
        <div class="subtitle">Hi Nanna</div>`,
        poster: "img/1.jpg",
    },
    {
        id:'2',
        songName:`Cheppave Chirugaali<br>
        <div class="subtitle">Okkadu</div>`,
        poster: "img/2.jpg",
    },
    
    {
        id:"3",
        songName: `Ninnu Choose Aanamdamlo<br><div class="subtitle">GangLeader</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Ararey Manasa<br><div class="subtitle">Falaknuma Das</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Aagi Aagi<br><div class="subtitle">Ee Nagaraniki Emaindi</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Inthandam<br><div class="subtitle">Sita Ramam</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `At My Worst<br><div class="subtitle">PinkSweats</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Attention<br><div class="subtitle">Charlie Puth</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `People<br><div class="subtitle">Libianca</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Lover<br><div class="subtitle">Taylor Swift</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Dusk Till Dawn<br><div class="subtitle">Zayn Malik</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Ishq Wala Love<br><div class="subtitle">SOTY</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Willow<br><div class="subtitle">Taylor Swift</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `SNAP<br><div class="subtitle">Rosa Linn</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `One Kiss<br><div class="subtitle">Dua Lipa</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `Infinity<br><div class="subtitle">Jaymes Young</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Love U Zindagi<br><div class="subtitle">Dear Zindagi</div>`,
        poster: "img/17.jpg",
    },
    {
        id:"18",
        songName: `Bloody Mary<br><div class="subtitle">Gaga Lady Monster</div>`,
        poster: "img/18.jpg",
    },
    {
        id:"19",
        songName: `KanyaKumari<br><div class="subtitle">Damarukam</div>`,
        poster: "img/19.jpg",
    },
    {
        id:"20",
        songName: `Rasiya<br><div class="subtitle">Brahmastra</div>`,
        poster: "img/20.jpg",
    },
    {
        id:"21",
        songName: `Nesthama Nesthama<br><div class="subtitle">Damarukam</div>`,
        poster: "img/21.jpg",
    },
    {
        id:"22",
        songName: `Die For You<br><div class="subtitle">Ariana Grande</div>`,
        poster: "img/22.jpg",
    },
    {
        id:"23",
        songName: `Aww Tuzo<br><div class="subtitle">1 Nenokkadine</div>`,
        poster: "img/23.jpg",
    },
    {
        id:"24",
        songName: `I'm Good(Blue)<br><div class="subtitle">Bebe Rexha</div>`,
        poster: "img/24.jpg",
    },
    {
        id:"25",
        songName: `You Are My Love<br><div class="subtitle">1 Nenokkadine</div>`,
        poster: "img/25.jpg",
    },
    {
        id:"26",
        songName: `Bones<br><div class="subtitle">Imaginary Dragons</div>`,
        poster: "img/26.jpg",
    },
    {
        id:"27",
        songName: `Perfect<br><div class="subtitle">Ed Sheeran</div>`,
        poster: "img/27.jpg",
    },
    {
        id:"28",
        songName: `Karma Theme<br><div class="subtitle">U Turn</div>`,
        poster: "img/28.jpg",
    },
    {
        id:"29",
        songName: `Kalank(Title Track)<br><div class="subtitle">Kalank</div>`,
        poster: "img/29.jpg",
    },
    {
        id:"30",
        songName: `Blinding Lights<br><div class="subtitle">The Weeknd</div>`,
        poster: "img/30.jpg",
    },
    {
        id:"31",
        songName: `Enduko Emo<br><div class="subtitle">Rangam</div>`,
        poster: "img/31.jpg",
    },
    {
        id:"32",
        songName: `Symphony<br><div class="subtitle">Zara Larrson</div>`,
        poster: "img/32.jpg",
    },
    {
        id:"33",
        songName: `Dandelions<br><div class="subtitle">Ruth B</div>`,
        poster: "img/33.jpg",
    },
    {
        id:"34",
        songName: `Karma<br><div class="subtitle">Taylor Swift</div>`,
        poster: "img/34.jpg",
    },
    {
        id:"35",
        songName: `Venom<br><div class="subtitle">Eminem</div>`,
        poster: "img/35.jpg",
    },
    {
        id:"36",
        songName: `Cheap Thrills<br><div class="subtitle">Sia</div>`,
        poster: "img/36.jpg",
    },
    {
        id:"37",
        songName: `Cool For The Summer<br><div class="subtitle">Demi Lavaota</div>`,
        poster: "img/37.jpg",
    },
    {
        id:"38",
        songName: `Congratulations<br><div class="subtitle">Post Malone</div>`,
        poster: "img/38.jpg",
    },
    {
        id:"39",
        songName: `Death Bed<br><div class="subtitle">Powfu</div>`,
        poster: "img/39.jpg",
    },
    {
        id:"40",
        songName: `Running Up That Hill<br><div class="subtitle">Kate Bush</div>`,
        poster: "img/40.jpg",
    },
    {
        id:"41",
        songName: `Something Just Like This<br><div class="subtitle">Cold Play</div>`,
        poster: "img/41.jpg",
    },
    {
        id:"42",
        songName: `Unstoppable<br><div class="subtitle">Sia</div>`,
        poster: "img/42.jpg",
    },
    {
        id:"43",
        songName: `Watermelon Sugar<br><div class="subtitle">Harry Styles</div>`,
        poster: "img/43.jpg",
    },
    {
        id:"44",
        songName: `Heat Waves<br><div class="subtitle">Glass Animals</div>`,
        poster: "img/44.jpg",
    },
    {
        id:"45",
        songName: `Can't Hold Us<br><div class="subtitle">Macklemore & Ryan Lewis</div>`,
        poster: "img/45.jpg",
    },
    {
        id:"46",
        songName: `Sunflower<br><div class="subtitle">Post Malone & Swae Lee</div>`,
        poster: "img/46.jpg",
    },
    {
        id:"47",
        songName: `Love Me Like You Do<br><div class="subtitle">Ellie Goulding</div>`,
        poster: "img/47.jpg",
    },
    {
        id:"48",
        songName: `Intentions<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/48.jpg",
    },
    {
        id:"49",
        songName: `Take You Dancing<br><div class="subtitle">Jason Derulo</div>`,
        poster: "img/49.jpg",
    },
    {
        id:"50",
        songName: `SSE-A<br><div class="subtitle">CharanRaj MR</div>`,
        poster: "img/50.jpg",
    },
    {
        id:"51",
        songName: `Oh Sita<br><div class="subtitle">Sita Ramam</div>`,
        poster: "img/51.jpg",
    },
    {
        id:"52",
        songName: `Friends<br><div class="subtitle">MarshMello</div>`,
        poster: "img/52.jpg",
    },
    {
        id:"53",
        songName: `Someone You Loved<br><div class="subtitle">Lewis Calpaldi</div>`,
        poster: "img/53.jpg",
    },
    {
        id:"54",
        songName: `Snowman<br><div class="subtitle">Sia</div>`,
        poster: "img/54.jpg",
    },
    {
        id:"55",
        songName: `STAY<br><div class="subtitle">Justin Bieber</div>`,
        poster: "img/55.jpg",
    },
    {
        id:"56",
        songName: `Cruel Summer<br><div class="subtitle">Taylor Swift</div>`,
        poster: "img/56.jpg",
    },
    {
        id:"57",
        songName: `Into You<br><div class="subtitle">Ariana Grande</div>`,
        poster: "img/57.jpg",
    },
    {
        id:"58",
        songName: `Don't Start Now<br><div class="subtitle">Dua Lipa</div>`,
        poster: "img/58.jpg",
    },
    {
        id:"59",
        songName: `When I'm Gone<br><div class="subtitle">Katy Perry</div>`,
        poster: "img/59.jpg",
    },
    {
        id:"60",
        songName: `Man on the Moon<br><div class="subtitle">Alan Walker</div>`,
        poster: "img/60.jpg",
    },
    {
        id:"61",
        songName: `Nee Dookudu<br><div class="subtitle">Dookudu</div>`,
        poster: "img/61.jpg",
    },
    {
        id:"62",
        songName: `Poovai Poovai<br><div class="subtitle">Dookudu</div>`,
        poster: "img/62.jpg",
    },
    {
        id:"63",
        songName: `Young Yama<br><div class="subtitle">Yamadonga</div>`,
        poster: "img/63.jpg",
    },
    {
        id:"64",
        songName: `Gaali Vaaluga<br><div class="subtitle">Agnaathavaasi</div>`,
        poster: "img/64.jpg",
    },
    {
        id:"65",
        songName: `Relare Relare<br><div class="subtitle">Varudu</div>`,
        poster: "img/65.jpg",
    },
    {
        id:"66",
        songName: `Choodadhu antunna<br><div class="subtitle">Pokiri</div>`,
        poster: "img/66.jpg",
    },
    {
        id:"67",
        songName: `Chary<br><div class="subtitle">Adhurs</div>`,
        poster: "img/67.jpg",
    },
    {
        id:"68",
        songName: `Devuda<br><div class="subtitle">Pokiri</div>`,
        poster: "img/68.jpg",
    },
    {
        id:"69",
        songName: `Assalam Vaalekum<br><div class="subtitle">Adhurs</div>`,
        poster: "img/69.jpg",
    },
    {
        id:"70",
        songName: `Apple Beauty<br><div class="subtitle">Janatha Garage</div>`,
        poster: "img/70.jpg",
    },
    {
        id:"71",
        songName: `Banthipoola Janaki<br><div class="subtitle">Baadshah</div>`,
        poster: "img/71.jpg",
    },
    {
        id:"72",
        songName: `Mee intiki mundhu<br><div class="subtitle">Julayi</div>`,
        poster: "img/72.jpg",
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})



let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})
next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele)=>{
        return ele.id == index;
    })

    song_title.forEach(ele =>{
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft += 330;
})