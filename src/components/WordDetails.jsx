
import React from "react";

const WordDetails = ({ wordDetails }) => {
  return (
    <>
      <h1>Text Analyzer</h1>

      <div>
        <h3>Word Details:</h3>
        <div>
          <strong>Definition:</strong> {wordDetails.definition || "N/A"}
        </div>
        <div>
          <strong>Part of Speech:</strong> {wordDetails.partOfSpeech || "N/A"}
        </div>
        <div>
          <strong>Synonyms:</strong>{" "}
          {wordDetails.synonyms ? wordDetails.synonyms.join(", ") : "N/A"}
        </div>
      
      </div>
    </>
  );
};

export default WordDetails;
