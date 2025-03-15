import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const instructions = (
  <div className="text-center">
    <h1 className="text-2xl font-bold">🔥 Test de Désalignement Rapide 🔥</h1>
    <p className="text-sm italic mt-4">
      Ce test est conçu pour aider coachs, thérapeutes, et entrepreneurs à identifier leurs blocages invisibles.
    </p>
    <p className="mt-4">Réponds spontanément aux affirmations avec une note de 1 à 5.</p>
  </div>
);

const sections = [
  { title: "🚀 Clarté et Mission", questions: ["Je me lève avec clarté absolue.", "Mon travail me passionne."] },
  { title: "💰 Motivation et Procrastination", questions: ["Je ne ressens pas le besoin de forcer.", "Je ne repousse jamais des tâches importantes."] }
];

const getRecommendation = (score) => {
  return score >= 10 ? (
    <p>🎯 Tu es aligné(e) avec ton TELOS ! Continue ainsi.</p>
  ) : (
    <p>⚠️ Il semble y avoir des blocages. Travaille sur ton alignement.</p>
  );
};

export default function TelosAlignmentTest() {
  const [started, setStarted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (value) => {
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
            <Button className="mt-6" onClick={() => setStarted(true)}>Commencer</Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            {finished ? (
              <div>
                <h2 className="text-xl font-bold">Résultat</h2>
                <p className="mt-4">{getRecommendation(score)}</p>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-semibold">{sections[currentSection].title}</h2>
                <h3 className="text-md mt-2">{sections[currentSection].questions[currentQuestion]}</h3>
                <Progress value={(currentQuestion + 1) * 50} className="mt-4" />
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
