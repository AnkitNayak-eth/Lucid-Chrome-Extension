const MusicPlayer = (music, play, anim) => {
    let playing = false;

    play.addEventListener('click', () => {
        if (playing) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    const pauseMusic = () => {
        playing = false;
        music.pause();
        play.classList.replace('fa-pause', 'fa-play');
        anim.classList.remove("anim");
    };

    const playMusic = () => {
        playing = true;
        music.play();
        play.classList.replace('fa-play', 'fa-pause');
        anim.classList.add("anim");
    };
};

MusicPlayer(document.getElementById('music'), document.getElementById('play'),document.querySelector(".imgBox"));
MusicPlayer(document.getElementById('music1'), document.getElementById('play1'),document.querySelector(".imgBox1"));
MusicPlayer(document.getElementById('music2'), document.getElementById('play2'),document.querySelector(".imgBox2"));
MusicPlayer(document.getElementById('music3'), document.getElementById('play3'),document.querySelector(".imgBox3"));
MusicPlayer(document.getElementById('music4'), document.getElementById('play4'),document.querySelector(".imgBox4"));

