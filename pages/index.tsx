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
        <NormalButton
          onClick={() => setOutputValue(inputValue)}
        >
          変換に゛ゃ゛
        </NormalButton>
      <TextField
        label="出゛力゛だ゛に゛ゃ゛ぁ゛"
        placeholder="お゛お゛お゛お゛お゛ん゛"
        value={outputValue}
      />
        <NormalButton>コ゛ピ゛ー゛</NormalButton>
        <TweetButton>T゛w゛e゛e゛t゛</TweetButton>
    </main>
  );
}
