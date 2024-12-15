const drums = document.querySelectorAll('.drum');

const sounds = {
    boom: 'sound/boom.wav',
    clap: 'sound/clap.wav',
    hihat: 'sound/hihat.wav',
    kick: 'sound/kick.wav',
    openhat: 'sound/openhat.wav',
    ride: 'sound/ride.wav',
    snare: 'sound/snare.wav',
    tink: 'sound/tink.wav',
    tom: 'sound/tom.wav',
};
drums.forEach(drum => {
    drum.addEventListener('click', () => {
        playSound(drum.dataset.sound);
    });
});

document.addEventListener('keydown', event => {
    const keyMap = {
        KeyA: 'boom',
        KeyS: 'clap',
        KeyD: 'hihat',
        KeyF: 'kick',
        KeyG: 'openhat',
        KeyH: 'ride',
        KeyJ: 'snare',
        KeyK: 'tink',
        KeyL: 'tom',
    };

    const sound = keyMap[event.code];
    if (sound) {
        playSound(sound);
        animateButton(sound);
    }
});

function playSound(sound) {
    const audio = new Audio(sounds[sound]);
    audio.play();
}

