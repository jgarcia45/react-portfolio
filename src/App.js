import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {

  const [categories] = useState([
    {
      name: 'About',
      description: 'Describes about who I am'
    },
    {
      name: 'Portfolio',
      description: 'Displays all of my projects that I have worked on so far'
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

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
      <main>
        <About currentCategory={currentCategory}></About>
        <Project currentCategory={currentCategory}></Project>
      </main>
      <Footer />
    </div>
  )
}

export default App;