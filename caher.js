const caherContainer = document.getElementById("app-container");
caherContainer.innerHTML = `
  <h2>📝 Générateur de sens à partir de rien</h2>
  <p>Invente un mot. N’importe lequel.</p>
  <input id="madeup-word" type="text" placeholder="Ex : solorangebleu, ouheu, jalinou" style="width:70%; padding:10px;">
  <br><br>
  <button onclick="generateMeaning()">Donner un sens</button>
  <div id="meaning-output" style="margin-top:30px; font-size:1.2em;"></div>
`;

const meanings = [
  "Un amour qui n’est pas dit mais présent.",
  "Une joie qui explose doucement dans les épaules.",
  "Un câlin fait avec les yeux.",
  "Le goût exact du silence à 3h du matin.",
  "Ce qu'on ressent juste avant un fou rire sacré.",
  "Une pensée qui brille sans se montrer.",
  "La tendresse qu'on oublie de nommer, mais jamais de sentir.",
  "Un moment moelleux dans un coin de l’après-midi.",
  "Une lumière qui sait attendre.",
  "Le frisson de se reconnaître dans un mot qu’on ne connaît pas.",
  "Une étoile collée sous la langue.",
  "La magie qui se cache derrière les rideaux du quotidien.",
  "Un souvenir pas encore vécu.",
  "Un nom secret qu’on se donne en rêve.",
  "Un mot raté, mais beau pareil.",
  "Une étoile filante dans un tiroir à chaussettes.",
  "Un silence partagé entre deux sourires.",
  "Le souffle d’un vieux dragon triste et tendre.",
  "Une poussière sacrée tombée d’un câlin cosmique.",
  "Une luciole qui comprend tout, mais dit rien.",
  "Le dernier mot avant de s’endormir, même s’il est inventé."
];

function generateMeaning() {
  const input = document.getElementById("madeup-word").value.trim();
  const output = document.getElementById("meaning-output");

  if (!input) {
    output.textContent = "🫥 Ce mot n'a pas encore rêvé. Essaie quelque chose.";
    return;
  }

  const meaning = meanings[Math.floor(Math.random() * meanings.length)];
  output.innerHTML = `« <strong>${input}</strong> » signifie :<br>${meaning}`;
}
