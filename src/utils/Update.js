// src/utils/Update.js
// Safely sync overlay DOM from localStorage. Robust against missing elements.

function setTextIfExists(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  const text = value == null ? '' : String(value);
  if (el.textContent !== text) el.textContent = text;
}

function setDisplayFromKey(id, storageKey) {
  const el = document.getElementById(id);
  if (!el) return;
  const isHidden = localStorage.getItem(storageKey) === 'true';
  // When status is true, hide; else show (original behavior)
  el.style.display = isHidden ? 'none' : 'block';
}

function setTimerFromLocalStorage() {
  const raw = parseInt(localStorage.getItem('timerSeconds') || '0', 10);
  const total = Number.isNaN(raw) ? 0 : raw;
  const mm = Math.floor(total / 60).toString().padStart(2, '0');
  const ss = (total % 60).toString().padStart(2, '0');
  setTextIfExists('minutes', mm);
  setTextIfExists('seconds', ss);
}

export function reload() {
  // Scores
  setTimerFromLocalStorage();
  setTextIfExists('scoreLeft', localStorage.getItem('leftScore') || '0');
  setTextIfExists('scoreRight', localStorage.getItem('rightScore') || '0');
    reloadTeamNames()

  // Mi-temps
  setHalfFromLocalStorage();

  // Timer (minutes:seconds)
  const secs = parseInt(localStorage.getItem('timerSeconds') || '0', 10);
  const mins = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  setTextIfExists('minutes', mins);
  setTextIfExists('seconds', s);

  // Cards (CJ/CR)
  setDisplayFromKey('yellowCardLeftOne', 'leftYellowOneStatus');
  setDisplayFromKey('yellowCardLeftTwo', 'leftYellowTwoStatus');
  setDisplayFromKey('yellowCardLeftThree', 'leftYellowThreeStatus');
  setDisplayFromKey('redCardLeftOne', 'leftRedOneStatus');
  setDisplayFromKey('redCardLeftTwo', 'leftRedTwoStatus');
  setDisplayFromKey('redCardLeftThree', 'leftRedThreeStatus');
  setDisplayFromKey('yellowCardRightOne', 'rightYellowOneStatus');
  setDisplayFromKey('yellowCardRightTwo', 'rightYellowTwoStatus');
  setDisplayFromKey('yellowCardRightThree', 'rightYellowThreeStatus');
  setDisplayFromKey('redCardRightOne', 'rightRedOneStatus');
  setDisplayFromKey('redCardRightTwo', 'rightRedTwoStatus');
  setDisplayFromKey('redCardRightThree', 'rightRedThreeStatus');
}

function safeReload() {
  try { reload(); } catch (e) { console && console.warn && console.warn('[Update] reload error:', e); }
}

// Start once DOM is ready, and update on custom events from Control.js.
(function startUpdater() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', safeReload, { once: true });
  } else {
    // DOM already ready in SPA contexts
    safeReload();
  }

  // React to changes emitted by Control.js (if present)
  try {
    window.addEventListener('scoreboard:change', safeReload);
  } catch (_) {}

  // Fallback polling (reduced to 500ms to avoid unnecessary load)
  setInterval(safeReload, 500);
})();

function reloadTeamNames() {
    const leftName = localStorage.getItem('teamNameLeft') || 'Team One';
    const rightName = localStorage.getItem('teamNameRight') || 'Team Two';
    setTextIfExists('teamNameLeftTitle', leftName);
    setTextIfExists('teamNameRightTitle', rightName);
}
// Half-time display
function setHalfFromLocalStorage() {
  const half = localStorage.getItem('half') || '1'; // défaut = 1ère mi-temps
  let label = '';
  switch (half) {
    case '1':
      label = 'MT 1';
      break;
    case '2':
      label = 'MT 2';
      break;
    default:
      label = '';
  }
  setTextIfExists('halfLabel', label);
}