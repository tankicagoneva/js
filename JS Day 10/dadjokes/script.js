//https://icanhazdadjoke.com/api - documentation for dad jokes API

const jokeContainer = document.getElementById("joke");
const generateJokeButton = document.getElementById("generate-joke");

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const data = await response.json();
  return data.joke;
}

async function handleClick() {
  const joke = await fetchJoke();
  jokeContainer.textContent = joke;
}

generateJokeButton.addEventListener("click", handleClick);
