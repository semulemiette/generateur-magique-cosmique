const goblinContainer = document.getElementById("app-container");
goblinContainer.innerHTML = `
  <h2>👹 Générateur de noms de gobelins</h2>
  <button onclick="generateGoblinName()">👺 Révéler mon nom de gobelin</button>
  <div id="goblin-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const goblinPrefixes = ["Bave", "Moche", "Truc", "Chnock", "Pustule", "Grognon", "Glu", "Roti", "Croûte", "Snif"];
const goblinSuffixes = ["miette", "trouille", "ronchon", "morve", "groin", "bidule", "patte", "grume", "frott", "bavure"];
const goblinTitles = [
  "Dévoreur de chaussettes",
  "Ronfleur des ténèbres",
  "l’Humide",
  "Maître·sse du Rien",
  "Seigneur·e des Miettes",
  "Commandant·e du Linge Sale",
  "Apprenti·e de la Sieste",
  "Champion·ne du Gloubiboulga",
  "Reine de la Spaghettologie",
  "Vibe Interdite de l’Estomac Cosmique"
];

function generateGoblinName() {
  const name = randomFrom(goblinPrefixes) + randomFrom(goblinSuffixes);
  const title = randomFrom(goblinTitles);
  const full = `🟢 ${name}\n👑 ${title}`;
  document.getElementById("goblin-output").innerText = `✨ Ton nom de gobelin est :\n\n${full}`;
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
