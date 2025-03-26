import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning mt-5 me-2">
      <h3 className="mt-2 mb-1">{props.meaning.partOfSpeech}</h3>
      <p className="mb-1">{props.meaning.definition}</p>
      <p className="example mb-0">{props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
