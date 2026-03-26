AOS.init({
  duration: 1000,
  once: true
});

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  darkModeToggle.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#00aaff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.45
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#00aaff",
      opacity: 0.25,
      width: 1
    },
    move: {
      enable: true,
      speed: 2.2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    }
  }
});