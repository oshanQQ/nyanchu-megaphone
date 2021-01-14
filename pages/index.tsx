import React from 'react';

export default function Home() {
  return (
    <body className="antialiased sans-serif bg-gray-200 container mx-auto">
      <h1 className="text-6xl font-black p-10 text-gray-700 text-center">
        ニャンちゅうメガホン
      </h1>

      <div className="mb-5 center">
        <label htmlFor="input" className="font-bold mb-1 text-gray-700 block">
          テキストを入力するに゛ゃ゛
        </label>
        <textarea
          id="input"
          className="form-textarea w-full px-4 py-3 h-24 test-center rounded-lg shadow-md focus:outline-none focus:ring-2 resize-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="み゛ゃ゛ーの金言だに゛ゃ゛"
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
      </div>

      <div className="text-center">
        <button className="w-60 focus:outline-none border border-transparent py-2 px-5 m-2 rounded-lg shadow-md text-center text-gray bg-gray-50 hover:bg-gray-100 font-medium">
          コ゛ピ゛ー゛
        </button>
      </div>

      <div className="text-center">
        <button className="w-60 focus:outline-none border border-transparent py-2 px-5 m-2 rounded-lg shadow-md text-center text-white bg-blue-400 hover:bg-blue-500 font-medium">
          T゛w゛e゛e゛t゛
        </button>
      </div>
    </body>
  );
}
