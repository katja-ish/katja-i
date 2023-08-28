import React from 'react';
import './Paragraph.css';

function Paragraph ({lineOne, lineTwo}) {
    return (
        <section>
            <h1>{lineOne} <br /> {lineTwo}</h1>
        </section>
    )  
  };

export default Paragraph;
