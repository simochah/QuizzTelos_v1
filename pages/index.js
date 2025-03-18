import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

const instructions = (
  <div className="text-center">
    <h1 className="text-2xl font-bold">🔥 Test de Désalignement Rapide – Découvre en 5 minutes ton degré d'alignement avec ton TELOS et ce qui te bloque vraiment 🔥</h1>
    <p className="text-sm italic mt-4">
      Ce test est conçu pour aider coachs, thérapeutes, entrepreneurs en quête d’alignement (et toute personne en transition de vie) à identifier en quelques minutes leurs blocages invisibles qui les empêchent d’avancer naturellement vers leur plein potentiel.
    </p>
    <h2 className="text-lg font-semibold mt-6">📩 Mode d'emploi :</h2>
    <p className="mt-2">
      Réponds spontanément et sincèrement à ces affirmations en sélectionnant une note de 1 à 5 :
    </p>
    <ul className="text-left inline-block mt-2">
      <li><strong>1</strong> : Pas du tout d’accord</li>
      <li><strong>2</strong> : Plutôt pas d’accord</li>
      <li><strong>3</strong> : Neutre</li>
      <li><strong>4</strong> : Plutôt d’accord</li>
      <li><strong>5</strong> : Totalement d’accord</li>
    </ul>
    <p className="mt-4">
      Chaque réponse t’aidera à comprendre ton niveau d’alignement avec ton TELOS et à identifier les V.O.I.L.E (Vision Obstruée Inhibant la Libre Évolution) qui peuvent te freiner.
    </p>
  </div>
);

const sections = [
  {
    title: "🚀 Clarté et Mission de Vie",
    questions: [
      "Je me lève chaque matin avec une clarté absolue sur ce que je veux accomplir.",
      "Mon activité professionnelle ou ma mission me procure un profond sentiment de sens et d’épanouissement.",
      "Je ressens une fluidité et une aisance naturelle dans mes décisions et actions."
    ]
  },
  {
    title: "💰 Motivation et Procrastination",
    questions: [
      "Je n’ai pas besoin de motivation externe pour avancer vers mes objectifs.",
      "Je ne ressens pas le besoin de forcer pour obtenir des résultats.",
      "Je ne repousse jamais des tâches importantes par peur ou manque d’envie."
    ]
  },
  {
    title: "🔮 Blocages Invisibles et Auto-Sabotage",
    questions: [
      "Je ne ressens aucune hésitation, doute ou peur lorsque je prends des décisions majeures.",
      "Je ne me compare jamais aux autres en ayant l’impression d’être en retard ou de manquer quelque chose."
    ]
  },
  {
    title: "🔋 Énergie et Bien-être",
    questions: [
      "Mon énergie est stable et abondante tout au long de la journée.",
      "Je dors bien et me réveille reposé(e) et aligné(e) avec mes aspirations."
    ]
  }
];

