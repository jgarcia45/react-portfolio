import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';

function App() {

  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Displays all of my projects that I have worked on so far',
    },
    {
      name: 'contact',
      description: 'A way for employers or people to contact me'
    },
    {
      name: 'resume',
      description: 'Displays my resume to show my work history'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation></Navigation>
      <main>
        <About></About>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App;