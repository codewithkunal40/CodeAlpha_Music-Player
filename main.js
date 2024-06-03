let music = document.querySelector("audio");
let title = document.getElementById("title");
let play= document.getElementById("play");
let artist = document.getElementById("artist");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let img = document.querySelector("img");


play.addEventListener('click',()=>{
            if(isplaying){
                pausemusic();
                console.log("pause");
            }
            else{
               playmusic();
            }
        });
        let isplaying;
    let playmusic=()=>{
        isplaying=true;
        music.play();
        img.classList.add("anime");
        
    };
    let pausemusic=()=>{
        isplaying=false;
        music.pause();
        img.classList.remove("anime");
    };

let songs = [
    {
        name: "music16",
        title: "Savage Love",
        artist: "BTS",
    },
    {
        name: "music2",
        title: "teri zuki nazar",
        artist: "Arman malik",
    },
    {
        name: "music3",
        title: "tu jo mila/rabta",
        artist: "Shriley setia",
    },
    {
        name: "music4",
        title: "Make it Right",
        artist: "BTS",
    },
    {
        name: "music5",
        title: "faded",
        artist: "Alan Walkar",
    },
    {
        name: "music12",
        title: "Rabba meher kari",
        artist: "Darshan Rawal",
    },
    {
        name: "music7",
        title: "Cheap thrills",
        artist: "j.fla",
    },
    {
        name: "music8",
        title: "Darkside",
        artist: "Alan walker",
    },
    {
        name: "music9",
        title: "Tera hone lga hoon",
        artist: "Atif Aslam & Alisha Chinai",
    },
    {
        name: "music10",
        title: "Rataan Lambiyan",
        artist: "tanishk B & Jubin Nautiyal",
    },
    {
        name: "music11",
        title: "Sakhiyaan",
        artist: "Maninder butter",
    },
    {
        name: "music13",
        title: "Yara Tere Warga",
        artist: "jass manak",
    },
    {
        name: "music14",
        title: "Friends",
        artist: "Marshmello & Anne",
    },
    {
        name: "music15",
        title: "At my WORST",
        artist: "Kristel Fulgar",
    }
];
let loadsong = (song) => {
    title.textContent = song.title;
    artist.textContent = song.artist;
    music.src = song.name + ".mp3";
    img.src = song.name + ".jpg";
}
let songindex = 0;

let nextsong = () => {
    
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex])
   
}
let prevsong = () => {
    
    songindex = (songindex - 1 + songs.length)%songs.length;
    loadsong(songs[songindex])
   
}

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);
