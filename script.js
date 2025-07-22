document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Scroll animation reveal
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach(el => {
    observer.observe(el);
  });

  // Copy command to clipboard
  document.querySelectorAll(".command").forEach(cmd => {
    cmd.addEventListener("click", () => {
      navigator.clipboard.writeText(cmd.textContent.trim());
      cmd.textContent = "✔ Copied!";
      setTimeout(() => {
        cmd.textContent = cmd.dataset.command;
      }, 1500);
    });
  });
});