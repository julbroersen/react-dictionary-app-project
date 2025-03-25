import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results container mx-2">
        <h2 className="mt-4">{props.result.word}</h2>
        <h4>{props.result.phonetic}</h4>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
