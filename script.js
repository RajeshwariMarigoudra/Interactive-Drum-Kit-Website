// Get all drum pad buttons
const drumPads = document.querySelectorAll('.drum-pad');

// Select individual drum pad buttons
const kickDrumPad = document.querySelector('#kick');
const snareDrumPad = document.querySelector('#snare');
const hihatDrumPad = document.querySelector('#hihat');

// Select audio elements
const kickDrumSound = document.querySelector('#sound-kick');
const snareDrumSound = document.querySelector('#sound-snare');
const hihatDrumSound = document.querySelector('#sound-hihat');

// Add event listeners to drum pad buttons
drumPads.forEach(drumPad => {
    drumPad.addEventListener('click', () => {
        // Change background color of drum pad button
        drumPad.style.backgroundColor = 'red';

        // Play corresponding drum sound
        switch (drumPad.id) {
            case 'kick':
                kickDrumSound.play();
                break;
            case 'snare':
                snareDrumSound.play();
                break;
            case 'hihat':
                hihatDrumSound.play();
                break;
        }
    });
});

// Change text content of drum pad buttons
kickDrumPad.textContent = 'New Kick Drum';
snareDrumPad.textContent = 'New Snare Drum';
hihatDrumPad.textContent = 'New Hi-Hat';

// Change src attribute of audio elements
kickDrumSound.src = 'sounds/new-kick-sound.wav';
snareDrumSound.src = 'sounds/new-snare-sound.wav';
hihatDrumSound.src = 'sounds/new-hihat-sound.wav';