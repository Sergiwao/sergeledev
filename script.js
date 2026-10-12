/**
 * Neo-Brutalist Portfolio - Serge Landry WAONGO
 * Enhanced Project Data, Gallery Viewer & Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DONNÉES DÉTAILLÉES DES PROJETS (SANS ÉMOJIS)
  // ==========================================
  const PROJECTS_DATA = {
    ladias: {
      id: "ladias",
      title: "LADiASS — Plateforme Assurance Santé",
      badge: "Angular 21 • PWA Web",
      desc: "Plateforme web et Progressive Web App (PWA) médicale multi-acteurs orchestrant la chaîne de santé et d'assurance : cliniques conventionnées, assurés, entreprises souscriptrices et gestionnaires d'assurances.",
      features: [
        "Gestion et validation en temps réel des demandes de prises en charge médicales",
        "Espace multi-rôles sécurisé : Assurés, Entreprises RH, Cliniques partenaires, Médecin conseil",
        "Génération et suivi automatisé des factures, bordereaux et règlements en FCFA",
        "Interface responsive moderne (Angular 21) optimisée pour smartphone et grand écran"
      ],
      role: "Lead Front-End & Architecture UI : Conception de l'interface responsive avec Angular 21, mise en place des flux de formulaires réactifs, intégration du design system moderne et sécurisation des routes d'accès selon les rôles.",
      tech: ["Angular 21", "TypeScript", "RxJS", "PWA & Offline", "CSS3 / Apple HIG", "HTML5"],
      images: [
        { url: "Pictures/Ladias/ladias_4_mac_mockup.png", label: "Dashboard macOS Grand Écran" },
        { url: "Pictures/Ladias/ladias_1_mac_mockup.png", label: "Vue Tableaux & Prises en Charge" },
        { url: "Pictures/Ladias/ladias_2_clean.png", label: "Interface Mobile — Synthèse" },
        { url: "Pictures/Ladias/ladias_3_clean.png", label: "Interface Mobile — Formulaire" },
        { url: "Pictures/Ladias/ladias_5_clean.png", label: "Connexion & Authentification" },
        { url: "Pictures/Ladias/ladias_6_mac_mockup.png", label: "Feuilles de Soins Médicales" },
        { url: "Pictures/Ladias/ladias_7_mac_mockup.png", label: "Validation & Règlements FCFA" }
      ],
      liveUrl: "https://ladias.onrender.com/",
      githubUrl: "https://github.com/Sergiwao"
    },

    audify: {
      id: "audify",
      title: "Audify — Solution d'Audit & Comptabilité OHADA",
      badge: "Application Métier • Audit & Finance",
      desc: "Solution logicielle conçue pour les cabinets d'expertise comptable, commissaires aux comptes et directions financières, automatisant les cycles d'audit selon les normes SYSCOHADA Révisé.",
      features: [
        "Fonctionnement 100% hors-ligne natif : conservation et traitement des données en local sans latence",
        "Pistes d'audit complètes et génération automatisée des rapports de mission normalisés",
        "Cycles de contrôle automatisés : immobilisations, trésorerie, stocks, tiers et fiscalité",
        "Tableau de bord dynamique avec indicateurs visuels et balance générale automatisée"
      ],
      role: "Développeur Full-Stack & UI Métier : Élaboration de la maquette, développement des interfaces de travail ergonomiques, structuration des calculs financiers et conformité aux standards OHADA.",
      tech: ["Architecture Web & Desktop", "JavaScript ES6+", "Design System Moderne", "Offline-First", "SYSCOHADA"],
      images: [
        { url: "Pictures/Audify/audify_dashboard.png", label: "Tableau de Bord & Métriques d'Audit" },
        { url: "Pictures/Audify/audify_pricing_mac_mockup.png", label: "Tarification & Modules Professionnels" }
      ],
      liveUrl: "https://audify-website.netlify.app/",
      githubUrl: "https://github.com/Sergiwao"
    },

    undercover: {
      id: "undercover",
      title: "Undercover — Jeu d'Infiltration Multi-Thèmes",
      badge: "Party Game Mobile • Multi-Thèmes",
      desc: "Jeu d'ambiance et de déduction sociale captivant aux multiples univers thématiques (Soirée, Célébrités, Nourriture, Loisirs, Famille, et Sport) : « Tout le monde a presque le même mot. Trouve qui bluffe avant qu'il ne soit trop tard. »",
      features: [
        "Six univers thématiques variés : Soirée festive, Célébrités & Pop-culture, Nourriture, Famille, Loisirs et Sport",
        "Paramétrage complet de la partie : nombre d'infiltrés Undercover, rôle Mister White et minuterie par manche",
        "Expérience mobile ergonomique avec passage fluide de l'appareil entre participants sans révéler les cartes",
        "Débats stratégiques, système de vote en direct et écran festif de couronnement des vainqueurs"
      ],
      role: "Lead Développeur Front-End & Game Design : Architecture complète sous React, gestion réactive des états de manche, animations dynamiques, retours sonores immersifs et PWA installable.",
      tech: ["React", "TypeScript", "Vite", "PWA & Mobile-First", "Tailwind CSS", "Netlify"],
      images: [
        { url: "Pictures/Undercover/undercover_themes.png", label: "Choix des Thèmes (Soirée, Célébrités...)" },
        { url: "Pictures/Undercover/undercover_players.png", label: "Configuration & Liste des Joueurs" },
        { url: "Pictures/Undercover/undercover_reveal.png", label: "Écran Secret de Révélation du Rôle" },
        { url: "Pictures/Undercover/undercover_winner.png", label: "Victoire & Résumé des Rôles" }
      ],
      liveUrl: "https://football-undercover-game.netlify.app/",
      githubUrl: "https://github.com/Sergiwao"
    },

    meradis: {
      id: "meradis",
      title: "Annuaire Géolocalisé — Artisans de Proximité",
      badge: "1er Prix Hackathon Merradis 2026",
      desc: "Projet lauréat du 1er Prix au Hackathon Merradis Burkina × UTM 2026. Conçu et développé en équipe (LOGICODE, 5 membres), cet annuaire connecté résout le problème d'accès aux artisans qualifiés en géolocalisant les prestataires fiables les plus proches des citoyens.",
      features: [
        "Cartographie interactive et géolocalisation en temps réel des artisans de proximité",
        "Profils artisans vérifiés : spécialités, réalisations passées, avis certifiés et tarification indicative",
        "Mise en relation instantanée sans intermédiaire via appel direct et messagerie",
        "Architecture pensée pour une scalabilité nationale et inclusion des travailleurs informels"
      ],
      role: "Co-Développeur Front-End & Pitch Solution au sein de l'équipe LOGICODE (5 développeurs) : Conception de l'interface utilisateur, modélisation du parcours client et défense du projet devant le jury d'experts.",
      tech: ["Géolocalisation & Maps", "JavaScript", "Architecture Web Agile", "Travail d'Équipe (5 devs)", "Pitch Lauréat"],
      images: [
        { url: "Pictures/Merradis Hackaton/Merradis 1.jpeg", label: "Remise du 1er Prix à l'Équipe LOGICODE" },
        { url: "Pictures/Merradis Hackaton/Merradis 2.jpeg", label: "Attestation de distinction nominative" },
        { url: "Pictures/Merradis Hackaton/Merradis 3.jpeg", label: "Tribune du Jury — Hackathon Merradis 2026" }
      ],
      liveUrl: null,
      githubUrl: "https://github.com/Sergiwao"
    }
  };

  // ==========================================
  // 2. MODALE INTERACTIVE DE PROJET
  // ==========================================
  const modalBackdrop = document.getElementById('projectModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalRole = document.getElementById('modalRole');
  const modalTechTags = document.getElementById('modalTechTags');
  const modalActions = document.getElementById('modalActions');
  const modalMainImage = document.getElementById('modalMainImage');
  const modalThumbsList = document.getElementById('modalThumbsList');

  window.openProjectModal = function(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    modalBadge.textContent = data.badge;
    modalBadge.className = `modal-badge tag-pill ${projectId === 'meradis' ? 'tag-sun text-ink' : (projectId === 'ladias' ? 'tag-teal' : (projectId === 'audify' ? 'tag-grape' : 'tag-coral'))}`;
    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalRole.textContent = data.role;

    // Features
    modalFeatures.innerHTML = '';
    data.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      modalFeatures.appendChild(li);
    });

    // Tech Tags
    modalTechTags.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag-pill tag-ink text-paper';
      span.textContent = t;
      modalTechTags.appendChild(span);
    });

    // Action Buttons (Sans émojis)
    modalActions.innerHTML = '';
    if (data.liveUrl) {
      const liveBtn = document.createElement('a');
      liveBtn.href = data.liveUrl;
      liveBtn.target = '_blank';
      liveBtn.rel = 'noopener';
      liveBtn.className = 'btn-neo btn-sun shadow-pop';
      liveBtn.textContent = 'Tester l\'application';
      modalActions.appendChild(liveBtn);
    }
    if (data.githubUrl) {
      const gitBtn = document.createElement('a');
      gitBtn.href = data.githubUrl;
      gitBtn.target = '_blank';
      gitBtn.rel = 'noopener';
      gitBtn.className = 'btn-neo btn-white shadow-pop';
      gitBtn.textContent = 'Voir sur GitHub';
      modalActions.appendChild(gitBtn);
    }

    // Galerie & Thumbnails
    modalThumbsList.innerHTML = '';
    if (data.images && data.images.length > 0) {
      modalMainImage.src = data.images[0].url;
      modalMainImage.alt = data.images[0].label;

      data.images.forEach((imgObj, idx) => {
        const thumb = document.createElement('img');
        thumb.src = imgObj.url;
        thumb.alt = imgObj.label;
        thumb.className = `modal-thumb ${idx === 0 ? 'active' : ''}`;
        thumb.addEventListener('click', () => {
          modalMainImage.src = imgObj.url;
          modalMainImage.alt = imgObj.label;
          modalThumbsList.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
        });
        modalThumbsList.appendChild(thumb);
      });
    }

    // Ouvrir la modale et réinitialiser le scroll en haut
    const modalDialog = modalBackdrop.querySelector('.modal-dialog');
    if (modalDialog) modalDialog.scrollTop = 0;
    modalBackdrop.classList.add('active');
    document.body.classList.add('modal-open');
  };

  const closeProjectModal = () => {
    modalBackdrop.classList.remove('active');
    document.body.classList.remove('modal-open');
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeProjectModal();
    });
  }

  // ==========================================
  // 3. GALERIE PHOTOS PARCOURS (AVEC FLÈCHES GAUCHE/DROITE)
  // ==========================================
  const PHOTO_GALLERIES = {
    odc: [
      { url: "Pictures/ODC/odc 1.jpeg", caption: "Serge Landry WAONGO à Orange Digital Center (ODC)" },
      { url: "Pictures/ODC/odc 2.jpeg", caption: "Présentation de projet à Orange Digital Center (ODC)" },
      { url: "Pictures/ODC/odc 3.jpeg", caption: "Session de développement Angular en formation ODC" }
    ],
    merradis: [
      { url: "Pictures/Merradis Hackaton/Merradis 1.jpeg", caption: "1er Prix décerné à LOGICODE — Hackathon Merradis Burkina × UTM 2026" },
      { url: "Pictures/Merradis Hackaton/Merradis 2.jpeg", caption: "Attestation de distinction remise à Serge Landry WAONGO" },
      { url: "Pictures/Merradis Hackaton/Merradis 3.jpeg", caption: "Tribune et membres du jury — Hackathon Merradis 2026" }
    ]
  };

  let currentGalleryKey = null;
  let currentGalleryIndex = 0;

  const photoLightbox = document.getElementById('photoLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  window.openGalleryViewer = function(galleryKey, index) {
    if (!PHOTO_GALLERIES[galleryKey]) return;
    currentGalleryKey = galleryKey;
    currentGalleryIndex = index;
    updateGalleryViewer();
    photoLightbox.classList.add('active');
    document.body.classList.add('modal-open');
  };

  function updateGalleryViewer() {
    const gallery = PHOTO_GALLERIES[currentGalleryKey];
    if (!gallery || !gallery[currentGalleryIndex]) return;

    const item = gallery[currentGalleryIndex];
    lightboxImage.src = item.url;
    lightboxCaption.textContent = item.caption;
    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentGalleryIndex + 1} / ${gallery.length}`;
    }

    if (lightboxPrevBtn) lightboxPrevBtn.disabled = (currentGalleryIndex === 0);
    if (lightboxNextBtn) lightboxNextBtn.disabled = (currentGalleryIndex === gallery.length - 1);
  }

  window.prevGalleryPhoto = function() {
    if (!currentGalleryKey) return;
    if (currentGalleryIndex > 0) {
      currentGalleryIndex--;
      updateGalleryViewer();
    }
  };

  window.nextGalleryPhoto = function() {
    if (!currentGalleryKey) return;
    const gallery = PHOTO_GALLERIES[currentGalleryKey];
    if (currentGalleryIndex < gallery.length - 1) {
      currentGalleryIndex++;
      updateGalleryViewer();
    }
  };

  window.closePhotoViewer = function() {
    photoLightbox.classList.remove('active');
    document.body.classList.remove('modal-open');
    currentGalleryKey = null;
  };

  // Keyboard Navigation (Échap, Flèche Gauche, Flèche Droite)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (photoLightbox.classList.contains('active')) closePhotoViewer();
      if (modalBackdrop.classList.contains('active')) closeProjectModal();
    } else if (photoLightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') prevGalleryPhoto();
      if (e.key === 'ArrowRight') nextGalleryPhoto();
    }
  });

  // ==========================================
  // 4. EFFET SCROLL VIEW (SCROLL REVEAL FLUIDE)
  // ==========================================
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // ==========================================
  // 5. NAVIGATION MOBILE & LIENS
  // ==========================================
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Date dynamique du footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
