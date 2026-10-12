'use client';
import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { StagePlayfulContent } from '@/types/gift';
import { usePresentation } from '../../presentation/ThemeProvider';

export interface PersonalityAnswer { questionId: string; optionId: string; label: string; }

const FALLBACK_QUESTIONS = [
  { id: 'q1', prompt: 'Choose your truth.', subtitle: 'When plans suddenly disappear, what is your first reaction?', options: [
    { id: 'a', label: 'Finally. An evening with absolutely no obligations.', response: 'The cancelled-plan glow is real.' },
    { id: 'b', label: 'Wait… but I had already mentally prepared for it.', response: 'A carefully constructed plan deserves its moment.' },
    { id: 'c', label: 'Depends. I may immediately invent a better plan.', response: 'Spontaneous energy detected.' },
  ]},
  { id: 'q2', prompt: 'A tiny window into your brain.', subtitle: 'What kind of compliment actually stays with you?', options: [
    { id: 'a', label: 'You make people feel comfortable being themselves.', response: 'That says a lot about what you value.' },
    { id: 'b', label: 'You are ridiculously good at what you do.', response: 'Quiet competence is hard to fake.' },
    { id: 'c', label: 'You make ordinary things more fun.', response: 'You notice atmosphere, not just outcomes.' },
  ]},
  { id: 'q3', prompt: 'Pick the kind of memory you would keep.', subtitle: 'If you could preserve one ordinary moment forever…', options: [
    { id: 'a', label: 'A late-night conversation that went nowhere and everywhere.', response: 'You remember connection.' },
    { id: 'b', label: 'A completely stupid moment that still makes you laugh.', response: 'You remember joy.' },
    { id: 'c', label: 'A quiet place where you felt completely at peace.', response: 'You remember feeling.' },
  ]},
  { id: 'q4', prompt: 'Last one. No overthinking.', subtitle: 'Which future sounds most like you?', options: [
    { id: 'a', label: 'A life full of stories I can’t believe actually happened.', response: 'Curiosity wins.' },
    { id: 'b', label: 'A life that feels calm, meaningful and very much mine.', response: 'Depth wins.' },
    { id: 'c', label: 'A life where the people I love are doing well too.', response: 'People matter to you.' },
  ]},
];

export function Stage3Playful({ content, onNext, onShareAnswers }: { content: StagePlayfulContent; onNext: () => void; onShareAnswers?: (answers: PersonalityAnswer[]) => Promise<void> }) {
  const { headingClass, monoClass, handClass } = usePresentation();
  const questions = useMemo(() => content.questions?.length ? content.questions : FALLBACK_QUESTIONS, [content.questions]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<PersonalityAnswer[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [sharing, setSharing] = useState(false);
  const [shared, setShared] = useState(false);
  const [shareError, setShareError] = useState(false);
  const question = questions[questionIndex];
  const complete = questionIndex === questions.length - 1 && !!selected;
  const currentOption = question?.options.find(option => option.id === selected);

  const choose = (optionId: string) => {
    if (selected) return;
    const option = question.options.find(item => item.id === optionId);
    if (!option) return;
    setSelected(optionId);
    setAnswers(prev => [...prev.filter(item => item.questionId !== question.id), { questionId: question.id, optionId, label: option.label }]);
  };

  const nextQuestion = () => {
    if (!selected) return;
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(i => i + 1);
      setSelected(null);
      return;
    }
    onNext();
  };

  const share = async () => {
    if (!onShareAnswers || !answers.length) return;
    setSharing(true); setShareError(false);
    try { await onShareAnswers(answers); setShared(true); } catch { setShareError(true); } finally { setSharing(false); }
  };

  return (
    <section className="stage-three">
      <div className="playful-top"><span className={monoClass}>03 / CHOOSE YOUR TRUTH</span><span className={handClass}>a tiny personality study</span></div>
      <div className="quiz-progress"><span>{String(questionIndex + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}</span><div>{questions.map((_, i) => <i key={i} className={i < questionIndex || (i === questionIndex && selected) ? 'done' : i === questionIndex ? 'current' : ''} />)}</div></div>
      <div className="playful-composition quiz-composition">
        <div className="playful-title">
          <p className={monoClass}>QUESTION {String(questionIndex + 1).padStart(2, '0')}</p>
          <AnimatePresence mode="wait">
            <motion.div key={question.id} initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -18 }} transition={{ duration: .42 }}>
              <h1 className={headingClass}>{question.prompt}</h1><p>{question.subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="option-field quiz-options">
          {question.options.map((option, i) => {
            const active = selected === option.id;
            return <motion.button key={option.id} className={`floating-option option-${i + 1} ${active ? 'is-active' : ''}`} onClick={() => choose(option.id)} whileHover={!selected ? { scale: 1.035, rotate: i % 2 ? -1 : 1, x: 4 } : undefined} whileTap={!selected ? { scale: .98 } : undefined}>
              <span className="option-number">0{i + 1}</span><span>{option.label}</span><span className="option-mark">{active ? <Check size={16}/> : '↗'}</span>
            </motion.button>;
          })}
          <div className="playful-orbit" /><div className="playful-star">✦</div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selected && currentOption && <motion.div key={`${question.id}-${selected}`} className="selected-response" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <span className={monoClass}>OBSERVATION ACCEPTED</span>
          <p>{currentOption.response}</p>
          <div className="quiz-actions">
            <button className="artifact-action dark-action" onClick={nextQuestion}><span>{complete ? 'reveal the pattern' : 'next question'}</span><ArrowRight size={14}/></button>
            <span className="quiz-microcopy">Nothing here is scored. Just curious.</span>
          </div>
        </motion.div>}
      </AnimatePresence>

      {complete && onShareAnswers && <motion.div className="answer-share" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <div><Sparkles size={15}/><span><strong>Want to share your answers?</strong><small>Only if you want to. They can be used to make the person who made this smile.</small></span></div>
        <button type="button" onClick={share} disabled={sharing || shared}>{shared ? 'sent ✓' : sharing ? 'sending…' : shareError ? 'try again' : 'send my answers'}</button>
      </motion.div>}
    </section>
  );
}
