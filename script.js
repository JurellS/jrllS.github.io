window.addEventListener('scroll', function() {
    const image = document.querySelector('.home-img');
    let scrollPosition = window.scrollY;
    // Move slightly on scroll but stay centered overall
    image.style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.4}px))`;
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

   window.addEventListener("load", () => {
    // If the URL has a hash (like #about, #contact)
    if (window.location.hash) {
      // Remove the hash from the URL
      history.replaceState(null, null, " ");
      // Scroll to the very top
      window.scrollTo(0, 0);
    }
  });

  
