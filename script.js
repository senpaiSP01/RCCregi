function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

// Segment Scroll Buttons
function scrollLeft() {
  document.getElementById("segmentScroll").scrollLeft -= 300;
}

function scrollRight() {
  document.getElementById("segmentScroll").scrollLeft += 300;
}

<script>
  const scrollCards = document.querySelectorAll(".scroll-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.4
  });

  scrollCards.forEach(card => {
    observer.observe(card);
  });
