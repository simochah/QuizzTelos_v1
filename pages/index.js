import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

const instructions = (
  <div className="text-center">
    <h1 className="text-2xl font-bold">🔥 Test de Désalignement Rapide – Découvre en 5 minutes si tu es aligné avec ton TELOS et ce qui te bloque vraiment 🔥</h1>
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

const sections = [...] // Keep the sections as they were

const getRecommendation = (score) => { ... } // Keep the recommendation logic as it was

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
            <Button className="mt-6" onClick={() => setStarted(true)}>
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
