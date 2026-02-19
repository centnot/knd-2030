// ЕЦПОТ - Интерактивный сайт
// Данные для динамического отображения

const DATA = {
  title: "Цифровая трансформация КНД Роструда",
  platform: "ЕЦПОТ",
  year: 2026,

  // Hero — честные KPI
  kpis: {
    ask: "526 млн ₽",
    budgetReturn: "+2,5 млрд ₽/год",
    legalized: "716 тыс.",
    rating: "2 место"
  },

  results2025: {
    violations: ">213 тыс.",
    salaryPaid: ">17 млрд ₽",
    rightsRestored: ">43 тыс.",
    finesCollected: ">1 млрд ₽",
    identified: "750,9 тыс.",
    legalized: "716 тыс.",
    legalizationRate: "95%",
    traumatismReduction: "-10%"
  },

  completedProjects: [
    {
      id: "sout",
      title: "Декларации СОУТ",
      contract: "ГК 33-ЮР от 14.07.2025",
      status: "completed",
      launchDate: "декабрь 2025",
      declarations: "150 000+",
      gits: 65,
      automation: "100%",
      integration: "СМЭВ 3.0",
      savingsHours: "59 200 чел.-часов/год",
      loadReduction: "в 3 раза"
    },
    {
      id: "ai-prototypes",
      title: "ИИ: 2 прототипа",
      contract: "ГК 18-ЮР от 30.05.2025",
      status: "completed",
      prototypes: {
        riskProfile: { rocAuc: 0.76, improvement: "+52%", records: "43 млн+", features: 166, sources: 8 },
        assistant: { accuracy: "94.2%", responseTime: "≤60 сек", users: "100+", dataSources: 208 }
      }
    }
  ],

  projects: [
    {
      id: "15332",
      title: "Автоматизация ст. 15.33.2 КоАП",
      budgetEffect: "+2,5 млрд ₽/год",
      budget: "210 млн ₽",
      years: "2027-2029",
      roi: "~12x за 1 год",
      systems: ["АСУ КНД", "АИС УБР", "СФР"]
    },
    {
      id: "kts",
      title: "Цифровизация удостоверений КТС",
      effect: "Предотвращение >2 млрд ₽",
      years: "2026-2028",
      systems: ["ЕЦП РвР", "АСУ КНД"]
    },
    {
      id: "ai",
      title: "ИИ в АСУ КНД",
      budget: "226 млн ₽ (59 + 167)",
      years: "2027-2028",
      systems: ["АСУ КНД"],
      measurableEffect: "Задача пилота 2026"
    },
    {
      id: "ekdo",
      title: "Интеграция ЭКДО с АСУ КНД",
      budget: "Требует оценки (частично в 90 млн АСУ КНД)",
      years: "2026-2027",
      systems: ["ЭКДО (РвР · Минтруд)", "АСУ КНД (Роструд)"]
    },
    {
      id: "illegal",
      title: "Борьба с нелегальной занятостью",
      years: "2026-2027",
      systems: ["АСУ КНД", "ФНС"],
      legislation: ["КоАП РФ", "ТК РФ", "ФЗ-248"]
    },
    {
      id: "risk",
      title: "Развитие риск-ориентированного подхода",
      years: "2026-2027",
      systems: ["АСУ КНД", "ЭКДО (РвР)"]
    }
  ],

  financing: {
    projectsTotal: "526 млн ₽",
    items: [
      { name: "Развитие АСУ КНД", amount: "90 млн ₽", year: "2026", status: "Заложен" },
      { name: "ИИ: риск-профиль", amount: "59 млн ₽", year: "2027", status: "Заложен" },
      { name: "ИИ: помощник инспектора", amount: "167 млн ₽", year: "2028", status: "Заложен" },
      { name: "Автоматизация ст. 15.33.2", amount: "210 млн ₽", year: "2027-2029", status: "Заложен" },
      { name: "КСОИБ", amount: "150 млн ₽", year: "Ежегодно", status: "Текущий" },
      { name: "Рефакторинг ЕЦП (2-я очередь)", amount: "711 млн ₽", year: "2026", status: "НЕ заложен", warning: true }
    ]
  },

  // Эффекты по категориям — не смешиваются
  effects: {
    budget: [
      { value: "+2,5 млрд ₽/год", label: "Автоматизация ст. 15.33.2" },
      { value: ">1 млрд ₽/год", label: "Штрафы (текущий)" }
    ],
    employers: [
      { value: ">26 млрд ₽", label: "Экономия штрафов (Электронный инспектор, накопленный)" },
      { value: "59 200 ч-ч/год", label: "Экономия на СОУТ (электронные декларации)" }
    ],
    social: [
      { value: "716 тыс.", label: "граждан легализовано (2025)" },
      { value: ">17 млрд ₽", label: "задержанной зарплаты выплачено" },
      { value: ">43 тыс.", label: "прав работников восстановлено" },
      { value: ">2 млрд ₽", label: "предотвращение мошенничества КТС" }
    ]
  },

  risks: [
    { title: "711 млн не заложены", impact: "Деградация платформы с 29 млн пользователей" },
    { title: "Задержка законодательства", impact: "Потеря +2,5 млрд/год (ст. 15.33.2)" },
    { title: "Отказ от ИИ", impact: "Невозможность масштабирования контроля" }
  ],

  asks: [
    "Согласовать бюджет 526 млн ₽ (2026-2029)",
    "Поддержать законодательные инициативы (КоАП, ТК, ФЗ-248, КТС, инструктажи)",
    "Рассмотреть выделение 711 млн ₽ на рефакторинг ЕЦП",
    "Обеспечить GPU-мощности через ГосТех",
    "Провести оценку налогового эффекта легализации с ФНС"
  ]
};

