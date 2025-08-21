import EnglandLogo from '../assets/LOGOS/Flag_of_England.svg.png';
import FranceLogo from '../assets/LOGOS/Ensign_of_France.svg.png';
import USALogo from '../assets/LOGOS/Flag_of_the_United_States.svg.png';

let timerInterval = null;
// NOMS D'ÉQUIPES
// Set team name
export function setTeamName(side, name) {
    const key = side === 'left' ? 'teamNameLeft' : 'teamNameRight';
    localStorage.setItem(key, name);
    emitChange({ type: 'teamName', side, name });
}

// Get team name
export function getTeamName(side) {
    const key = side === 'left' ? 'teamNameLeft' : 'teamNameRight';
    return localStorage.getItem(key) || (side === 'left' ? 'Team One' : 'Team Two');
}

function emitChange(detail) {
    window.dispatchEvent(new CustomEvent('scoreboard:change', { detail }));
}

function ensureTeamNames() {
    if (!localStorage.getItem('teamNameLeft')) localStorage.setItem('teamNameLeft', 'Team One');
    if (!localStorage.getItem('teamNameRight')) localStorage.setItem('teamNameRight', 'Team Two');
}
function ensureInit() {
    if (localStorage.getItem('leftScore') === null) localStorage.setItem('leftScore', '0');
    if (localStorage.getItem('rightScore') === null) localStorage.setItem('rightScore', '0');
    if (localStorage.getItem('timerSeconds') === null) localStorage.setItem('timerSeconds', '0');
    if (localStorage.getItem('timerRunning') === null) localStorage.setItem('timerRunning', 'false');
    ensureTeamNames();
}

// --- GET TEAM FLAG ---
export function getTeamFlag(side) {
    const teamName = getTeamName(side);

    switch (teamName) {
        case 'Angleterre':
            return EnglandLogo;
        case 'France':
            return FranceLogo;
        case 'USA':
        case 'États-Unis':
            return USALogo;
        default:
            return null; // ou une image par défaut si tu préfères
    }
}

// --- Score functions ---
export function addPoints(team, points) {
    ensureInit();
    const key = team === 'left' ? 'leftScore' : 'rightScore';
    const current = parseInt(localStorage.getItem(key) || '0', 10);
    const next = current + points;
    localStorage.setItem(key, next);
    emitChange({ type: 'score', team, value: next });
}

export function resetScores() {
    ensureInit();
    localStorage.setItem('leftScore', '0');
    localStorage.setItem('rightScore', '0');
    emitChange({ type: 'score-reset' });
}

// --- Timer functions ---
export function startTimer() {
    ensureInit();
    if (timerInterval) return;
    localStorage.setItem('timerRunning', 'true');
    timerInterval = setInterval(() => {
        const current = parseInt(localStorage.getItem('timerSeconds') || '0', 10);
        const next = current + 1;
        localStorage.setItem('timerSeconds', next);
        emitChange({ type: 'timer', seconds: next });
    }, 1000);
    emitChange({ type: 'timer-start' });
}

export function stopTimer() {
    ensureInit();
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    localStorage.setItem('timerRunning', 'false');
    emitChange({ type: 'timer-stop', seconds: parseInt(localStorage.getItem('timerSeconds') || '0', 10) });
}

export function resetTimer() {
    ensureInit();
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    localStorage.setItem('timerSeconds', '0');
    localStorage.setItem('timerRunning', 'false');
    emitChange({ type: 'timer-reset', seconds: 0 });
}

// --- Cards / Fouls functions ---
function cardKey(side, color, index) {
    const s = side === 'left' ? 'left' : 'right';
    const c = color === 'yellow' ? 'Yellow' : 'Red';
    const n = index === 1 ? 'One' : index === 2 ? 'Two' : 'Three';
    return `${s}${c}${n}Status`;
}

function toggleCard(side, color, index) {
    const key = cardKey(side, color, index);
    const current = localStorage.getItem(key) === 'true';
    const next = (!current).toString();
    localStorage.setItem(key, next);
    emitChange({ type: 'card', side, color, index, value: next === 'true' });
}

export function toggleYellow(side, index) {
    toggleCard(side, 'yellow', index);
}

export function toggleRed(side, index) {
    toggleCard(side, 'red', index);
}