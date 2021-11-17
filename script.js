document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
    const url = "https://pokeapi.co/api/v2/pokemon/" + value;
    let results = "";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {

      console.log(json);
      results += '<h1>' + value + "</h1>";
      results += '<img src="' + json.sprites.front_default + '" />';
      results += "<p>" + "Abilities" + "</p>"
      for(let i=0; i < 2; i++){
        results += '<p>' + json.abilities[i].ability.name + ":</p>"
        const abilityURL = json.abilities[i].ability.url
        results += fetchMoviesJSON(abilityURL);
      }

      console.log(results);
      document.getElementById("weatherResults").innerHTML = results;
    });

});

async function fetchMoviesJSON(url) {
  const response = await fetch(url);
  const movies = await response.json();
  const string = '<p>' + movies.effect_entries[1].effect + "</p>";
  return string
}
