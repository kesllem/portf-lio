document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-bar");
  
    progressBars.forEach(bar => {
      const skillLevel = bar.getAttribute("data-skill");
      setTimeout(() => {
        bar.style.width = skillLevel + "%";
      }, 500); // Delay para a animação começar
    });
  });