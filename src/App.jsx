import { useState, useEffect, useCallback, useMemo } from "react";
import questions from "./questions";

const domainColors = {
  "Responsible AI": { bg: "bg-red-50", border: "border-red-300", badge: "bg-red-100 text-red-800", accent: "bg-red-500", ring: "ring-red-200" },
  "Plans & Features": { bg: "bg-blue-50", border: "border-blue-300", badge: "bg-blue-100 text-blue-800", accent: "bg-blue-500", ring: "ring-blue-200" },
  "Data Handling": { bg: "bg-purple-50", border: "border-purple-300", badge: "bg-purple-100 text-purple-800", accent: "bg-purple-500", ring: "ring-purple-200" },
  "Prompt Engineering": { bg: "bg-amber-50", border: "border-amber-300", badge: "bg-amber-100 text-amber-800", accent: "bg-amber-500", ring: "ring-amber-200" },
  "Copilot Chat": { bg: "bg-green-50", border: "border-green-300", badge: "bg-green-100 text-green-800", accent: "bg-green-500", ring: "ring-green-200" },
  "Testing": { bg: "bg-cyan-50", border: "border-cyan-300", badge: "bg-cyan-100 text-cyan-800", accent: "bg-cyan-500", ring: "ring-cyan-200" },
  "Privacy & Exclusions": { bg: "bg-orange-50", border: "border-orange-300", badge: "bg-orange-100 text-orange-800", accent: "bg-orange-500", ring: "ring-orange-200" },
};

const domains = [...new Set(questions.map((q) => q.domain))];
const LETTERS = ["A", "B", "C", "D"];

