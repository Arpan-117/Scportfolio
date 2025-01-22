import React, { useState, useEffect } from 'react'
import Hero from './Hero';
import About from './About';

const ComponentA = () => <Hero />;
const ComponentB = () => <About />;

function Carousel() {

    const components = [ComponentA, ComponentB]; // List of components
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
        }, 7000); // Change every 7 seconds
    
        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
      }, [components.length]);
    
      const CurrentComponent = components[currentIndex];

    return (
        <div>
            <CurrentComponent />
        </div>
    )
}

export default Carousel