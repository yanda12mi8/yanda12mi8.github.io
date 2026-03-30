(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme");

  if (saved === "light") {
    root.classList.add("light");
    if (toggle) toggle.textContent = "☀️";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      root.classList.toggle("light");
      const isLight = root.classList.contains("light");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      toggle.textContent = isLight ? "☀️" : "🌙";
    });
  }

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear().toString();
  }
})();
