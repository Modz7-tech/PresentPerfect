import Link from 'next/link';
import { ArrowRight, Gift, PenLine, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gift-bg text-gift-text">
      <div className="max-w-2xl w-full text-center space-y-7 p-7 sm:p-12 rounded-2xl bg-gift-surface border border-gift-border shadow-sm">
        <div className="w-14 h-14 rounded-full bg-gift-surface-alt border border-gift-border text-gift-accent flex items-center justify-center mx-auto">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="space-y-3">
          <p className="font-mono text-[10px] text-gift-accent tracking-[.22em] uppercase">A PERSONAL DIGITAL GIFT</p>
          <h1 className="text-4xl sm:text-5xl font-light font-serif tracking-tight text-gift-text leading-tight">A Little Something</h1>
          <p className="text-sm text-gift-muted leading-relaxed max-w-md mx-auto">Welcome. Choose how you’d like to enter.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 pt-2 text-left">
          <Link href="/create" className="group min-h-44 p-6 rounded-xl border border-gift-border bg-gift-surface-alt hover:border-gift-accent transition-colors flex flex-col">
            <PenLine className="w-6 h-6 mb-5 text-gift-accent" />
            <span className="font-serif text-2xl">I’m creating a gift</span>
            <span className="text-xs text-gift-muted leading-relaxed mt-2">Build a personal experience and create a private link to share.</span>
            <span className="mt-auto pt-5 text-xs font-medium flex items-center gap-2">Enter creator studio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
          </Link>
          <Link href="/g/8xK92m" className="group min-h-44 p-6 rounded-xl border border-gift-border bg-gift-surface-alt hover:border-gift-accent transition-colors flex flex-col">
            <Gift className="w-6 h-6 mb-5 text-gift-accent" />
            <span className="font-serif text-2xl">I’ve received a gift</span>
            <span className="text-xs text-gift-muted leading-relaxed mt-2">Open the sample experience, or use the private link the sender gave you.</span>
            <span className="mt-auto pt-5 text-xs font-medium flex items-center gap-2">Open recipient experience <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
          </Link>
        </div>
        <p className="text-[10px] font-mono tracking-wider text-gift-muted/70">Recipients should open their unique gift link for their own personalized experience.</p>
      </div>
    </main>
  );
}
