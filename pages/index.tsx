import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1>Welcome to the Quiz App</h1>
      <Link href="/quiz">
        <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer">
          Start Quiz
        </div>
      </Link>
    </div>
  );
}