// Views
const VIEW_STUDY = "study";
const VIEW_EXAM = "exam";
const VIEW_RESULTS = "results";

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Study Mode Card ───
function StudyCard({ card, onNext, onPrev, index, total }) {
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const colors = domainColors[card.domain];

  useEffect(() => {
    setSelected(null);
    setRevealed(false);
  }, [card.id]);

  const handleSelect = (i) => {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
  };

  return (
    <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} overflow-hidden shadow-sm`}>
      {/* Header */}
      <div className="px-5 pt-4 pb-3 flex justify-between items-center">
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
          {card.domain}
        </span>
        <span className="text-xs text-gray-400 font-medium">{index + 1} / {total}</span>
      </div>

      {/* Question */}
      <div className="px-5 pb-4">
        <p className="text-gray-900 font-medium text-base leading-relaxed">{card.question}</p>
      </div>

      {/* Options */}
      <div className="px-5 pb-4 space-y-2">
        {card.options.map((opt, i) => {
          const isCorrect = i === card.correct;
          const isSelected = i === selected;
          let optStyle = "bg-white border-gray-200 hover:border-gray-400 cursor-pointer";

          if (revealed) {
            if (isCorrect) optStyle = "bg-green-50 border-green-400 ring-1 ring-green-200";
            else if (isSelected && !isCorrect) optStyle = "bg-red-50 border-red-400 ring-1 ring-red-200";
            else optStyle = "bg-gray-50 border-gray-200 opacity-60";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ${optStyle}`}
            >
              <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                revealed && isCorrect ? "bg-green-500 text-white" :
                revealed && isSelected && !isCorrect ? "bg-red-500 text-white" :
                "bg-gray-100 text-gray-600"
              }`}>
                {revealed && isCorrect ? "✓" : revealed && isSelected && !isCorrect ? "✗" : LETTERS[i]}
              </span>
              <span className="text-sm text-gray-700 leading-relaxed pt-0.5">{opt}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {revealed && (
        <div className="mx-5 mb-4 px-4 py-3 bg-white/70 border border-gray-200 rounded-xl">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Explanation</p>
          <p className="text-sm text-gray-700 leading-relaxed">{card.explanation}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="px-5 pb-4 flex gap-2">
        <button onClick={onPrev} className="flex-1 py-2.5 rounded-xl bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
          ← Previous
        </button>
        <button onClick={onNext} className="flex-1 py-2.5 rounded-xl bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition">
          Next →
        </button>
      </div>
    </div>
  );
}

// ─── Exam Mode Card ───
function ExamCard({ card, index, total, selectedAnswer, onSelect }) {
  const colors = domainColors[card.domain];

  return (
    <div className={`rounded-2xl border-2 ${colors.border} ${colors.bg} overflow-hidden shadow-sm`}>
      <div className="px-5 pt-4 pb-3 flex justify-between items-center">
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>{card.domain}</span>
        <span className="text-xs text-gray-400 font-medium">Q{index + 1} / {total}</span>
      </div>
      <div className="px-5 pb-4">
        <p className="text-gray-900 font-medium text-base leading-relaxed">{card.question}</p>
      </div>
      <div className="px-5 pb-5 space-y-2">
        {card.options.map((opt, i) => {
          const isSelected = selectedAnswer === i;
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ${
                isSelected
                  ? `bg-white ${colors.border} ring-2 ${colors.ring}`
                  : "bg-white border-gray-200 hover:border-gray-400"
              } cursor-pointer`}
            >
              <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                isSelected ? `${colors.accent} text-white` : "bg-gray-100 text-gray-600"
              }`}>
                {LETTERS[i]}
              </span>
              <span className="text-sm text-gray-700 leading-relaxed pt-0.5">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Results Review Card ───
function ReviewCard({ card, userAnswer }) {
  const colors = domainColors[card.domain];
  const isCorrect = userAnswer === card.correct;

  return (
    <div className={`rounded-2xl border-2 ${isCorrect ? "border-green-300 bg-green-50/50" : "border-red-300 bg-red-50/50"} overflow-hidden`}>
      <div className="px-5 pt-4 pb-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>{card.domain}</span>
          <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${isCorrect ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
            {isCorrect ? "CORRECT" : "INCORRECT"}
          </span>
        </div>
      </div>
      <div className="px-5 pb-3">
        <p className="text-gray-900 font-medium text-sm leading-relaxed">{card.question}</p>
      </div>
      <div className="px-5 pb-3 space-y-1.5">
        {card.options.map((opt, i) => {
          const isRight = i === card.correct;
          const wasChosen = i === userAnswer;
          let style = "bg-white/50 border-gray-200 opacity-50";
          if (isRight) style = "bg-green-50 border-green-400";
          else if (wasChosen && !isRight) style = "bg-red-50 border-red-400";

          return (
            <div key={i} className={`px-3 py-2 rounded-lg border text-sm flex items-start gap-2 ${style}`}>
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                isRight ? "bg-green-500 text-white" : wasChosen ? "bg-red-500 text-white" : "bg-gray-100 text-gray-500"
              }`}>
                {isRight ? "✓" : wasChosen ? "✗" : LETTERS[i]}
              </span>
              <span className="text-gray-700 pt-0.5">{opt}</span>
            </div>
          );
        })}
      </div>
      <div className="mx-5 mb-4 px-3 py-2 bg-white/70 border border-gray-200 rounded-lg">
        <p className="text-xs text-gray-600 leading-relaxed">{card.explanation}</p>
      </div>
    </div>
  );
}

