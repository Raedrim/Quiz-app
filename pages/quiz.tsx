import { useState } from 'react';

export default function Quiz() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl text-center">Welcome to the Quiz!</h1>
      <div className="text-center mt-8">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={handleButtonClick}
        >
          Press Me!
        </button>
        <p className="mt-4">You pressed the button {count} times</p>
      </div>
    </div>
  );
}
