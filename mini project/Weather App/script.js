// NOTE: API key is visible in client-side apps.
// For a production app, use a backend proxy.
const APIKEY = "ff63758fe00871cb779b2dca2e96c484";

const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");
const unitToggle = document.getElementById("unit-toggle");

const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

const cityNameEl = document.getElementById("city-name");
const tempEl = document.getElementById("temp");
const conditionEl = document.getElementById("condition");
const iconEl = document.getElementById("weather-icon");

const feelsLikeEl = document.getElementById("feels-like");
const minMaxEl = document.getElementById("min-max");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const pressureEl = document.getElementById("pressure");
const coordsEl = document.getElementById("coords");

let currentCity = "Bengaluru";
let units = localStorage.getItem("weather_units") || "metric"; // metric | imperial

function setUnitsUI() {
  // metric => °C, imperial => °F
  unitToggle.textContent = units === "metric" ? "°C" : "°F";
}

function setLoading(isLoading) {
  loadingEl.hidden = !isLoading;
  searchBtn.disabled = isLoading;
}

function showError(msg) {
  errorEl.textContent = msg;
  errorEl.hidden = false;
}

function clearError() {
  errorEl.textContent = "";
  errorEl.hidden = true;
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
}

function iconForMain(main) {
  // OpenWeather condition grouping.
  // We will use OpenWeather icon codes returned from the API when available.
  // Fallback mapping if icon code is missing.
  const map = {
    Clear: "01d",
    Clouds: "02d",
    Rain: "10d",
    Drizzle: "09d",
    Thunderstorm: "11d",
    Snow: "13d",
    Mist: "50d",
    Smoke: "50d",
    Haze: "50d",
    Fog: "50d",
  };
  return map[main] || "02d";
}

function themeForMain(main) {
  const m = (main || "").toLowerCase();
  if (["clear"].includes(m)) return "clear";
  if (["clouds"].includes(m)) return "clouds";
  if (["rain"].includes(m)) return "rain";
  if (["drizzle"].includes(m)) return "drizzle";
  if (["snow"].includes(m)) return "snow";
  if (["thunderstorm"].includes(m)) return "thunderstorm";
  if (["mist", "smoke", "haze", "fog"].includes(m)) return "mist";
  return "clouds";
}

async function checkWeather(city = currentCity) {
  const q = (city || "").trim();
  if (!q) return;

  currentCity = q;
  clearError();
  setLoading(true);

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(q)}&units=${units}&appid=${APIKEY}`
    );

    const data = await res.json();

    if (!res.ok) {
      // OpenWeather typically returns { cod, message }
      const message = data?.message || "Unable to fetch weather.";
      showError(message.charAt(0).toUpperCase() + message.slice(1));
      return;
    }

    const temp = data?.main?.temp;
    const feelsLike = data?.main?.feels_like;
    const humidity = data?.main?.humidity;
    const windSpeed = data?.wind?.speed;
    const pressure = data?.main?.pressure;
    const min = data?.main?.temp_min;
    const max = data?.main?.temp_max;

    const weather = data?.weather?.[0] || {};
    const main = weather.main || "";
    const condition = weather.description || main || "";

    // Icon via OpenWeather if possible
    const iconCode = weather.icon;
    const iconSrc = iconCode
      ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
      : `https://openweathermap.org/img/wn/${iconForMain(main)}@2x.png`;

    iconEl.src = iconSrc;
    iconEl.alt = main ? `${main} icon` : "Weather icon";

    cityNameEl.textContent = data?.name || q;
    tempEl.textContent = `${Math.round(temp)}°${units === "metric" ? "C" : "F"}`;
    conditionEl.textContent = condition ? condition.charAt(0).toUpperCase() + condition.slice(1) : "";

    feelsLikeEl.textContent = `${Math.round(feelsLike)}°${units === "metric" ? "C" : "F"}`;
    minMaxEl.textContent = `${Math.round(min)}°/${Math.round(max)}°`;
    humidityEl.textContent = `${humidity}%`;
    windEl.textContent = `${windSpeed} ${units === "metric" ? "Km/h" : "mph"}`;
    pressureEl.textContent = `${pressure} hPa`;
    if (data?.coord) {
      coordsEl.textContent = `${data.coord.lat.toFixed(2)}, ${data.coord.lon.toFixed(2)}`;
    } else {
      coordsEl.textContent = "--";
    }

    setTheme(themeForMain(main));
  } catch (err) {
    showError("Network error. Please try again.");
  } finally {
    setLoading(false);
  }
}

// Events
searchBtn.addEventListener("click", () => checkWeather(searchBox.value));
searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") checkWeather(searchBox.value);
});

unitToggle.addEventListener("click", () => {
  units = units === "metric" ? "imperial" : "metric";
  localStorage.setItem("weather_units", units);
  setUnitsUI();
  checkWeather(currentCity);
});

// Init
setUnitsUI();
loadingEl.hidden = true;
clearError();
checkWeather(currentCity);

