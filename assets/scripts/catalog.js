// catalog.js - Handles view toggling and checkbox state management

(function() {
  'use strict';
  
  // Constants
  const STORAGE_KEY = 'mixtape_selected_tapes';
  const VIEW_STORAGE_KEY = 'mixtape_view_preference';
  
  // Initialize on page load
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    setupViewToggle();
    setupCheckboxes();
    loadSelectedTapes();
    updateRequestCount();
    restoreViewPreference();
  }
  
  // ========================================
  // View Toggle Functionality
  // ========================================
  
  function setupViewToggle() {
    const catalogBtn = document.getElementById('catalog-view-btn');
    const listBtn = document.getElementById('list-view-btn');
    
    if (!catalogBtn || !listBtn) return;
    
    catalogBtn.addEventListener('click', () => switchView('catalog'));
    listBtn.addEventListener('click', () => switchView('list'));
  }
  
  function switchView(view) {
    const catalogView = document.getElementById('catalog-view');
    const listView = document.getElementById('list-view');
    const catalogBtn = document.getElementById('catalog-view-btn');
    const listBtn = document.getElementById('list-view-btn');
    
    if (!catalogView || !listView) return;
    
    if (view === 'catalog') {
      catalogView.classList.add('active');
      listView.classList.remove('active');
      catalogBtn.classList.add('active');
      listBtn.classList.remove('active');
    } else {
      listView.classList.add('active');
      catalogView.classList.remove('active');
      listBtn.classList.add('active');
      catalogBtn.classList.remove('active');
    }
    
    // Save preference
    localStorage.setItem(VIEW_STORAGE_KEY, view);
    
    // Sync checkbox states between views
    syncCheckboxStates();
  }
  
  function restoreViewPreference() {
    const savedView = localStorage.getItem(VIEW_STORAGE_KEY);
    if (savedView === 'list') {
      switchView('list');
    }
  }
  
  // ========================================
  // Checkbox Management
  // ========================================
  
  function setupCheckboxes() {
    const checkboxes = document.querySelectorAll('.request-checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', handleCheckboxChange);
    });
  }
  
  function handleCheckboxChange(event) {
    const checkbox = event.target;
    const slug = checkbox.dataset.tapeSlug;
    const title = checkbox.dataset.tapeTitle;
    
    let selectedTapes = getSelectedTapes();
    
    if (checkbox.checked) {
      // Add tape to selection
      if (!selectedTapes.some(tape => tape.slug === slug)) {
        selectedTapes.push({ slug, title });
      }
    } else {
      // Remove tape from selection
      selectedTapes = selectedTapes.filter(tape => tape.slug !== slug);
    }
    
    saveSelectedTapes(selectedTapes);
    syncCheckboxStates();
    updateRequestCount();
  }
  
  function syncCheckboxStates() {
    const selectedTapes = getSelectedTapes();
    const selectedSlugs = selectedTapes.map(tape => tape.slug);
    
    const checkboxes = document.querySelectorAll('.request-checkbox');
    checkboxes.forEach(checkbox => {
      const slug = checkbox.dataset.tapeSlug;
      checkbox.checked = selectedSlugs.includes(slug);
    });
  }
  
  function loadSelectedTapes() {
    syncCheckboxStates();
  }
  
  // ========================================
  // Local Storage Helpers
  // ========================================
  
  function getSelectedTapes() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error loading selected tapes:', e);
      return [];
    }
  }
  
  function saveSelectedTapes(tapes) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tapes));
    } catch (e) {
      console.error('Error saving selected tapes:', e);
    }
  }
  
  // ========================================
  // Request Count Display
  // ========================================
  
  function updateRequestCount() {
    const selectedTapes = getSelectedTapes();
    const countElement = document.getElementById('request-count');
    
    if (countElement) {
      countElement.textContent = selectedTapes.length;
    }
  }
  
  // Export for use in request.js
  window.MixtapeLibrary = {
    getSelectedTapes,
    saveSelectedTapes
  };
})();
