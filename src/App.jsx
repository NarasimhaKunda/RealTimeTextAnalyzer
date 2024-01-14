import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import TextMetrics from "./components/TextMetrics";
import WordDetails from "./components/WordDetails";

const App = () => {
  const [text, setText] = useState("");
  const [wordDetails, setWordDetails] = useState(null);

  useEffect(() => {
    const fetchWordDetails = async (word) => {
      try {
        const response = await axios.get(
          `https://www.wordsapi.com/mashape/words/${word}`
        );
        const data = response.data;
        if (data && data.results && data.results.length > 0) {
          setWordDetails(data.results[0]);
        } else {
          setWordDetails(null);
        }
      } catch (error) {
        console.error("Error fetching word details:", error);
        setWordDetails(null);
      }
    };

    const words = text.split(/\s+/);
    const lastWord = words[words.length - 1];
    if (lastWord) {
      fetchWordDetails(lastWord);
    }
  }, [text]);

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
      />

      <TextMetrics text={text} />

      {wordDetails && <WordDetails wordDetails={wordDetails} />}
    </div>
  );
};

export default App;
