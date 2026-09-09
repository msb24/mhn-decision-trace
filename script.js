
const steps = document.querySelectorAll('.step');
const screens = document.querySelectorAll('.screen');

function showScreen(id){
  screens.forEach(s => s.classList.toggle('active-screen', s.id === id));
  steps.forEach(b => b.classList.toggle('active', b.dataset.screen === id));
  history.replaceState(null, '', '#' + id);
  window.scrollTo({top:0, behavior:'smooth'});
}

steps.forEach(btn => btn.addEventListener('click', () => showScreen(btn.dataset.screen)));

const collisionBtn = document.getElementById('collisionBtn');
const collisionPanel = document.getElementById('collisionPanel');
const closeCollision = document.getElementById('closeCollision');

collisionBtn.addEventListener('click', () => collisionPanel.classList.remove('hidden'));
closeCollision.addEventListener('click', () => collisionPanel.classList.add('hidden'));

const remediationToggle = document.getElementById('remediationToggle');
const conditions = document.querySelectorAll('[data-remediable]');
const gatePill = document.getElementById('gatePill');
const gateBanner = document.getElementById('gateBanner');
const headerGate = document.getElementById('headerGate');
const scoreLabel = document.getElementById('scoreLabel');
const scoreSub = document.getElementById('scoreSub');

remediationToggle.addEventListener('change', () => {
  const on = remediationToggle.checked;
  conditions.forEach(c => {
    c.classList.toggle('remediated', on);
    c.querySelector('.cond-icon').textContent = on ? '✓' : '×';
  });
  gatePill.textContent = on ? 'READY FOR PILOT' : 'HOLD';
  gatePill.className = on ? 'status-pill' : 'status-pill hold';
  if(on){
    gatePill.style.background = 'var(--mint)';
    gatePill.style.color = 'var(--mint-strong)';
    gateBanner.className = 'gate-banner ready-banner';
    gateBanner.querySelector('strong').textContent = 'Simulated decision: READY FOR PILOT';
    gateBanner.querySelector('span').textContent = 'This is a hypothetical future state after all four preconditions are verified and closed.';
    headerGate.textContent = 'PILOT READY*';
    scoreLabel.textContent = 'Controls remediated in simulation';
    scoreSub.textContent = 'Readiness score remains the documented pre-remediation 10/20; this toggle only demonstrates the proposed future gate.';
  } else {
    gatePill.style.background = '';
    gatePill.style.color = '';
    gateBanner.className = 'gate-banner hold-banner';
    gateBanner.querySelector('strong').textContent = 'Current decision: HOLD';
    gateBanner.querySelector('span').textContent = 'Continue readiness work, but do not treat the current data layer as ready for unrestricted deployment.';
    headerGate.textContent = 'HOLD';
    scoreLabel.textContent = 'Address gaps before proceeding';
    scoreSub.textContent = "At the bottom of the worksheet's 10–15 caution band.";
  }
});

// Allow direct links to specific prototype screens.
const hash = location.hash.replace('#','');
if(hash && document.getElementById(hash)) showScreen(hash);

// Screenshot helper: ?collision=1#integrity opens the embedded Label Collision panel.
const params = new URLSearchParams(location.search);
if(params.get('collision') === '1'){
  showScreen('integrity');
  collisionPanel.classList.remove('hidden');
}
