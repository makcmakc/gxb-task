
import './data/clipboard'
import themes from './data/themes'
import './scss/index.scss'






// Theme switcher
document.querySelector('#theme-switch').addEventListener('click', event => {
  event.preventDefault()
  const theme = event.target.dataset.theme
  document.body.classList.toggle('tg-night')
  event.target.textContent = theme === 'night'
    ? 'Switch to Day Mode'
    : 'Switch to Night Mode'
  event.target.setAttribute('data-theme', theme === 'night' ? 'day' : 'night')

  //charts.forEach(c => c.setTheme(themes[theme]))
})