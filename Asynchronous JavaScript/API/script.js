let loc = "London";

async function fetchdata() {
  let response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=f0a8bb594db94d9484472235252006&q=${loc}&aqi=yes`
  );

  let data = await response.json(); // Convert response to JSON
  console.log(data); // Show the weather data
}

fetchdata();