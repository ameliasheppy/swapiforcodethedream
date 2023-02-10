// alert("21212121212121");
//the above alert was used to ensure my file is corrrectly linked. It is!

const results = document.querySelector("#results");

async function swapiFetch() {
  const res = await fetch("https://swapi.dev/api/films/");
  const data = await res.json();
  console.log(data);
  showResults(data);
}

function showResults(data) {
  let userCanSee = "";

  data.results.forEach((item) => {
    userCanSee += `
<div class = "card p-3 m-3" style = "opacity:0.8">
<h4 class"card-title text-center">${item.title}</h4>
<div class ="card-content">
<span style = "text-decoration:underline">Producer:</span>${item.producer} <br>
<span style = "text-decoration:underline">Director:</span>${item.director} <br>
<span style = "text-decoration:underline">Release Date:</span>${item.release_date} <br>
<span>Opening Crawl:</span>${item.opening_crawl} <br>

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
