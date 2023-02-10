// alert("21212121212121");
//the above alert was used to ensure my file is corrrectly linked. It is!

const results = document.querySelector("#results");

async function swapiFetch() {
  const res = await fetch("https://swapi.dev/api/people/");
  const data = await res.json();
  console.log(data);
  showResults(data);
}

function showResults(data) {
  let userCanSee = "";

  data.results.forEach((item) => {
    userCanSee += `
<div class = "card p-3 m-3" style = "opacity:0.8">
<h4 class"card-title text-center">${item.name}</h4>
<div class ="card-content">
<span style = "text-decoration:underline; font-size:1.3rem">Home world: ${item.homeworld}</span> <br>
<span style = "font-size:1.2rem">Birth Year: ${item.birth_year} </span><br>
</div>
</div>
            `;
  });

  results.innerHTML = userCanSee;
}



//event listener for buttons
document.querySelector("#buttons").addEventListener("click", (e) => {
  swapiFetch(e.target.textContent.trim().toLowerCase());
});
