import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#fcfaf7] text-[#24211e]">
      <div className="max-w-sm w-full text-center space-y-4">
        <h1 className="text-xl font-serif text-[#24211e]">Gift not found</h1>
        <p className="text-sm text-[#787167]">
          This link may have expired or may be incorrect. Please verify the URL you were sent.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="text-xs text-[#8c6239] hover:underline"
          >
            Return to home
          </Link>
        </div>
      </div>
    </main>
  );
}
