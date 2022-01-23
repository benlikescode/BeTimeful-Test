const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')
const backdrop = document.querySelector('.backdrop')

const handlePopup = (showPopup) => {
  if (showPopup) {
    modal.style.display = 'block'
    backdrop.style.background = '#000'
    backdrop.style.opacity = 0.8
  } else {
    modal.style.display = 'none'
    backdrop.style.background = 'none'
    background.style.opacity = 0
  }
}

closeBtn.addEventListener('click', () => {
  handlePopup(false)
})

backdrop.addEventListener('click', () => {
  handlePopup(false)
})

window.onload = () => {
  setTimeout(() => {
    handlePopup(true)
  }, 5000)
}