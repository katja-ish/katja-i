import React from 'react';
import './Works.css';
import Paragraph from '../../Paragraph';

const Works = (props) => {

    const worksAscending = [...props.props.items].sort((a, b) => a.id - b.id);

    const worksJSX = worksAscending.map((work, id) => (
        <div>
            {work.imagesCollection.items && work.imagesCollection.items.map((image, id) => 
                <img src={image.url} key={work.id}  />
            )}

            <div className="note">
                <h2 className="name">{work.title} </h2>
                <div className="tag">{work.tag}</div>
                <div className="desc">{work.body}</div>

                { work.ctaText && <button className="cta" href={work.ctaUrl}>{work.ctaText}</button> } 
            </div>
        </div>
    ));
    
      return (
        <>
            <Paragraph lineOne={"Interested in adding to this world. "} lineTwo={"Less machinery, more beauty"} />

            <main className="Works">{worksJSX}</main>
        </>
      );
      
  };

export default Works;