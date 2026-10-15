// ---------- КАРУСЕЛЬ ВІДГУКІВ ----------
const track = document.querySelector("[data-carousel]");

if (track) {
  document.querySelectorAll("[data-carousel-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const direction = Number(btn.dataset.carouselBtn);
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = track.firstElementChild.offsetWidth + gap;
      track.scrollBy({ left: direction * step, behavior: "smooth" });
    });
  });
}

// ---------- ПЕРЕМИКАЧ ТЕМИ (запам'ятовує вибір) ----------
const savedTheme = localStorage.getItem("theme") || "auto";
const themeInput = document.getElementById("t-" + savedTheme);
if (themeInput) themeInput.checked = true;

document.querySelectorAll('input[name="theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    localStorage.setItem("theme", input.value);
  });
});