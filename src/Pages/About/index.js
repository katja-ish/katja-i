import React from 'react';
import './About.css';

function About() {

  const aboutData = [
      "the moon gets further from the earth by 4cm yearly.",
      "i get new birthmarks often.",
      "in my childhood, i liked drawing things with markers or colour pencils, constructing from lego and wooden pieces.",
       "then, maths and programming were an inspiration. i remember my mentor's words that coding is new poetry — i carry these words with me til now.",
      "it was good practice helping with the website of guide.dao. shortly after, working at redo bureau i'd make some websites — for apeiron jewelry and real estate agency homyes. i loved those because the client was there at a very close proximity, and functionality serves a real purpose. i’ve also done a few ui/ux projects as a designer at the same place.",
      "after the redo bureau, i had some time by myself. and discovered a small studio For a While LTD. i met founder and our ideas fantastically crossed. so it was an artistic collaboration. together we developed the concept of an unhappened (yet) app. at the time, i filmed a short movie. such a pleasure it was to make footage in real life. the app theme was all related to the interaction between people at a distance; that’s all i can say. when the war happened, it might have helped.",
      "i’ve had 1,5y experience at the clay studio as a ui/ux designer until may, 2023. products, websites, apps. after that, i moved to brazil to see the rainforests of amazonia and find a morpho butterfly.",
      "last thing i did was designing the Surreal app, a crypto wallet for NFTs. kind of story that i’m eager to tell more about."
  ]

  const moveCards = (e) => {
    const container = document.querySelector('.cardsContainer');
    const mouseX = e.pageX - container.offsetLeft; // problem is here. desirable behaviour: 1. first entering the container, the page should not be scrolling. 2. only after visibly moving right (like for 10-20 pixels, bc after entering user moves the cursor slightly) the function moveCards happens.)
    const containerWidth = container.offsetWidth;
    const scrollWidth = container.scrollWidth;
    const percentX = mouseX / containerWidth;
    const scrollLeft = percentX * (scrollWidth - containerWidth);
    container.scrollLeft = scrollLeft;
  };

  const aboutJSX = aboutData.map((data, i) => (
    <div className="card"><p>{data}</p></div>
  ));

  return (
    <div className='About'>
      <div className="cardsContainer" onMouseMove={moveCards} >
        {aboutJSX}
        <></>
      </div>
    </div>
  )
}

export default About;