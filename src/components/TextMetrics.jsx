
import React from 'react';

const TextMetrics = ({ text }) => {
  const calculateMetrics = () => {
    const charCount = text.length;
    const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;
    const sentenceCount = text.split('.').length - 1;
    const paragraphCount = text.split('\n').length - 1;
    const spaceCount = text.split(' ').length - 1;
    const punctuationCount = text.replace(/[^\.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').length;

    return {
      charCount,
      wordCount,
      sentenceCount,
      paragraphCount,
      spaceCount,
      punctuationCount,
    };
  };

  const metrics = calculateMetrics();

  return (
    <div>
      <h3>Metrics:</h3>
      <ul>
        <li>Number of Characters: {metrics.charCount}</li>
        <li>Number of Words: {metrics.wordCount}</li>
        <li>Number of Sentences: {metrics.sentenceCount}</li>
        <li>Number of Paragraphs: {metrics.paragraphCount}</li>
        <li>Number of Spaces: {metrics.spaceCount}</li>
        <li>Number of Punctuations: {metrics.punctuationCount}</li>
      </ul>
    </div>
  );
};

export default TextMetrics;
