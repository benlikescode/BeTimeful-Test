const socialBtns = document.querySelectorAll('.social-icon')
const dayBtn = document.querySelectorAll('.day-btn')

const blockSection = document.querySelector('.block-section')
const calendarSection = document.querySelector('.calendar-section')
const feedbackSection = document.querySelector('.feedback-section')

const blockButton = document.querySelector('#block-toggle-btn')
const calendarButton = document.querySelector('#calendar-toggle-btn')
const feedbackButton = document.querySelector('#feedback-toggle-btn')

socialBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      btn.classList.remove('disabled');
    } else {
      btn.classList.add('disabled')
    }
  })
})

dayBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    } else {
      btn.classList.add('active')
    }
  })
})

blockButton.addEventListener('click', () => {
  calendarSection.style.display = 'none'
  feedbackSection.style.display = 'none'
  blockSection.style.display = 'block'
  
  calendarButton.style.backgroundColor = '#fff'
  feedbackButton.style.backgroundColor = '#fff'
  blockButton.style.backgroundColor = 'var(--lightGray)'
})

calendarButton.addEventListener('click', () => {
  blockSection.style.display = 'none'
  feedbackSection.style.display = 'none'
  calendarSection.style.display = 'block'

  blockButton.style.backgroundColor = '#fff'
  feedbackButton.style.backgroundColor = '#fff'
  calendarButton.style.backgroundColor = 'var(--lightGray)'
})

feedbackButton.addEventListener('click', () => {
  blockSection.style.display = 'none'
  calendarSection.style.display = 'none'
  feedbackSection.style.display = 'block'

  blockButton.style.backgroundColor = '#fff'
  calendarButton.style.backgroundColor = '#fff'
  feedbackButton.style.backgroundColor = 'var(--lightGray)'
})