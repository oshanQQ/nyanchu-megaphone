import React from 'react';

export default function Home() {
  return (
    <main className="antialiased sans-serif bg-gray-200 container mx-auto">
        />
      </div>

      <div className="text-center">
        <button className="w-60 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-md text-center text-gray bg-gray-50 hover:bg-gray-100 font-medium">
          変換に゛ゃ゛
        </button>
      </div>

      <div className="mb-5 center">
        <label htmlFor="output" className="font-bold mb-1 text-gray-700 block">
          出゛力゛だ゛に゛ゃ゛ぁ゛
        </label>
        <textarea
          id="output"
          className="form-textarea w-full px-4 py-3 h-24 test-center rounded-lg shadow-md focus:outline-none focus:ring-2 resize-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="お゛お゛お゛お゛お゛ん゛"
        />
    </main>
  );
}
