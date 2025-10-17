  // Always start at the top when the page finishes loading
  window.addEventListener("load", function() {
    // Remove any hash (#about, #contact, etc.)
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    // Scroll to the top
    window.scrollTo(0, 0);
  });

  // Also ensure scroll resets on refresh/navigation
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

window.addEventListener('scroll', function() {
    const image = document.querySelector('.home-img');
    let scrollPosition = window.scrollY;
    // Move slightly on scroll but stay centered overall
    image.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.4}px))`;
    requestAnimationFrame(smoothScroll);
  });

  
      const bg1 = document.querySelector('.elements');

  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / -40;
    const y = (window.innerHeight / 2 - e.clientY) / -40;
    bg1.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
       const bg3 = document.querySelector('.element2');

  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    bg3.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });

      const bg = document.querySelector('.right-container');

  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;
    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });
   const bg2 = document.querySelector('.left-container');

  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / -40;
    const y = (window.innerHeight / 2 - e.clientY) / -40;
    bg2.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  });

  // Carousel functionality //
