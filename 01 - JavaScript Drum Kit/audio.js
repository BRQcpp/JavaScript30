document.addEventListener('keypress', (e) => { playSound(e); });

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.key.toUpperCase().charCodeAt()}"]`);
    
    if(audio == null) 
        return undefined;

    let button = document.querySelector(`div[data-key="${e.key.toUpperCase().charCodeAt()}"]`);
    button.classList.add('pressed');
    
    document.addEventListener('transitionend', () => { button.classList.remove("pressed");} );
    
    audio.currentTime = 0;
    audio.play();
}