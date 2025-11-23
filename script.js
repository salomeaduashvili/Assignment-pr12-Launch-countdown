const day = document.getElementById("day-num");
const hour = document.getElementById("hour-num");
const min = document.getElementById("min-num");
const sec = document.getElementById("sec-num");

function launching() {
  const launchDate = new Date("2026-01-01T00:00:00").getTime();

  const now = new Date().getTime();
  const difference = launchDate - now;

  const getDay = Math.floor(difference / (24 * 60 * 60 * 1000));
  const getHour = Math.floor(
    (difference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const getMin = Math.floor((difference % (60 * 60 * 1000)) / (60 * 1000));
  const getSec = Math.floor((difference % (60 * 1000)) / 1000);

  day.textContent = getDay.toString().padStart(2, "0");
  hour.textContent = getHour.toString().padStart(2, "0");
  min.textContent = getMin.toString().padStart(2, "0");
  sec.textContent = getSec.toString().padStart(2, "0");

  if (difference <= 0) {
    clearInterval(countDown);
    day.textContent = "00";
    hour.textContent = "00";
    min.textContent = "00";
    sec.textContent = "00";
    const head = document.querySelector("h1");

    setTimeout(() => {
      head.textContent = "We just Launched!";
      head.style.color = "#fb5e84";
    }, 1000);

    return;
  }
}
const countDown = setInterval(launching, 1000);

launching();
