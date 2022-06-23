import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';

function App() {

  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Displays all of my projects that I have worked on so far',
    },
    {
      name: 'Contact',
      description: 'A way for employers or people to contact me'
    },
    {
      name: 'Resume',
      description: 'Displays my resume to show my work history'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      {/* <Navigation /> */}
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory} />
      <main>
        <About />
        <Project />
      </main>
      <Footer />
    </div>
  )
}

export default App;