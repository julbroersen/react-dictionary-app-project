import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="Images container">
        <div className="gallery mt-4">
          <div className="row">
            {props.images.map(function (image, index) {
              return (
                <div className="col-4 mt-2 mb-1" key={index}>
                  <a
                    href={image.src.original}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={image.src.landscape}
                      alt={image.src.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
