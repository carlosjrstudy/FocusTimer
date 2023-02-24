// clock
let play = document.getElementById('play') 
let stop = document.getElementById('stop') 
let plus = document.getElementById('plus') 
let minus = document.getElementById('minus')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let stopTimer = false
// sounds
let tree = document.getElementById('tree')
let cloud = document.getElementById('cloud')
let store = document.getElementById('store')
let fire = document.getElementById('fire')
let treeSound = new Audio('./audio/Floresta.wav')
let cloudSound = new Audio('./audio/Chuva.wav')
let storeSound = new Audio('./audio/Cafeteria.wav')
let fireSound = new Audio('./audio/Lareira.wav')

// clock actions
function countDown() {
  setTimeout(() => {
    if (stopTimer) return

    if (minutes.textContent == 0) {
      if (hours.textContent == 0) return
      hours.textContent = (hours.textContent - 1).toString().padStart(2, '0')
      minutes.textContent = (60).toString().padStart(2, '0')
    } else {
      minutes.textContent = (minutes.textContent - 1).toString().padStart(2, '0')
    }

    countDown()
  }, 950);
}

play.onclick = () => {
  countDown()
}

stop.onclick = () => {
  stopTimer = true
  hours.textContent = 25
  minutes.textContent = (00).toString().padStart(2, '0')
}

plus.onclick = () => {
  hours.textContent = (Number(hours.textContent) + 5).toString().padStart(2, '0')
}

minus.onclick = () => {
  hours.textContent = (Number(hours.textContent) - 5).toString().padStart(2, '0')
  if (hours.textContent < 0) hours.textContent = 00.toString().padStart(2, '0')
}

// sounds actions
function pauseSounds() {
  treeSound.pause()
  cloudSound.pause()
  storeSound.pause()
  fireSound.pause()
}

tree.onclick = () => {
  pauseSounds()
  tree.classList.toggle('active') ? treeSound.play() : treeSound.pause()
  cloud.classList.remove('active')
  store.classList.remove('active')
  fire.classList.remove('active')
  treeSound.loop = true
  treeSound.volume = 1
}

cloud.onclick = () => {
  pauseSounds()
  cloud.classList.toggle('active') ? cloudSound.play() : cloudSound.pause()
  tree.classList.remove('active')
  store.classList.remove('active')
  fire.classList.remove('active')
  cloudSound.loop = true 
  cloudSound.volume = 1
}

store.onclick = () => {
  pauseSounds()
  store.classList.toggle('active') ? storeSound.play() : storeSound.pause()
  tree.classList.remove('active')
  cloud.classList.remove('active')
  fire.classList.remove('active')
  storeSound.loop = true 
  storeSound.volume = 1
}

fire.onclick = () => {
  pauseSounds()
  fire.classList.toggle('active') ? fireSound.play() : fireSound.pause()
  tree.classList.remove('active')
  store.classList.remove('active')
  cloud.classList.remove('active')
  fireSound.loop = true 
  fireSound.volume = 1
}
