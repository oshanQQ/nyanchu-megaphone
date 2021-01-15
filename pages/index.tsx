import React, { useState } from 'react';
import { CenteringBox } from '../components/CenteringBox';
import { NormalButton } from '../components/NormalButton';
import { TextField } from '../components/TextField';
import { Title } from '../components/Title';
import { TweetButton } from '../components/TweetButton';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  return (
    <main className="antialiased sans-serif container mx-auto">
      <Title>ニャンちゅうメガホン</Title>
      <TextField
        label="テキストを入力するに゛ゃ゛"
        placeholder="み゛ゃ゛ーの金言だに゛ゃ゛"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <CenteringBox>
        <NormalButton
          onClick={() =>
            setOutputValue(inputValue.split('').join('゛') + '゛')
          }>
          変換に゛ゃ゛
        </NormalButton>
      </CenteringBox>
      <TextField
        label="出゛力゛だ゛に゛ゃ゛ぁ゛"
        placeholder="お゛お゛お゛お゛お゛ん゛"
        value={outputValue}
      />
      <CenteringBox>
        <NormalButton>コ゛ピ゛ー゛</NormalButton>
      </CenteringBox>
      <CenteringBox>
        <TweetButton>T゛w゛e゛e゛t゛</TweetButton>
      </CenteringBox>
    </main>
  );
}