// ─── Main App ───
export default function App() {
  const [view, setView] = useState(VIEW_STUDY);
  const [studyCards, setStudyCards] = useState(questions);
  const [studyIndex, setStudyIndex] = useState(0);
  const [filterDomain, setFilterDomain] = useState("All");

  // Exam state
  const [examCards, setExamCards] = useState([]);
  const [examIndex, setExamIndex] = useState(0);
  const [examAnswers, setExamAnswers] = useState({});
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examNumQuestions, setExamNumQuestions] = useState(25);
  const [showExamSetup, setShowExamSetup] = useState(false);

  // Stats
  const [studyStats, setStudyStats] = useState({});

  const filteredStudy = useMemo(
    () => studyCards.filter((c) => filterDomain === "All" || c.domain === filterDomain),
    [studyCards, filterDomain]
  );

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e) => {
      if (view === VIEW_STUDY) {
        if (e.key === "ArrowRight") setStudyIndex((i) => (i + 1) % filteredStudy.length);
        if (e.key === "ArrowLeft") setStudyIndex((i) => (i - 1 + filteredStudy.length) % filteredStudy.length);
      }
      if (view === VIEW_EXAM && !examSubmitted) {
        if (e.key === "ArrowRight") setExamIndex((i) => Math.min(i + 1, examCards.length - 1));
        if (e.key === "ArrowLeft") setExamIndex((i) => Math.max(i - 1, 0));
        if (["1", "2", "3", "4"].includes(e.key)) {
          setExamAnswers((prev) => ({ ...prev, [examCards[examIndex].id]: parseInt(e.key) - 1 }));
        }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [view, filteredStudy.length, examCards, examIndex, examSubmitted]);

  const shuffleStudy = () => {
    setStudyCards(shuffleArray(questions));
    setStudyIndex(0);
  };

  const startExam = () => {
    const shuffled = shuffleArray(questions).slice(0, examNumQuestions);
    setExamCards(shuffled);
    setExamIndex(0);
    setExamAnswers({});
    setExamSubmitted(false);
    setShowExamSetup(false);
    setView(VIEW_EXAM);
  };

  const submitExam = () => {
    setExamSubmitted(true);
    setView(VIEW_RESULTS);
  };

  const examScore = useMemo(() => {
    if (!examSubmitted) return { correct: 0, total: 0, pct: 0 };
    let correct = 0;
    examCards.forEach((card) => {
      if (examAnswers[card.id] === card.correct) correct++;
    });
    return { correct, total: examCards.length, pct: Math.round((correct / examCards.length) * 100) };
  }, [examSubmitted, examCards, examAnswers]);

  const domainScores = useMemo(() => {
    if (!examSubmitted) return [];
    return domains.map((d) => {
      const domainCards = examCards.filter((c) => c.domain === d);
      if (domainCards.length === 0) return null;
      const correct = domainCards.filter((c) => examAnswers[c.id] === c.correct).length;
      return { domain: d, correct, total: domainCards.length, pct: Math.round((correct / domainCards.length) * 100) };
    }).filter(Boolean);
  }, [examSubmitted, examCards, examAnswers]);

  const answeredCount = Object.keys(examAnswers).length;
  const passingScore = 70;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-sm font-bold text-gray-900 leading-tight">GH-300 Practice Exam</h1>
              <p className="text-xs text-gray-400">GitHub Copilot Certification</p>
            </div>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setView(VIEW_STUDY)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                view === VIEW_STUDY ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Study
            </button>
            <button
              onClick={() => { setShowExamSetup(true); setView(VIEW_EXAM); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                view === VIEW_EXAM || view === VIEW_RESULTS ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Exam
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-5">
        {/* ─── STUDY MODE ─── */}
        {view === VIEW_STUDY && (
          <>
            {/* Controls */}
            <div className="flex flex-wrap gap-2 mb-4">
              <select
                value={filterDomain}
                onChange={(e) => { setFilterDomain(e.target.value); setStudyIndex(0); }}
                className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="All">All Domains ({questions.length})</option>
                {domains.map((d) => (
                  <option key={d} value={d}>{d} ({questions.filter((q) => q.domain === d).length})</option>
                ))}
              </select>
              <button onClick={shuffleStudy} className="text-sm px-3 py-1.5 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 transition ml-auto">
                Shuffle
              </button>
            </div>

            {/* Progress dots */}
            <div className="flex flex-wrap gap-1 mb-4">
              {filteredStudy.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setStudyIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === studyIndex ? "bg-gray-900 scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            {filteredStudy.length > 0 && (
              <StudyCard
                card={filteredStudy[studyIndex]}
                index={studyIndex}
                total={filteredStudy.length}
                onNext={() => setStudyIndex((i) => (i + 1) % filteredStudy.length)}
                onPrev={() => setStudyIndex((i) => (i - 1 + filteredStudy.length) % filteredStudy.length)}
              />
            )}

            <div className="mt-4 text-center text-xs text-gray-400">
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-500 font-mono">←</kbd> Previous
              <span className="mx-2">·</span>
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-500 font-mono">→</kbd> Next
            </div>
          </>
        )}

        {/* ─── EXAM SETUP ─── */}
        {view === VIEW_EXAM && (showExamSetup || examCards.length === 0) && (
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mt-4">
            <div className="text-center mb-6">
              <div className="w-14 h-14 mx-auto mb-3 bg-gray-900 rounded-2xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-1">Practice Exam</h2>
              <p className="text-sm text-gray-500">Simulate the real GH-300 exam experience</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of questions</label>
                <div className="flex gap-2">
                  {[10, 25, 50].map((n) => (
                    <button
                      key={n}
                      onClick={() => setExamNumQuestions(n)}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-medium border-2 transition ${
                        examNumQuestions === n
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-200 bg-white text-gray-600 hover:border-gray-400"
                      }`}
                    >
                      {n} questions
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600 space-y-1">
                <p>• Questions are randomized each attempt</p>
                <p>• Passing score: <strong>70%</strong></p>
                <p>• Review all answers after submission</p>
                <p>• Use number keys <kbd className="px-1 py-0.5 bg-gray-200 rounded text-xs font-mono">1-4</kbd> to select answers</p>
              </div>
            </div>

            <button onClick={startExam} className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition text-sm">
              Start Exam
            </button>
          </div>
        )}

        {/* ─── EXAM IN PROGRESS ─── */}
        {view === VIEW_EXAM && !showExamSetup && examCards.length > 0 && !examSubmitted && (
          <>
            {/* Progress bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>{answeredCount} of {examCards.length} answered</span>
                <span>{Math.round((answeredCount / examCards.length) * 100)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gray-900 rounded-full transition-all duration-300" style={{ width: `${(answeredCount / examCards.length) * 100}%` }} />
              </div>
            </div>

            {/* Question grid */}
            <div className="flex flex-wrap gap-1 mb-4">
              {examCards.map((card, i) => (
                <button
                  key={card.id}
                  onClick={() => setExamIndex(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-medium transition flex items-center justify-center ${
                    i === examIndex
                      ? "bg-gray-900 text-white"
                      : examAnswers[card.id] !== undefined
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-white text-gray-500 border border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <ExamCard
              card={examCards[examIndex]}
              index={examIndex}
              total={examCards.length}
              selectedAnswer={examAnswers[examCards[examIndex].id]}
              onSelect={(i) => setExamAnswers((prev) => ({ ...prev, [examCards[examIndex].id]: i }))}
            />

            {/* Nav + Submit */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setExamIndex((i) => Math.max(i - 1, 0))}
                disabled={examIndex === 0}
                className="flex-1 py-2.5 rounded-xl bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition disabled:opacity-40"
              >
                ← Previous
              </button>
              {examIndex < examCards.length - 1 ? (
                <button
                  onClick={() => setExamIndex((i) => i + 1)}
                  className="flex-1 py-2.5 rounded-xl bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition"
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={submitExam}
                  className="flex-1 py-2.5 rounded-xl bg-green-600 text-sm font-medium text-white hover:bg-green-700 transition"
                >
                  Submit Exam ({answeredCount}/{examCards.length})
                </button>
              )}
            </div>
          </>
        )}

        {/* ─── RESULTS ─── */}
        {view === VIEW_RESULTS && examSubmitted && (
          <>
            {/* Score Card */}
            <div className={`rounded-2xl border-2 p-6 text-center mb-6 ${
              examScore.pct >= passingScore ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"
            }`}>
              <div className={`text-5xl font-bold mb-1 ${examScore.pct >= passingScore ? "text-green-700" : "text-red-700"}`}>
                {examScore.pct}%
              </div>
              <div className="text-sm text-gray-600 mb-3">
                {examScore.correct} of {examScore.total} correct
              </div>
              <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${
                examScore.pct >= passingScore ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
              }`}>
                {examScore.pct >= passingScore ? "PASS" : "NEEDS MORE STUDY"}
              </div>
            </div>

            {/* Domain Breakdown */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Score by Domain</h3>
              <div className="space-y-2.5">
                {domainScores.map(({ domain, correct, total, pct }) => {
                  const c = domainColors[domain];
                  return (
                    <div key={domain}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className={`px-2 py-0.5 rounded-full font-medium ${c.badge}`}>{domain}</span>
                        <span className="text-gray-500">{correct}/{total} ({pct}%)</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all duration-700 ${pct >= passingScore ? "bg-green-500" : "bg-red-400"}`} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mb-6">
              <button onClick={() => { setShowExamSetup(true); setView(VIEW_EXAM); }} className="flex-1 py-2.5 rounded-xl bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition">
                Retake Exam
              </button>
              <button onClick={() => setView(VIEW_STUDY)} className="flex-1 py-2.5 rounded-xl bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                Study Mode
              </button>
            </div>

            {/* Review All */}
            <h3 className="text-sm font-bold text-gray-900 mb-3">Review All Questions</h3>
            <div className="space-y-3">
              {examCards.map((card, i) => (
                <ReviewCard key={card.id} card={card} userAnswer={examAnswers[card.id]} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-gray-400">
        GH-300 GitHub Copilot Certification Practice Exam · 50 Questions · 7 Domains
      </div>
    </div>
  );
}
