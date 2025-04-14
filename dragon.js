const dragonContainer = document.getElementById("app-container");
dragonContainer.innerHTML = `
  <h2>🐉 Forge de noms de dragon</h2>
  <button onclick="forgeDragonName()">🔥 Forger mon nom de dragon</button>
  <button onclick="createDragonClan()">🐉 Créer mon clan de dragons</button>
  <div id="dragon-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const dragonPrefixes = ["Vyth", "Skar", "Zorn", "Nyx", "Drak", "Ash", "Kael", "Myrr", "Thal", "Zeph"];
const dragonSuffixes = ["arion", "orax", "adrax", "ionis", "gorn", "azar", "anax", "or", "eth", "rax"];
const dragonTitles = [
  "le Flamboyant",
  "de la Tempête",
  "Marcheur du Vide",
  "l’Aile Silencieuse",
  "le Gardien des Os",
  "Aile-de-Cendre",
  "Terreur du Ciel",
  "le Seigneur des Braises",
  "l’Incombustible",
  "de l’Écaille Ancestrale"
];

function forgeDragonName() {
  const name = randomFrom(dragonPrefixes) + randomFrom(dragonSuffixes);
  const title = randomFrom(dragonTitles);
  const full = `💥 ${name} ${title}`;
  document.getElementById("dragon-output").innerText = `✨ Ton nom de dragon est :\n\n${full}`;
}

function createDragonClan() {
  let clan = "🔥 Ton clan de dragons :\n\n";
  for (let i = 0; i < 5; i++) {
    const name = randomFrom(dragonPrefixes) + randomFrom(dragonSuffixes);
    const title = randomFrom(dragonTitles);
    clan += `🐉 ${name} ${title}\n`;
  }
  document.getElementById("dragon-output").innerText = clan;
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
