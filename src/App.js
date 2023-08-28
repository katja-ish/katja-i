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
        imagesCollection {
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

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/7icdx8y8ymtm/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer 1oICBclP-7mG9WAqLCG23mIMOhOHK2TFaqJ-NfIJNfs",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setWork(data.workCollection);
        console.log(work)
      });
  }, []);

  if (!work) {
    return "Loading...";
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