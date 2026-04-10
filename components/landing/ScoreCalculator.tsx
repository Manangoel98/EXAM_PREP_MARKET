"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp, Clock, Target, Share2, Check, Lightbulb } from "lucide-react";

export function ScoreCalculator() {
  const [currentScore, setCurrentScore] = useState<string>("1200");
  const [targetScore, setTargetScore] = useState<string>("1500");
  const [weeksAvailable, setWeeksAvailable] = useState<string>("12");
  const [showResults, setShowResults] = useState(false);

  const calculatePlan = () => {
    const current = parseInt(currentScore) || 1200;
    const target = parseInt(targetScore) || 1500;
    const weeks = parseInt(weeksAvailable) || 12;

    const improvement = target - current;
    const weeklyGoal = Math.ceil(improvement / weeks);

    // Based on NomoExam's +27% average improvement data
    const estimatedHoursPerWeek = Math.max(5, Math.ceil((improvement / 300) * 15));
    const totalHours = estimatedHoursPerWeek * weeks;

    // Practice questions needed (rough estimate: 50 questions per 10 points)
    const questionsNeeded = Math.ceil((improvement / 10) * 50);

    return {
      improvement,
      weeklyGoal,
      hoursPerWeek: estimatedHoursPerWeek,
      totalHours,
      questionsNeeded,
      feasibility: improvement / weeks <= 25 ? "Highly Achievable" : improvement / weeks <= 40 ? "Challenging but Possible" : "Very Ambitious"
    };
  };

  const results = showResults ? calculatePlan() : null;

  const handleShare = () => {
    const text = `My SAT goal: ${currentScore} → ${targetScore} in ${weeksAvailable} weeks with NomoExam`;
    if (navigator.share) {
      navigator.share({
        title: "My SAT Study Plan",
        text: text,
        url: window.location.origin
      });
    } else {
      navigator.clipboard.writeText(text + " " + window.location.origin);
      alert("Copied to clipboard!");
    }
  };

  return (
    <div className="bg-card border-2 border-primary/20 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-foreground">SAT Score Calculator</h3>
          <p className="text-sm text-muted-foreground">Calculate your personalized study plan</p>
        </div>
      </div>

      <div className="space-y-6 mb-6">
        {/* Current Score */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Current SAT Score
          </label>
          <input
            type="number"
            min="400"
            max="1600"
            step="10"
            value={currentScore}
            onChange={(e) => setCurrentScore(e.target.value)}
            className="w-full px-4 py-3 border-2 border-border focus:border-primary focus:outline-none text-lg bg-background"
            placeholder="1200"
          />
          <div className="flex justify-between mt-1 text-xs text-muted-foreground">
            <span>400</span>
            <span>1600</span>
          </div>
        </div>

        {/* Target Score */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Target SAT Score
          </label>
          <input
            type="number"
            min="400"
            max="1600"
            step="10"
            value={targetScore}
            onChange={(e) => setTargetScore(e.target.value)}
            className="w-full px-4 py-3 border-2 border-border focus:border-primary focus:outline-none text-lg bg-background"
            placeholder="1500"
          />
        </div>

        {/* Weeks Available */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Weeks Until Test Date
          </label>
          <input
            type="number"
            min="1"
            max="52"
            value={weeksAvailable}
            onChange={(e) => setWeeksAvailable(e.target.value)}
            className="w-full px-4 py-3 border-2 border-border focus:border-primary focus:outline-none text-lg bg-background"
            placeholder="12"
          />
        </div>
      </div>

      <Button
        size="lg"
        className="w-full gap-2 mb-6"
        onClick={() => setShowResults(true)}
      >
        Calculate My Study Plan <TrendingUp className="w-5 h-5" />
      </Button>

      {/* Results */}
      {showResults && results && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="bg-primary/10 border-2 border-primary/20 p-6">
            <div className="text-center mb-4">
              <div className="text-sm text-primary font-semibold mb-1">Your Score Improvement</div>
              <div className="text-4xl font-bold text-foreground">+{results.improvement} points</div>
              <div className="text-sm text-muted-foreground mt-1">{results.feasibility}</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-card p-4 text-center">
                <Target className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">+{results.weeklyGoal}</div>
                <div className="text-xs text-muted-foreground">points/week</div>
              </div>

              <div className="bg-card p-4 text-center">
                <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{results.hoursPerWeek}h</div>
                <div className="text-xs text-muted-foreground">per week</div>
              </div>
            </div>
          </div>

          <div className="bg-muted p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total Study Hours:</span>
              <span className="text-sm font-semibold text-foreground">{results.totalHours}h</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Practice Questions Needed:</span>
              <span className="text-sm font-semibold text-foreground">{results.questionsNeeded}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">NomoExam has:</span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                10,000+ questions
                <Check className="h-3.5 w-3.5 shrink-0" aria-hidden />
              </span>
            </div>
          </div>

          <div className="bg-accent/10 border border-primary/20 p-4">
            <p className="text-sm text-foreground mb-3">
              <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-900">
                <Lightbulb className="h-4 w-4 shrink-0 text-neutral-700" aria-hidden />
                Based on NomoExam data:
              </span>{" "}
              Students practicing {results.hoursPerWeek}h/week achieve an average +27% score improvement.
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="flex-1"
                onClick={() => window.location.href = '/pricing'}
              >
                Start My Plan
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleShare}
                className="gap-2"
              >
                <Share2 className="w-4 h-4" /> Share
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
