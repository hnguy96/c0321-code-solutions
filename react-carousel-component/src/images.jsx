import React from 'react';

export default function Images(props) {
  const numbers = ['001', '004', '007', '025', '039'];
  const images = numbers.map(num => {
    return <img key={num} src={`../dist/images/${num}.png`} className="pokemon" />;
  });
  return (
    <div className="images center">
      {images}
    </div>
  );
}
