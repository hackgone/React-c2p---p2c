import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";
import Components from "./Components";

import React ,{useState} from 'react';
import FormNew from "./FormNew";

const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

function App() {
  
  const [title , setTitle] = useState('');
  

  // This function will be like return function eg onClick wants function like that and it will be responible 
  //for the value retrieve
  const titleHandler =(newTitle)=>{
    setTitle(newTitle.newTitle);
    console.log(newTitle);
  }
  
  return (
    <div>
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">

        <Components
          img={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />


        <p>{title}</p>
      {/* value will be retrieve from this titleHandler and in child it will be called as titleFunction */}
       <FormNew titleFunction={titleHandler}></FormNew>  

        <Components
          img={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Components
          img={concepts[2].image}
          title={concepts[2].title}
          description={concepts[2].description}
        />
      </ul>
    </div>
  );
}

export default App;
