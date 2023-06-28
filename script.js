    AOS.init({
      duration: 1000,
      delay: 500,
      easing: 'ease-in-out',
      offset: 120,  // Change this value to tweak when animation starts
    });
    


window.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  const header = document.querySelector('header');
  const contactNavLink = document.querySelector(
    'header nav a[data-section="contact"]'
  );

  const setActiveLink = (link) => {
    const prevActiveLink = document.querySelector('header nav a.active');
    if (prevActiveLink) {
      prevActiveLink.classList.remove('active');
    }
    link.classList.add('active');
  };

  const setGlowEffect = (glow) => {
    if (glow) {
      contactNavLink.classList.add('glow');
    } else {
      contactNavLink.classList.remove('glow');
    }
  };

  const scrollToSection = (target) => {
    const offset = header.offsetHeight + 16; // Adjust the offset as needed
    const targetSection = document.querySelector(target);
    if (targetSection) {
      const targetOffset = targetSection.offsetTop - offset;
      window.scroll({
        top: targetOffset,
        behavior: 'smooth',
      });
    }
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = link.getAttribute('href');
      scrollToSection(target);
      setActiveLink(link);
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    });
  });

  window.addEventListener('scroll', () => {
    const top = window.scrollY;

    sections.forEach((sec) => {
      const height = sec.offsetHeight;
      const offset = sec.offsetTop - header.offsetHeight - 150;
      const id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        const currActiveLink = document.querySelector(
          `header nav a[href="#${id}"]`
        );
        setActiveLink(currActiveLink);

        if (id === 'contact') {
          setGlowEffect(true);
        } else {
          setGlowEffect(false);
        }
      }
    });
  });

  const typed = new Typed('.multiple-text', {
    strings: [
      'Frontend Developer',
      'Software Engineer',
      'Full Stack Developer',
      'Versatile',
      'Detail-Oriented',
      'Agile Practitioner',
      'Problem-Solver',
      'Collaborative Team Member',
      'Proactive Leader',
      'Efficient Project Manager',
      'Strong Leadership Skills',
      'Excellent Communicator',
    ],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });

  const typedAbout = new Typed('.about-text', {
    strings: [
      'Passionate about Technology',
      'Innovative Thinker',
      'Collaborative Partner',
      'Results-driven Professional',
      'Dedicated and Committed',
      'Adaptable to Change',
      'Team Player',
      'Critical Thinker',
      'Reliable Colleague',
      'Fast Learner',
      'Skilled Negotiator',
      'Effective Problem Solver',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });
});
