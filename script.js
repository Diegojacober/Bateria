document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLowerCase())
})




function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)


    if (audioElement) {
        audioElement.currentTime = 0
        audioElement.play()
    }
    if (keyElement) {
        audioElement.currentTime = 0
        keyElement.classList.add('active')
        setTimeout(() => {
            audioElement.currentTime = 0
            keyElement.classList.remove('active')
        }, 250)
    }
}
let vai = 300
var wait = 0
function selecionarv(vel) {
    
    document.querySelector('.vel.active').classList.remove('active')

    let velocidade = document.querySelector(`div[data-key="${vel}"]`)
    velocidade.classList.add('active')

    let ativo = document.querySelector('.vel.active')


    if(vel == 'normal')
    {
        vai = 340
    }
    else if(vel == 'fast'){
        vai =  230
    }
    else if(vel == 'vfast'){
        vai =  150
    }

}
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value

    if (song !== '') {
        let songArray = song.split('')
        playComposition(songArray,vai)
    }
})

function playComposition(array,velocidade) {


    array.forEach(item => {

        setTimeout(() => {
            playSound(`key${item}`)
        }, wait)

        wait += velocidade
        
    });
}

