const fortuneContainer = document.getElementById("app-container");
fortuneContainer.innerHTML = `
  <h2>🌌 Fortune cosmique</h2>
  <p>Choisis ton univers :</p>
  <select id="theme-select">
    <option>Fée</option>
    <option>Gothique</option>
    <option>Espace</option>
    <option>Gobelin</option>
  </select>
  <br><br>
  <button onclick="getFortune()">🔮 Obtenir ma fortune</button>
  <div id="fortune-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const themes = {
  "Fée": {
    colors: ["rose poudré", "lavande", "brume de pêche"],
    animals: ["papillon", "petit cerf", "oiseau chanteur"],
    snacks: ["thé de rose", "nuages sucrés", "macarons féériques"]
  },
  "Gothique": {
    colors: ["minuit", "rouge sang", "gris orage"],
    animals: ["corbeau", "chat noir", "chauve-souris"],
    snacks: ["chocolat noir", "mûres", "biscuits sorciers"]
  },
  "Espace": {
    colors: ["bleu cosmique", "vert plasma", "or solaire"],
    animals: ["lézard spatial", "renard alien", "loutre astro"],
    snacks: ["popcorn galactique", "gelée néon", "tacos cosmiques"]
  },
  "Gobelin": {
    colors: ["vert mousse", "brun boue", "rose limace"],
    animals: ["crapaud", "raton-poubelle", "crabe vaseux"],
    snacks: ["chips des marais", "soupe mystère", "vers gommeux gobelins"]
  }
};

function getFortune() {
  const theme = document.getElementById("theme-select").value;
  const selected = themes[theme];
  const color = randomFrom(selected.colors);
  const animal = randomFrom(selected.animals);
  const snack = randomFrom(selected.snacks);

  const message = `🎨 Couleur : ${color}\n🐾 Animal : ${animal}\n🍪 En-cas : ${snack}`;
  document.getElementById("fortune-output").innerText = message;
}

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
