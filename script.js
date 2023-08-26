
// Access the joke text with the jokeContainer.
const jokeContainer = document.getElementById('joke');

// Access the joke button with btn .
const btn = document.getElementById('btn');

// Put the joke Api in a url variable.
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'


// Put my promies on a function expression so I can use the addEventLisnter.
const getJoke = () => {
      fetch(url)
      .then(request => request.json()) // it will return a promise.
      .then(data => {  
        jokeContainer.textContent = `${data.joke}`
      })
}

// Add a event Lisnter, so when I click on the button, it will call getJoke function immediately.
btn.addEventListener('click',getJoke);