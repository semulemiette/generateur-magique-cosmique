const oracleContainer = document.getElementById("app-container");
oracleContainer.innerHTML = `
  <h2>🔮 Oracle Extra Totale</h2>
  <input id="question" type="text" placeholder="Pose ta question..." style="width:80%; padding:10px; font-size:1em;">
  <br><br>
  <select id="style">
    <option>Loufoque</option>
    <option>Mystérieux</option>
    <option>Doux</option>
    <option>Sérieux</option>
  </select>
  <br><br>
  <button onclick="askOracle()">Recevoir ma réponse</button>
  <div id="oracle-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const oracleResponses = {
  "Loufoque": [
    "🍕 Si la pizza appelle, réponds-lui.",
    "🛸 Oui, mais seulement avec des chaussettes dépareillées.",
    "🐸 La grenouille sait. Demande-lui.",
    "🧀 Le fromage, c’est toujours oui.",
    "🍩 Probablement pas… sauf s’il y a des beignes en jeu."
  ],
  "Mystérieux": [
    "🌌 Les étoiles restent muettes… pour l’instant.",
    "👁️‍🗨️ Tu connais déjà la réponse.",
    "🪞 Les reflets mentent. La vérité glisse.",
    "🌙 La lune approuve… doucement.",
    "⏳ Attends. Puis redemande."
  ],
  "Doux": [
    "💖 Oui, parce que tu mérites la magie.",
    "🌸 L’univers te sourit.",
    "🧁 Absolument. Offre-toi ça.",
    "🌈 Vas-y. Doucement et bravement.",
    "💫 Fais confiance à ton cœur. Il sait plus que tu crois."
  ],
  "Sérieux": [
    "✅ Oui. Mais sois responsable.",
    "⚠️ Non. Vraiment. Ne fais pas ça.",
    "🤔 Pas encore. Attends un peu.",
    "✔️ Oui. Tu es prêt·e.",
    "❗ Tu as déjà pris ta décision."
  ]
};

function askOracle() {
  const question = document.getElementById("question").value.trim();
  const style = document.getElementById("style").value;
  const output = document.getElementById("oracle-output");

  if (!question) {
    output.textContent = "🙃 Pose une vraie question à l’oracle, voyons.";
    return;
  }

  const response = oracleResponses[style][Math.floor(Math.random() * oracleResponses[style].length)];
  output.innerHTML = `🔮 Question :<br>${question}<br><br>🪐 Réponse :<br>${response}`;
}
