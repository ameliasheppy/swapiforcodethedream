// alert("21212121212121");
//the above alert was used to ensure my file is corrrectly linked. It is!

const results = document.querySelector("#results");

async function swapiFetch(value) {
  const res = await fetch(`https://www.swapi.tech/api/${value}/`);
  const data = await res.json();
  console.log(data)
  showResults(data, value);
}

function showResults(data, value) {
  let userCanSee = "";
  console.log(data);
  if (value === "films") {
    data.results.forEach((item) => {
      userCanSee += `
<div class = "card p-3 m-3" style = "opacity:0.9">
<h4 class"card-title text-center:>${item.title}</h4>
<div class ="card-content">
<span style = "text-decoration:underline">Producer</span>:${item.producer}
</div>
</div>
            `;
    });
  }
  results.innerHTML = userCanSee;
}

//event listener for buttons
document.querySelector("#buttons").addEventListener("click", (e) => {
  swapiFetch(e.target.textContent.trim().toLowerCase());
});
