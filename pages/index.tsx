import React from 'react';

export default function Home() {
  return (
    <main className="antialiased sans-serif bg-gray-200 container mx-auto">
      <Title>ニャンちゅうメガホン</Title>
      <TextField
        label="テキストを入力するに゛ゃ゛"
        placeholder="み゛ゃ゛ーの金言だに゛ゃ゛"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      </div>

      <div className="text-center">
        <button className="w-60 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-md text-center text-gray bg-gray-50 hover:bg-gray-100 font-medium">
          変換に゛ゃ゛
      <TextField
        label="出゛力゛だ゛に゛ゃ゛ぁ゛"
        placeholder="お゛お゛お゛お゛お゛ん゛"
        value={outputValue}
      />
    </main>
  );
}
