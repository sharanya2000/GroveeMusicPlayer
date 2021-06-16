const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const  artist= document.getElementById("artist");
const title = document.getElementById("title");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let progress =document.getElementById("progress");
let total_duration = document.getElementById("duration");
let current_time = document.getElementById("current_time");
const progress_div = document.getElementById("progress_div");

const songs = [
  {
    name:"the-1",
    title: "Peaches",
    artist:"Justin Bieber",
    image:"image1",
  },
  {
    name:"the-2",
    title: "Closer",
    artist:"Chainsmokers",
    image:"image2",
  },
  {
    name:"the-3",
    title:"ek tara",
    artist:"Amitabh Bhattacharya",
    image:"image3",
  },
  {
    name:"the-4",
    title:"Yeh Dooriyan",
    artist:"Mohit Chauhan",
    image:"image4",
  },
  {
    name:"the-5",
    title:"Baarishein",
    artist:"Anuv Jain",
    image:"image5",
  },

  {
    name:"the-6",
    title: "Shayad",
    artist:"Arijit Singh",
    image:"image11",
  },
  {
    name:"the-7",
    title: "Kabira",
    artist:"Tochi Raina, Rekha Bhardwaj ",
    image:"image12",
  },
  {
    name:"the-8",
    title: "Teri Ahatein",
    artist:"Amit Trivedi",
    image:"image13",
  },
  {
    name:"the-9",
    title: "Kahin Toh Hogi Woh",
    artist:"Rashid Ali",
    image:"image14",
  },
  {
    name:"the-10",
    title: "Perfect",
    artist:"Ed Sheeran",
    image:"image15",
  },

  {
    name:"the-11",
    title: "Sham",
    artist:"Amit Trivedi",
    image:"image16",
  },
  {
    name:"the-12",
    title: "Sach Keh Raha Hai",
    artist:"K.K.",
    image:"image17",
  },
  {
    name:"the-13",
    title: "Chaandaniya",
    artist:"Shankar-Ehsaan-Loy",
    image:"image18",
  },

  {
    name:"the-15",
    title: "In Dino ",
    artist:"Soham Chakraborty",
    image:"image20",
  },
  
  {
    name:"song1",
    title: "Peaches",
    artist:"Justin Bieber",
    image:"image1",
  },
  {
    name:"song2",
    title: "Mehrama",
    artist:"Pritam Chakraborty",
    image:"image6",
  },
  {
    name:"song3",
    title: "Rahogi Meri",
    artist:"Pritam,Darshan Raval",
    image:"image7",
  },
  {
    name:"song4",
    title:"thank u,next",
    artist:"Ariana Grande",
    image:"image8",
  },
  {
    name:"song5",
    title:"Jaan Nisaar",
    artist:"Arijit Singh",
    image:"image9",
  },

  {
    name:"song6",
    title:"Tujhe Kitna Chahne ",
    artist:"Jubin Nautiyal",
    image:"image10",

  }


];


let isPlaying = false;

//play
 const playMusic= () =>{
    isPlaying = true;
  music.play();

  play.classList.replace("fa-play","fa-pause");
  img.classList.add("anime");
};


//pause
const pauseMusic = () =>{
    isPlaying =false;
  music.pause();
  play.classList.replace("fa-pause","fa-play");
  img.classList.remove("anime");
};

play.addEventListener('click',() =>{
  if(isPlaying){
    pauseMusic();
  }
  else{
    playMusic();
  }
  });

  //changing  the music data
  const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
  //  music.src = "music/" +songs.name+".mp3";
    music.src = `music/${songs.name}.mp3`;
    img.src = "images/" +songs.image+".jpg";
  };
  songIndex = 0;
  //loadSong(songs[2]);

  // change songs using next and prev buttons

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length; //this is like creating loop
  loadSong(songs[songIndex]);
  playMusic();
}

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length; //this is like creating loop
  loadSong(songs[songIndex]);
  playMusic();
}

// progress js work
music.addEventListener('timeupdate',(event) =>{
  const{currentTime , duration} = event.srcElement;

  let progress_time = (currentTime/duration) * 100;
  progress.style.width = `${progress_time}%`;

  //total duration
  let min_duration = Math.floor(duration/60);
  let sec_duration = Math.floor(duration % 60);

let tot_duration = `${min_duration}:${sec_duration}`;
  if(duration){
    total_duration.textContent = `${tot_duration}`;
  }
  //current duration
  let min_currentTime = Math.floor(currentTime/60);
  let sec_currentTime = Math.floor(currentTime % 60);


    if(sec_currentTime<10){
      sec_currentTime = `0${sec_currentTime}`;
    }
    let tot_currentTime = `${min_currentTime}:${sec_currentTime}`;
    current_time.textContent = `${tot_currentTime}`;


});
//progress onclick functionality
progress_div.addEventListener('click',(event) =>{
  const{duration} = music;

  let move_progress = (event.offsetX / event.srcElement.clientWidth)*duration;
  console.log(move_progress);

  music.currentTime = move_progress;
})

// if music end ,call next song func
music.addEventListener("ended",nextSong);


  next.addEventListener('click',nextSong);
  prev.addEventListener('click',prevSong);