const getRecommendation = (score) => {
  if (score >= 40) {
    return (
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-bold">Tu es hautement aligné(e) avec ton TELOS</h2>
        <p><strong>Ce que cela signifie :</strong></p>
        <p>Félicitations ! Tu as atteint un haut niveau d’alignement avec ton <strong>TELOS</strong>, ta raison d’être. Tes actions sont naturelles, fluides, et ne nécessitent pas d’effort forcé. Cela signifie que tes décisions et ton quotidien sont en grande partie <strong>guidés par tes priorités intrinsèques</strong>, celles qui te motivent profondément de l’intérieur.</p>
        <p><strong>Pourquoi c’est important ?</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>On agit sans avoir besoin de motivation externe.</li>
          <li>On ressent un <strong>sentiment de complétude</strong> et non de manque.</li>
          <li>On attire des opportunités cohérentes avec notre mission.</li>
        </ul>
        <p><strong>Tu es dans un état d’<em>A.M.E</em> (Alignement des Motivations Essentielles) :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>A</strong> : Alignement → Tes décisions sont en phase avec qui tu es vraiment.</li>
          <li><strong>M</strong> : Motivation → Tu avances sans avoir besoin de forcer.</li>
          <li><strong>E</strong> : Essentiel → Tu ne ressens pas de vide, car tu nourris ton essence, pas seulement ton existence.</li>
        </ul>
        <p><strong>Prochaine étape :</strong></p>
        <p>Même si tu es aligné(e), continue d’affiner ta vision et d’élever tes actions pour ne pas tomber dans l’illusion du statu quo. Assure-toi que tes choix restent en accord avec ton TELOS à mesure que tu évolues.</p>
        <p><strong>Si tu veux aller plus loin ou te faire accompagner dans ce voyage, tu as plusieurs choix :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Clique sur le lien suivant pour <a href="https://chat.whatsapp.com/KXxviUdZPBiKTG1X4PVr1B" className="text-blue-500 underline">rejoindre la communauté S.A.G.E et profiter de ce que je partage gratuitement à la communauté</a></li>
          <li>Ou bien envoi moi un email <a href="mailto:support@simochah.fr?subject=Demande%20d'information%20suite%20au%20test-quiz" className="text-blue-500 underline">en cliquant ici</a></li>
          <li>Ou bien envoie moi un DM sur Instagram <a href="https://ig.me/m/simochaah" className="text-blue-500 underline">en cliquant ici(@simochaah)</a></li>
          <li>Ou bien écris moi en privé sur WhatsApp <a href="https://chat.whatsapp.com/KXxviUdZPBiKTG1X4PVr1B" className="text-blue-500 underline">en cliquant ici</a></li>
        </ul>
        <h3 className="text-xl font-bold mt-6">🚀 Reconnecte-toi à ton A.M.E et libère ton véritable potentiel dès maintenant !</h3>
      </div>
    );
  } else if (score >= 30) {
    return (
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-bold">⚖️ Tu es sur la bonne route, mais certains blocages subsistent</h2>
        <p><strong>Ce que cela signifie :</strong></p>
        <p>Tu es dans une dynamique d’alignement avec ton <strong>TELOS</strong>, mais il y a des <strong>V.O.I.L.E</strong> (Vision Obstruée Inhibant la Libre Évolution) qui freinent encore ton plein potentiel.</p>
        <p><strong>Les symptômes courants :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Parfois, tu ressens de la <strong>frustration</strong> ou un léger doute.</li>
          <li>Certaines actions nécessitent encore un <strong>effort conscient</strong>.</li>
          <li>Tu peux procrastiner sur des décisions importantes ou hésiter à passer à l’action.</li>
        </ul>
        <p><strong>Pourquoi ?</strong></p>
        <p>Ces <strong>blocages invisibles</strong> sont souvent le résultat de <strong>conditionnements externes</strong>, de <strong>peurs inconscientes</strong>, ou de <strong>croyances limitantes</strong> qui créent un ÉCART entre toi et ton véritable TELOS.</p>
        <p><strong>L’ÉCART : Échappatoire Conditionnée par des Attentes et des Réflexes Trompeurs</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Tu es parfois influencé(e) par les attentes des autres (famille, société, etc.).</li>
          <li>Tu peux croire que <strong>certains objectifs sont plus importants que ceux qui te motivent vraiment</strong>.</li>
          <li>Tu oscilles entre <strong>alignement et résistance</strong>, ce qui crée des <strong>symptômes comme la procrastination, le stress ou l’auto-sabotage</strong>.</li>
        </ul>
        <p><strong>Prochaine étape :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Quels sont les moments où tu ressens le plus de <strong>résistance</strong> dans ta vie ?</li>
          <li>Y a-t-il des tâches que tu <strong>reportes souvent</strong> ou que tu fais par obligation ?</li>
          <li>Quels sont les choix que tu fais pour <strong>plaire aux autres plutôt que pour toi-même</strong> ?</li>
        </ul>
        <p><strong>La clé : Lever ces V.O.I.L.E en reconnectant tes décisions à ton TELOS</strong>.</p>
       <p><strong>Si tu veux aller plus loin ou te faire accompagner dans ce voyage, tu as plusieurs choix :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Clique sur le lien suivant pour <a href="https://chat.whatsapp.com/KXxviUdZPBiKTG1X4PVr1B" className="text-blue-500 underline">rejoindre la communauté S.A.G.E et profiter de ce que je partage gratuitement à la communauté</a></li>
          <li>Ou bien envoi moi un email <a href="mailto:support@simochah.fr?subject=Demande%20d'information%20suite%20au%20test-quiz" className="text-blue-500 underline">en cliquant ici</a></li>
          <li>Ou bien envoie moi un DM sur Instagram <a href="https://ig.me/m/simochaah" className="text-blue-500 underline">en cliquant ici(@simochaah)</a></li>
          <li>Ou bien écris moi en privé sur WhatsApp <a href="https://chat.whatsapp.com/KXxviUdZPBiKTG1X4PVr1B" className="text-blue-500 underline">en cliquant ici</a></li>
        </ul>
        <h3 className="text-xl font-bold mt-6"> Conclusion : Écoute tes symptômes, aligne-toi à ton TELOS </h3>
        <p>Ce test n’est pas une finalité, mais un <strong>miroir</strong> de ton alignement actuel. Plus tu es proche de ton TELOS, plus tu ressens de la <strong>fluidité, de la motivation naturelle et un profond sentiment d’épanouissement</strong>.  </p>
        <p>Si ton score est inférieur à 30, il est temps d’agir ! Ne laisse pas les V.O.I.L.E et l’ÉCART saboter ton potentiel.  </p>
        <h3 className="text-xl font-bold mt-6">🚀 Reconnecte-toi à ton A.M.E et libère ton véritable potentiel dès maintenant !</h3>
      </div>
    );
  } else if (score >= 20) {
    return (
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-bold">🚧 Tu ressens des désalignements importants</h2>
        <p><strong>Ce que cela signifie :</strong></p>
        <p>Tu vis probablement une vie qui <strong>n'est pas totalement en phase avec ton TELOS</strong>, ce qui génère des <strong>symptômes visibles</strong> :</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Fatigue mentale ou physique</strong> (tu forces pour avancer).</li>
          <li><strong>Manque de motivation durable</strong> (tu as besoin de pression externe pour agir).</li>
          <li><strong>Procrastination fréquente</strong> sur des sujets importants.</li>
          <li><strong>Stress et confusion sur ton avenir</strong>.</li>
        </ul>
        <p><strong>Pourquoi ?</strong></p>
        <p>Tu es dans une <strong>zone de désalignement</strong>, ce qui signifie que tu passes trop de temps sur des tâches <strong>qui ne sont pas alignées avec tes priorités intrinsèques</strong>. En d’autres termes, ton énergie est absorbée par des choses qui ne résonnent pas avec <strong>ton essence profonde</strong>.</p>
        <p><strong>Les V.O.I.L.E les plus fréquents ici sont :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>L’illusion du positif et du négatif</strong> → Tu cherches inconsciemment à éviter la douleur et à courir après le plaisir immédiat.</li>
          <li><strong>La subordination aux attentes</strong> → Tu vis selon des modèles qui ne sont pas les tiens (ce que la société ou ta famille attend de toi).</li>
          <li><strong>Les peurs et conditionnements</strong> → Tu as peut-être peur d’échouer ou d’être jugé(e) si tu t’engages pleinement dans ta voie.</li>
        </ul>
        <p><strong>Prochaine étape :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Écoute tes symptômes</strong> : Quelles actions te fatiguent, t’ennuient ou te stressent ?</li>
          <li><strong>Observe ton énergie</strong> : À quels moments de la journée es-tu naturellement inspiré(e) ?</li>
          <li><strong>Déconstruis tes croyances</strong> : Quelles pensées limitantes te font croire que tu ne peux pas suivre ton TELOS ?</li>
        </ul>
        <p><strong>Si tu veux aller plus loin ou te faire accompagner dans ce voyage, tu as plusieurs choix :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Clique sur le lien suivant pour <a href="https://chat.whatsapp.com/KXxviUdZPBiKTG1X4PVr1B" className="text-blue-500 underline">rejoindre la communauté S.A.G.E et profiter de ce que je partage gratuitement à la communauté</a></li>
          <li>Ou bien envoi moi un email <a href="mailto:support@simochah.fr?subject=Demande%20d'information%20suite%20au%20test-quiz" className="text-blue-500 underline">en cliquant ici</a></li>
          <li>Ou bien envoie moi un DM sur Instagram <a href="https://ig.me/m/simochaah" className="text-blue-500 underline">en cliquant ici(@simochaah)</a></li>
          <li>Ou bien écris moi en privé sur WhatsApp <a href="https://chat.whatsapp.com/KXxviUdZPBiKTG1X4PVr1B" className="text-blue-500 underline">en cliquant ici</a></li>
        </ul>
        <h3 className="text-xl font-bold mt-6"> Conclusion : Écoute tes symptômes, aligne-toi à ton TELOS </h3>
        <p>Ce test n’est pas une finalité, mais un <strong>miroir</strong> de ton alignement actuel. Plus tu es proche de ton TELOS, plus tu ressens de la <strong>fluidité, de la motivation naturelle et un profond sentiment d’épanouissement</strong>.  </p>
        <p>Si ton score est inférieur à 30, il est temps d’agir ! Ne laisse pas les V.O.I.L.E et l’ÉCART saboter ton potentiel.  </p>
        <h3 className="text-xl font-bold mt-6">🚀 Reconnecte-toi à ton A.M.E et libère ton véritable potentiel dès maintenant !</h3>
      </div>
    );
  } else {
    return (
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-bold">❌ Alerte rouge ! Ton énergie est bloquée</h2>
        <p><strong>Ce que cela signifie :</strong></p>
        <p>Ton énergie est bloquée et tu forces peut-être dans la mauvaise direction. Il est essentiel de réajuster ton chemin pour éviter une crise existentielle et aligner tes actions quotidiennes à ton A.M.E. (Alignement de tes Motivations Essentielles).</p>
        <p>Tu es <strong>fortement désaligné(e)</strong> par rapport à ton TELOS, ce qui te place dans un état de <strong>frustration permanente, d’auto-sabotage ou d’apathie</strong>.</p>
        <p><strong>Les symptômes visibles :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Tu ressens un vide profond</strong> et un manque de sens dans tes actions.</li>
          <li><strong>Tu forces constamment</strong> pour avancer dans ta vie ou ton travail.</li>
          <li><strong>Tu dépends énormément de la motivation externe</strong> (coachings, vidéos, punitions, récompenses).</li>
          <li><strong>Tu ressens une lassitude chronique</strong> et peut-être même une forme d’anxiété ou de déprime.</li>
        </ul>
        <p><strong>Pourquoi ?</strong></p>
        <p>Tu es probablement en plein <strong>ÉCART</strong>. Tu t’accroches à des objectifs ou un mode de vie qui <strong>n’est pas le tien</strong>. <strong>Les V.O.I.L.E t’empêchent de voir clairement ce qui te correspond vraiment.</strong></p>
        <p><strong>L’ÉCART entraîne :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Des choix basés sur <strong>la peur du manque</strong> plutôt que sur l’inspiration.</li>
          <li>Une accumulation de <strong>croyances limitantes</strong> qui te maintiennent dans un cercle vicieux.</li>
          <li>Une perte de contact avec <strong>ton intuition et tes véritables priorités</strong>.</li>
        </ul>
        <p><strong>Prochaine étape :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>🔍 <strong>Identifie tes V.O.I.L.E et libère-toi de l’ÉCART</strong></li>
          <li><strong>Prends conscience de ce que tu fais uniquement par obligation.</strong></li>
          <li><strong>Note les moments où tu ressens un manque d’énergie ou une lourdeur intérieure.</strong></li>
          <li><strong>Accepte que certaines choses doivent changer pour retrouver ton A.M.E.</strong></li>
        </ul>
        <h3 className="text-xl font-bold mt-6">💡 Il est URGENT de lever tes blocages invisibles !</h3>
        <p><strong>Si tu veux aller plus loin ou te faire accompagner dans ce voyage, tu as plusieurs choix :</strong></p>
        <ul className="list-disc list-inside space-y-2">
          <li>Clique sur le lien suivant pour <a href="https://chat.whatsapp.com/KXxviUdZPBiKTG1X4PVr1B" className="text-blue-500 underline">rejoindre la communauté S.A.G.E et profiter de ce que je partage gratuitement à la communauté</a></li>
          <li>Ou bien envoie-moi un email <a href="mailto:support@simochah.fr?subject=Demande%20d'information%20suite%20au%20test-quiz" className="text-blue-500 underline">en cliquant ici</a></li>
          <li>Ou bien envoie-moi un DM sur Instagram <a href="https://ig.me/m/simochaah" className="text-blue-500 underline">en cliquant ici (@simochaah)</a></li>
          <li>Ou bien écris-moi en privé sur WhatsApp <a href="https://chat.whatsapp.com/KXxviUdZPBiKTG1X4PVr1B" className="text-blue-500 underline">en cliquant ici</a></li>
        </ul>
        <h3 className="text-xl font-bold mt-6"> Conclusion : Écoute tes symptômes, aligne-toi à ton TELOS </h3>
        <p>Ce test n’est pas une finalité, mais un <strong>miroir</strong> de ton alignement actuel. Plus tu es proche de ton TELOS, plus tu ressens de la <strong>fluidité, de la motivation naturelle et un profond sentiment d’épanouissement</strong>.</p>
        <p>Si ton score est inférieur à 30, il est temps d’agir ! Ne laisse pas les V.O.I.L.E et l’ÉCART saboter ton potentiel.</p>
        <h3 className="text-xl font-bold mt-6">🚀 Reconnecte-toi à ton A.M.E et libère ton véritable potentiel dès maintenant !</h3>
      </div>
    );
  }
};

