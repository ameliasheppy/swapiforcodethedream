// alert("21212121212121");
//the above alert was used to ensure my file is corrrectly linked. It is!

const results = document.querySelector("#results");

function swapiFetch() {
  fetch("https://www.swapi.tech/api/films/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //the below line of code needs fixed so that I can display more than one movie title at a time for the user.
      document.querySelector("h4").innerText = data.result[0].properties.title;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

//event listener for buttons
document.querySelector("#filmButton").addEventListener("click", (e) => {
  swapiFetch(e.target.textContent.trim().toLowerCase());
});
document.querySelector("#peopleButton").addEventListener("click", (e) => {
  swapiFetch(e.target.textContent.trim().toLowerCase());
});
document.querySelector("#planetsButton").addEventListener("click", (e) => {
  swapiFetch(e.target.textContent.trim().toLowerCase());
});
document.querySelector("#vehicleButton").addEventListener("click", (e) => {
  swapiFetch(e.target.textContent.trim().toLowerCase());
});
// fetch("https://www.swapi.tech/api/planets/1/")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .then(() => console.log())
//   .catch((err) => console.error(err));