// Плавное появление элементов при скролле
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.card, .stat, .kpi, .big-metric, .summary-box, .completed, .data-table, .ask-card, .risk-card').forEach(el => {
    el.classList.add('animate-in');
    observer.observe(el);
  });
}

// Плавный скролл для навигации (с учётом sticky nav offset)
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const stickyNav = document.getElementById('stickyNav');
        const offset = stickyNav && stickyNav.classList.contains('visible') ? 60 : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// Активная навигация при скролле + sticky nav
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');
  const stickyNav = document.getElementById('stickyNav');
  const stickyLinks = stickyNav ? stickyNav.querySelectorAll('.sticky-nav__links a') : [];
  const hero = document.querySelector('.hero');

  window.addEventListener('scroll', () => {
    // Show/hide sticky nav
    if (stickyNav && hero) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      if (window.scrollY > heroBottom - 60) {
        stickyNav.classList.add('visible');
      } else {
        stickyNav.classList.remove('visible');
      }
    }

    // Active section detection
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    // Highlight hero nav
    navLinks.forEach(link => {
      link.style.borderColor = '';
      link.style.color = '';
      link.style.background = '';
      if (link.getAttribute('href') === '#' + current) {
        link.style.borderColor = '#2563EB';
        link.style.color = '#2563EB';
        link.style.background = '#EFF6FF';
      }
    });

    // Highlight sticky nav
    stickyLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

// Показать/скрыть кнопку "наверх"
function initBackToTop() {
  const footer = document.querySelector('.footer a[href="#top"]');
  if (footer) {
    window.addEventListener('scroll', () => {
      footer.style.opacity = window.scrollY > 500 ? '1' : '0.5';
    });
  }
}

const SLIDE_SELECTOR = 'header.hero, main .section, main .print-break';

function getVisibleSlideBlocks() {
  return Array.from(document.querySelectorAll(SLIDE_SELECTOR)).filter(el => {
    if (!(el instanceof HTMLElement)) return false;
    return el.getClientRects().length > 0;
  });
}

function findSlideHeading(block) {
  if (!(block instanceof HTMLElement)) return null;
  if (block.matches('h1, h2, h3, h4, h5, h6')) return block;
  if (block.matches('header.hero')) return block.querySelector('h1');
  if (block.matches('section.section')) {
    return block.querySelector(':scope > h2') ||
      block.querySelector(':scope > .section__header h2') ||
      block.querySelector('h2');
  }
  return block.querySelector(':scope > .card__head > h2, :scope > .card__head > h3, :scope > .card__head > h4, :scope > h2, :scope > h3, :scope > h4, h2, h3, h4');
}

function applySlideTitleNumbers(slides) {
  document.querySelectorAll('.section-title-number').forEach(el => el.remove());
  document.querySelectorAll('.slide-number-title-fallback').forEach(el => el.remove());

  let sectionNum = 0;
  let subNum = 0;
  let subSubNum = 0;
  let lastGroupId = null;

  slides.forEach((block) => {
    let heading = findSlideHeading(block);
    if (!heading && block instanceof HTMLElement && !block.matches('h1, h2, h3, h4, h5, h6')) {
      const fallback = document.createElement('h4');
      fallback.className = 'slide-number-title-fallback';
      fallback.textContent = 'Слайд';
      block.prepend(fallback);
      heading = fallback;
    }
    if (!heading) return;

    // Hero — без номера
    if (block.matches('header.hero')) return;

    let num;
    if (block.matches('section.section')) {
      sectionNum++;
      subNum = 0;
      subSubNum = 0;
      lastGroupId = null;
      num = `${sectionNum}.`;
    } else {
      const groupId = block instanceof HTMLElement ? block.dataset.slideGroup : null;
      if (groupId) {
        if (groupId !== lastGroupId) {
          subNum++;
          subSubNum = 1;
          lastGroupId = groupId;
        } else {
          subSubNum++;
        }
        num = `${sectionNum}.${subNum}.${subSubNum}`;
      } else {
        subNum++;
        subSubNum = 0;
        lastGroupId = null;
        num = `${sectionNum}.${subNum}.`;
      }
    }

    const badge = document.createElement('span');
    badge.className = 'section-title-number';
    badge.textContent = num;
    heading.insertBefore(badge, heading.firstChild);
    heading.insertBefore(document.createTextNode(' '), badge.nextSibling);
  });
}

// Номера в заголовках каждого слайда/страницы
function initSectionTitleNumbers() {
  applySlideTitleNumbers(getVisibleSlideBlocks());
}

// Обновление нумерации слайдов при toggle/resize
// Сквозные номера — JS DOM-элемент .slide-seq-num в конце каждого слайда
// Иерархические номера — через JS (section-title-number)
function initSlideCounter() {
  function refreshSlides() {
    const slides = getVisibleSlideBlocks();
    // Удалить старые номера
    document.querySelectorAll('.slide-seq-num').forEach(el => el.remove());
    slides.forEach((el, idx) => {
      el.setAttribute('data-slide-number', String(idx + 1));
      el.style.scrollMarginTop = '72px';
      // Вставить сквозной номер внизу справа
      const num = document.createElement('div');
      num.className = 'slide-seq-num';
      num.textContent = String(idx + 1);
      if (el.matches('header.hero')) {
        const container = el.querySelector('.container');
        if (container) container.appendChild(num);
        else el.appendChild(num);
      } else if (el.matches('section.section')) {
        // Секция: номер перед первым print-break внутри (если есть)
        const firstBreak = el.querySelector(':scope > .print-break');
        if (firstBreak) {
          firstBreak.insertAdjacentElement('beforebegin', num);
        } else {
          el.appendChild(num);
        }
      } else {
        // print-break: номер в конце содержимого слайда = перед СЛЕДУЮЩИМ слайдом
        const nextSlide = slides[idx + 1];
        if (nextSlide) {
          nextSlide.insertAdjacentElement('beforebegin', num);
        } else {
          // Последний слайд: в конец родителя
          if (el.parentElement) el.parentElement.appendChild(num);
          else el.appendChild(num);
        }
      }
    });
  }

  refreshSlides();

  window.addEventListener('resize', refreshSlides);

  document.addEventListener('click', (e) => {
    if (e.target.closest('.collapse-toggle') || e.target.closest('summary')) {
      setTimeout(refreshSlides, 220);
    }
  });
}

// CSS для анимаций
const animStyles = document.createElement('style');
animStyles.textContent = `
  .animate-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .animate-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(animStyles);

// Tab switching for schema diagrams
function initSchemaTabs() {
  document.querySelectorAll('.schema-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      const container = tab.closest('.schema-container');
      container.querySelectorAll('.schema-tab').forEach(t => t.classList.remove('active'));
      container.querySelectorAll('.schema-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      container.querySelector(`[data-panel="${target}"]`).classList.add('active');
    });
  });
}

// Lightbox для увеличения изображений с зумом и перетаскиванием
function initLightbox() {
  const overlay = document.getElementById('lightbox');
  if (!overlay) return;
  const lbImg = overlay.querySelector('img');
  const lbCaption = overlay.querySelector('.lightbox__caption');

  // Состояние зума и перетаскивания
  let scale = 1;
  let panX = 0, panY = 0;
  let isDragging = false;
  let dragStartX, dragStartY, dragStartPanX, dragStartPanY;
  let dragMoved = false; // отличаем клик от перетаскивания

  function applyTransform() {
    lbImg.style.transform = `translate(${panX}px, ${panY}px) scale(${scale})`;
  }

  function resetView() {
    scale = 1;
    panX = 0;
    panY = 0;
    lbImg.style.transform = '';
    overlay.classList.remove('zoomed', 'dragging');
  }

  // Открытие lightbox
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      lbCaption.textContent = img.dataset.caption || img.alt;
      resetView();
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Клик по картинке — зум in/out (только если не было перетаскивания)
  lbImg.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dragMoved) return; // это был drag, не click

    if (scale > 1) {
      // Zoom out
      resetView();
    } else {
      // Zoom in 3x к точке клика
      scale = 3;
      const rect = lbImg.getBoundingClientRect();
      const imgCenterX = rect.left + rect.width / 2;
      const imgCenterY = rect.top + rect.height / 2;
      panX = (imgCenterX - e.clientX) * (scale - 1);
      panY = (imgCenterY - e.clientY) * (scale - 1);
      overlay.classList.add('zoomed');
      applyTransform();
    }
  });

  // Drag-to-pan (mousedown/mousemove/mouseup)
  lbImg.addEventListener('mousedown', (e) => {
    if (scale <= 1) return;
    e.preventDefault();
    isDragging = true;
    dragMoved = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragStartPanX = panX;
    dragStartPanY = panY;
    overlay.classList.add('dragging');
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragMoved = true;
    panX = dragStartPanX + dx;
    panY = dragStartPanY + dy;
    applyTransform();
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      overlay.classList.remove('dragging');
    }
  });

  // Touch support (мобильные)
  lbImg.addEventListener('touchstart', (e) => {
    if (scale <= 1 || e.touches.length !== 1) return;
    isDragging = true;
    dragMoved = false;
    dragStartX = e.touches[0].clientX;
    dragStartY = e.touches[0].clientY;
    dragStartPanX = panX;
    dragStartPanY = panY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - dragStartX;
    const dy = e.touches[0].clientY - dragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragMoved = true;
    panX = dragStartPanX + dx;
    panY = dragStartPanY + dy;
    applyTransform();
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Колесо мыши — плавный зум к курсору
  overlay.addEventListener('wheel', (e) => {
    if (!overlay.classList.contains('active')) return;
    e.preventDefault();

    const rect = lbImg.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const prevScale = scale;
    const delta = e.deltaY > 0 ? 0.8 : 1.25; // scroll down = zoom out, up = zoom in
    scale = Math.min(Math.max(scale * delta, 1), 8);

    if (scale <= 1) {
      resetView();
      return;
    }

    // Зумим к точке курсора
    panX = panX - mouseX * (scale - prevScale);
    panY = panY - mouseY * (scale - prevScale);

    overlay.classList.add('zoomed');
    applyTransform();
  }, { passive: false });

  // Закрытие — клик по фону
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay || e.target.classList.contains('lightbox__caption') || e.target.classList.contains('lightbox__hint')) {
      closeLightbox();
    }
  });

  overlay.querySelector('.lightbox__close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });

  function closeLightbox() {
    resetView();
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Sticky nav sub-row on hover
function initStickySubnav() {
  const triggers = document.querySelectorAll('.sticky-nav__links [data-sub]');
  const subrows = document.querySelectorAll('.sticky-nav__subrow');
  let hideTimeout = null;

  function closeAll() {
    subrows.forEach(sr => sr.classList.remove('open'));
    triggers.forEach(t => t.classList.remove('sub-open'));
  }

  triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', () => {
      clearTimeout(hideTimeout);
      closeAll();
      const target = document.getElementById(trigger.dataset.sub);
      if (target) {
        target.classList.add('open');
        trigger.classList.add('sub-open');
      }
    });
    trigger.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(closeAll, 250);
    });
  });

  subrows.forEach(sr => {
    sr.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
    sr.addEventListener('mouseleave', () => {
      hideTimeout = setTimeout(closeAll, 150);
    });
  });
}

// Interactive subsystem diagram (hub-and-spoke)
function initSubsystemDiagram() {
  const svg = document.getElementById('subsystemDiagram');
  if (!svg) return;
  const center = svg.querySelector('.sd-center');

  svg.querySelectorAll('.sd-group').forEach(g => {
    const sys = g.dataset.sys;
    g.addEventListener('mouseenter', () => {
      svg.querySelectorAll('.sd-group, .sd-link, .sd-dot').forEach(el => {
        if (el.dataset.sys) el.style.opacity = el.dataset.sys === sys ? '1' : '0.12';
      });
      if (center) center.style.opacity = '1';
    });
    g.addEventListener('mouseleave', () => {
      svg.querySelectorAll('.sd-group, .sd-link, .sd-dot, .sd-center').forEach(el => {
        el.style.opacity = '';
      });
    });
  });

  svg.addEventListener('dblclick', () => {
    if (svg.animationsPaused()) svg.unpauseAnimations();
    else svg.pauseAnimations();
  });
}

// Verify diagram (248-ФЗ) — dblclick pause
function initVerifyDiagram() {
  const svg = document.getElementById('verifyDiagram');
  if (!svg) return;
  svg.addEventListener('dblclick', () => {
    if (svg.animationsPaused()) svg.unpauseAnimations();
    else svg.pauseAnimations();
  });
}

// Image carousels (one fragment visible at a time)
function initImageCarousels() {
  const carousels = Array.from(document.querySelectorAll('.oi-carousel'));
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.oi-carousel__slide'));
    const dots = Array.from(carousel.querySelectorAll('.oi-carousel__dot'));
    const prevBtn = carousel.querySelector('.oi-carousel__btn--prev');
    const nextBtn = carousel.querySelector('.oi-carousel__btn--next');

    if (!slides.length) return;

    let current = slides.findIndex(slide => slide.classList.contains('is-active'));
    if (current < 0) current = 0;

    function setSlide(index) {
      const normalized = (index + slides.length) % slides.length;
      current = normalized;

      slides.forEach((slide, i) => {
        const isActive = i === current;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });

      dots.forEach((dot, i) => {
        const isActive = i === current;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        setSlide(current - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        setSlide(current + 1);
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        setSlide(index);
      });
    });

    carousel.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setSlide(current - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setSlide(current + 1);
      }
    });

    setSlide(current);
  });
}

// Collapse sections (hidden by default with toggle button)
function initCollapseSections() {
  document.querySelectorAll('.collapse-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) {
        btn.classList.toggle('open');
        target.classList.toggle('open');
        const textEl = btn.querySelector('.arrow-text');
        if (textEl) {
          textEl.textContent = target.classList.contains('open') ? 'Скрыть детали' : 'Показать детали';
        }
      }
    });
  });
}

// Fullscreen для схем
function toggleFullscreen(elementId) {
  const elem = document.getElementById(elementId);
  if (!elem) return;

  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Входим в fullscreen
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }

    // Меняем текст кнопки
    const btn = elem.querySelector('.schema-fullscreen-btn');
    if (btn) {
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
        </svg>
        Выйти (Esc)
      `;
    }
  } else {
    // Выходим из fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// Слушаем выход из fullscreen для обновления кнопки
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

function handleFullscreenChange() {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    // Вышли из fullscreen - восстанавливаем кнопки
    document.querySelectorAll('.schema-fullscreen-btn').forEach(btn => {
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
        </svg>
        На весь экран
      `;
    });
  }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  initSlideCounter();
  initScrollAnimations();
  initSmoothScroll();
  initActiveNav();
  initBackToTop();
  initLightbox();
  initSchemaTabs();
  initStickySubnav();
  initSubsystemDiagram();
  initVerifyDiagram();
  initImageCarousels();
  initCollapseSections();

  console.log('ЕЦПОТ Dashboard initialized — v3 (minister review)');
});

// Экспорт данных для внешнего использования
window.ECPOT_DATA = DATA;
