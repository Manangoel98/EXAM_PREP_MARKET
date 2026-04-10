"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Sparkles, ArrowRight, BookOpen, Lightbulb } from "lucide-react";

interface Question {
  id: number;
  type: "Math" | "Reading";
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  aiTip: string;
}

const demoQuestions: Question[] = [
  {
    id: 1,
    type: "Math",
    question: "If 3x + 5 = 20, what is the value of x?",
    options: ["3", "5", "7", "15"],
    correct: 1,
    explanation: "To solve for x, subtract 5 from both sides: 3x = 15. Then divide both sides by 3: x = 5.",
    aiTip: "When solving linear equations, always isolate the variable by performing inverse operations on both sides."
  },
  {
    id: 2,
    type: "Reading",
    question: "Which word best describes the author's tone in the passage about climate change?",
    options: ["Optimistic", "Alarmist", "Analytical", "Indifferent"],
    correct: 2,
    explanation: "The author presents data and evidence without emotional language, making the tone analytical rather than alarmist or optimistic.",
    aiTip: "Look for evidence-based language and objective phrasing to identify analytical tone in SAT reading passages."
  },
  {
    id: 3,
    type: "Math",
    question: "A square has an area of 64 square units. What is its perimeter?",
    options: ["16", "24", "32", "64"],
    correct: 2,
    explanation: "If area = 64, then side length = √64 = 8. Perimeter of a square = 4 × side = 4 × 8 = 32.",
    aiTip: "Remember: Area of square = s², so s = √Area. Then perimeter = 4s. Always work step-by-step."
  }
];

export function InteractiveDemo() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const question = demoQuestions[currentQuestion];

  const handleAnswer = (index: number) => {
    if (showExplanation) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === question.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < demoQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setCompleted(false);
    setScore(0);
  };

  if (completed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border-2 border-primary/20 p-8 md:p-12 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 mb-6">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Great Job! You scored {score}/{demoQuestions.length}
        </h3>
        <p className="text-lg text-muted-foreground mb-6">
          This was just a tiny preview. Get access to <span className="text-primary font-semibold">10,000+ questions</span> with AI explanations like these.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="gap-2"
            onClick={() => window.location.href = '/pricing'}
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleRestart}
          >
            Try Again
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-card border-2 border-primary/20 overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-muted p-4 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">
            Question {currentQuestion + 1} of {demoQuestions.length}
          </span>
          <span className="text-sm text-primary font-semibold">
            Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
          </span>
        </div>
        <div className="w-full bg-background border border-border h-2">
          <div
            className="bg-primary h-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / demoQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary">{question.type}</span>
        </div>

        <h3 className="text-xl md:text-2xl text-foreground mb-6">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correct;
            const showResult = showExplanation;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 border-2 transition-all ${
                  showResult && isCorrect
                    ? "border-green-500 bg-green-50"
                    : showResult && isSelected && !isCorrect
                    ? "border-red-500 bg-red-50"
                    : isSelected
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50 hover:bg-muted"
                } ${showExplanation ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-foreground">{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* AI Explanation */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-primary/5 border-2 border-primary/20 p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-semibold text-primary">AI Explanation</span>
              </div>
              <p className="text-foreground mb-4">{question.explanation}</p>
              <div className="bg-card border border-primary/20 p-4">
                <p className="flex gap-2 text-sm text-muted-foreground">
                  <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                  <span>
                    <span className="font-semibold text-neutral-900">Pro tip: </span>
                    {question.aiTip}
                  </span>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Button */}
        {showExplanation && (
          <Button
            size="lg"
            className="w-full gap-2"
            onClick={handleNext}
          >
            {currentQuestion < demoQuestions.length - 1 ? (
              <>Next Question <ArrowRight className="w-5 h-5" /></>
            ) : (
              <>See Results <ArrowRight className="w-5 h-5" /></>
            )}
          </Button>
        )}
      </div>
    </div>
  );
}
