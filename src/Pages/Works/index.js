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
            <Paragraph lineOne={"interested in adding to this world. "} lineTwo={"less machinery, more beauty. currently on a maternity leave."} />

            <main className="Works">{worksJSX}</main>

             <section>
                <h1>as a designer, i love being at the very beginning — when something is just a thought. i enjoy gently unfolding ideas, scenarios, visuals. i can also fit easily in a bigger team, be patient and attentive to a client.<br/>
                <br/>i <i>care</i> about design systems — building them from scratch or supporting.<br/>
                <br/>i <i>stand</i> between design and code — translating meaning and intention.<br/>
                <br/>i <i>manage</i> tasks with care — keeping things clear and organized. <br/> <br/> your project might be mobile or web, conceptual or practical. i'm drawn to ones with purpose: social, art, nature-based, people-centered. if it makes me feel something — i’m curious.<br/>
                <br/>open to part-time starting october 2025.</h1> <br/>
             </section>
        </>
      );
      
      
  };

export default Works;