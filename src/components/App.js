import React, { useState } from 'react';
import TopQuotes from '../containers/quotes/TopQuotes';
import { userInfo } from 'os';

export default function App() {
  const [quote, updateQuote] = useState('top');

  return (
    <>
      <TopQuotes />
    </>
  );
}
