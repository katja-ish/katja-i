import React from 'react';
import {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './Navigation/Header';
import Footer from './Navigation/Footer';
import Works from './Pages/Works';
import About from './Pages/About';
import './App.css';

const query = `
  {
    workCollection {
      items {
        title
        body
        tag
        ctaText
        ctaUrl
        id
        imagesCollection(limit: 5) {
          items {
            url
          }
        }
        videosCollection(limit: 5) {
          items {
            url
          }
        }
      }
    }
  }
`;

function App() {
  const [work, setWork] = useState(null);

  useEffect((work) => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/7icdx8y8ymtm/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 1oICBclP-7mG9WAqLCG23mIMOhOHK2TFaqJ-NfIJNfs",
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setWork(data.workCollection);
        console.log(work)
      });
  }, []);

  if (!work) {
    return <section><h1>Loading...</h1></section>
  }

  return (
    <div className="App">
        <Header/>

        <Routes>
          <Route path="/" element={<Works props={work} />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer/>
    </div>
  );
}

export default App;