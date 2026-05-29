/* ============================================
   COSTA CAMARÓN — Interactive Logic
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Navigation & Header ---
  const nav = document.getElementById('mainNav');
  const hamburger = document.getElementById('hamburger');
  const navLinksContainer = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav__link');

  // Sticky Nav on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const toggleMenu = () => {
    hamburger.classList.toggle('open');
    navLinksContainer.classList.toggle('open');
    navOverlay.classList.toggle('open');
    document.body.style.overflow = navLinksContainer.classList.contains('open') ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);
  navOverlay.addEventListener('click', toggleMenu);

  // Close menu on link click and navigate
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (navLinksContainer.classList.contains('open')) {
        toggleMenu();
      }

      if (targetElement) {
        e.preventDefault();
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // --- Menu Tabs Navigation ---
  const menuTabsInner = document.getElementById('menuTabsInner');
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuSections = document.querySelectorAll('.menu-category');
  const tabsWrapper = document.getElementById('menuTabs');

  // Handle Tab Click
  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        const offset = 130; // Matches scroll-margin-top
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active Tab on Scroll
  const updateActiveTab = () => {
    let current = '';
    const scrollPos = window.scrollY + 150;

    menuSections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    menuTabs.forEach(tab => {
      tab.classList.remove('active');
      if (tab.getAttribute('data-target') === current) {
        tab.classList.add('active');
        
        // Auto-scroll the tabs container to keep active tab visible
        const tabOffsetLeft = tab.offsetLeft;
        const tabWidth = tab.offsetWidth;
        const containerWidth = menuTabsInner.offsetWidth;
        const scrollAmount = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);
        
        menuTabsInner.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    });

    // Add shadow to tabs wrapper when stuck
    if (tabsWrapper.getBoundingClientRect().top <= 56) {
      tabsWrapper.classList.add('shadow');
    } else {
      tabsWrapper.classList.remove('shadow');
    }
  };

  window.addEventListener('scroll', updateActiveTab);

  // --- Reveal Animations on Scroll ---
  const revealElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .menu-item');
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.9;
    
    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check

  // --- Back to Top ---
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});
