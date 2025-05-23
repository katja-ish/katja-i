import React from 'react';
import './Works.css';
import Paragraph from '../../Paragraph';

const Works = (props) => {


    const worksAscending = [...props.props.items].sort((a, b) => a.id - b.id);

    const worksJSX = worksAscending.map((work, id) => (
        <div>
            
            
            {work.videosCollection && work.videosCollection.items.map((video, id) => 
                <video key={id} loop muted autoPlay>
                    <source src={video.url} type="video/mp4"/>
                </video>
            )}

            {work.imagesCollection.items && work.imagesCollection.items.map((image, id) => {
            return (
                <img
                src={image.url}
                key={id}
                alt=""
                />
            );
})}

            <div className="note">
                <h2 className="name">{work.title} </h2>
                <div className="tag">{work.tag}</div>
                <div className="desc">{work.body}</div>

                { work.ctaText && <a className={"button"} href={work.ctaUrl} target="_blank" rel="noreferrer">{work.ctaText}</a> } 
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