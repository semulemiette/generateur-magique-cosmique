const motContainer = document.getElementById("app-container");
motContainer.innerHTML = `
  <h2>✨ Mot inventé du jour</h2>
  <p>Choisis une porte :</p>
  <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 20px 0;">
    <button onclick="tirerMot()" data-source="vide">🍂 Un mot porté par le vide</button>
    <button onclick="tirerMot()" data-source="au-dela">🌸 Un murmure d’au-delà</button>
    <button onclick="tirerMot()" data-source="invisible">🦋 Un mot confié par l’invisible</button>
    <button onclick="tirerMot()" data-source="ancien">🎶 Un écho ancien sans langue</button>
  </div>
  <div id="mot-resultat" style="margin-top: 30px; font-size: 1.4em;"></div>
`;

const motsInventés = [
  { mot: "fléroune", def: "Moment doux où l’âme fait un câlin au cœur." },
  { mot: "magule", def: "Quelque chose de beau, même quand c’est un peu croche." },
  { mot: "ligmine", def: "Lumière qu’on voit quand on ferme les yeux très fort." },
  { mot: "fhlende", def: "Soupir sacré quand on tombe dans un lit moelleux." },
  { mot: "gludlen", def: "Bonheur flou mais stable, comme un moment avec du thé." },
  { mot: "elvoneir", def: "Pleurer doucement devant la beauté de quelqu’un." },
  { mot: "nelfie", def: "Objet rempli d’amour offert par quelqu’un de précieux." },
  { mot: "tendreuil", def: "Rien ne tient sauf la douceur. Et c’est assez." },
  { mot: "fraelure", def: "Faille douce par laquelle passe la lumière." },
  { mot: "valune", def: "Imparfait qui rend les choses vivantes." },
  { mot: "pofflinette", def: "Petite chose inutile mais adorable." },
  { mot: "trébulin", def: "Un pas maladroit qui mène à un endroit exact." },
  { mot: "crupette", def: "Souvenir d’un rire d’enfance oublié." },
  { mot: "solorangebleu", def: "Amour qui n’est pas dit mais présent." },
  { mot: "floluette", def: "Pensée qui chatouille l’intérieur de la gorge." },
  { mot: "blinou", def: "Pause molle entre deux émotions." },
  { mot: "ouheu", def: "Soupir affectueux sans cause précise." },
  { mot: "draflume", def: "Brume intérieure aux bords qui brillent." },
  { mot: "moup", def: "Baiser sonore imaginaire sur le front de quelqu’un." },
  { mot: "jelune", def: "Présence douce, comme une veilleuse dans l’ombre." },
  { mot: "clurmille", def: "Légère confusion agréable, entre deux pensées." },
  { mot: "vibraoule", def: "Secousse magique du cœur quand on entend son prénom." },
  { mot: "blequouille", def: "Le bruit d’une tendresse maladroite." },
  { mot: "snour", def: "Rugissement minuscule de protection amicale." },
  { mot: "fraïa", def: "Amour posé, fort, tranquille." },
  { mot: "sonne", def: "Présence lumineuse même dans l’absence." },
  { mot: "creathy", def: "État d’invention sans but. Juste parce que c’est beau." },
  { mot: "muorde", def: "Souvenir inversé qui fait rire tendrement." },
  { mot: "sélouve", def: "Rencontre qui ne s’explique pas, mais qui change tout." },
  { mot: "limüse", def: "Émotion très ancienne, comme un rêve oublié." },
  { mot: "flune", def: "Mot qui berce sans rime ni raison." }
];

function tirerMot() {
  const mot = motsInventés[Math.floor(Math.random() * motsInventés.length)];
  const conteneur = document.getElementById("mot-resultat");
  conteneur.innerHTML = `<strong>${mot.mot}</strong><br><em>${mot.def}</em>`;
}
