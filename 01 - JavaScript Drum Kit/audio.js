let buttons = document.querySelectorAll('.audiobuttons');

buttons.forEach( button =>
{
    button.addEventListener('click', () => 
    {
        playAudioClick(button);
    } );
})

function playAudioClick(button) {
    let charCode = button.getAttribute('data-key');
    audio = document.querySelector(`audio[data-key="${charCode}"]`);
    playWithEffect(button, audio);
}

  
document.addEventListener('keypress', (e) => { playAudioKeyPress(e); });

function playAudioKeyPress(e) {
    let audio = document.querySelector(`audio[data-key="${e.key.toUpperCase().charCodeAt()}"]`);
    
    if(audio == null) 
        return undefined;

    let button = document.querySelector(`.audiobuttons[data-key="${e.key.toUpperCase().charCodeAt()}"]`);
    playWithEffect(button, audio);
}

function playWithEffect(button, audio) {
    button.classList.add('pressed');
    document.addEventListener('transitionend', () => { button.classList.remove("pressed");} );
    audio.currentTime = 0;
    audio.play();
}