export default function TelosAlignmentTest() {
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (value) => {
    setAnswers([...answers, value]);
    setScore(score + value);
    
    if (currentQuestion + 1 < sections[currentSection].questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection + 1 < sections.length) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      {!started ? (
        <Card>
          <CardContent className="p-6 text-center">
            {instructions}
            <Button className="mt-6 bg-[#C59849] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#C59849]/90 transition-colors" onClick={() => setStarted(true)}>
            J'ai compris les instructions et je suis prêt pour le test
            </Button>

          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            {finished ? (
              <div>
                <h2 className="text-xl font-bold">Résultats</h2>
                <p className="mt-4">{getRecommendation(score)}</p>
                <p className="mt-6 font-bold">🚀 Reconnecte-toi à ton A.M.E et libère ton véritable potentiel dès maintenant !</p>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-semibold">{sections[currentSection].title}</h2>
                <h3 className="text-md mt-2">{sections[currentSection].questions[currentQuestion]}</h3>
                <Progress value={((currentSection * sections[0].questions.length + currentQuestion) / (sections.length * sections[0].questions.length)) * 100} className="mt-4" />
                <div className="mt-6 space-y-2">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Button key={value} className="w-full" onClick={() => handleAnswer(value)}>
                      {value}
                    </Button>
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
