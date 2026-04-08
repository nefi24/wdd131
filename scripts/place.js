const temperature = 9;
const windSpeed = 8;

function calculateWindChill(tempC, speedKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(speedKmh, 0.16) + 0.3965 * tempC * Math.pow(speedKmh, 0.16);
}

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
  windChillElement.textContent = "N/A";
}
