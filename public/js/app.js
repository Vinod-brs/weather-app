// SEarch form for the location
const search = document.querySelector('input')
const weatherForm = document.querySelector('form')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const Loading = document.querySelector('#Load')

weatherForm.addEventListener('submit', (e) => {
  Loading.classList.remove('d-none')
  e.preventDefault()
  const location = search.value
  messageOne.textContent = ''
  messageTwo.textContent = ''
  //fetching the data from the  url/api
  fetch('/weather?address=' + location).then((response) => {
    response.json().then((data, error) => {
      if(data.error) {
        messageOne.textContent = data.error
        Loading.classList.add('d-none')

      } else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
        Loading.classList.add('d-none')


      }
    })
  })
})

// Change Theme
function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("movie-theme", theme);
}
setTheme(localStorage.getItem("movie-theme") || '#1A4B84');