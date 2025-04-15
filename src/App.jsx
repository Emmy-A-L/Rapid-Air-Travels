// import "./App.css";
// import Image from "./assets/5bd3350aedb54-wallpaper-preview.jpg";
// import Greetings from "./components/Greetings";

// const App = () => {
//   const person = [
//     {
//       id: 1,
//       name: "John Doe",
//       age: 28,
//       occupation: "Software Engineer",
//       city: "San Francisco",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       age: 32,
//       occupation: "Product Manager",
//       city: "New York",
//     },
//     {
//       id: 3,
//       name: "Mike Johnson",
//       age: 25,
//       occupation: "UX Designer",
//       city: "Seattle",
//     },
//     {
//       id: 4,
//       name: "Sarah Williams",
//       age: 30,
//       occupation: "Data Scientist",
//       city: "Boston",
//     },
//     {
//       id: 5,
//       name: "Alex Brown",
//       age: 35,
//       occupation: "Marketing Director",
//       city: "Chicago",
//     },
//   ];

//   const handleAlert = (name) => {
//     alert("Hello, World! My name is " + name);
//   }

//   return (
//     <div>
//       <img src={Image} alt="" className="" />

//       <div
//         style={{
//           backgroundColor: "yellow",
//           width: "auto",
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "2rem",
//           padding: "2rem",
          
//         }}
//       >
//         {person.map((person) => (
//           <div key={person.id} style={{ backgroundColor: "blue" }}>
//             <h2>Name: {person.name}</h2>
//             <p>Age: {person.age}</p>
//             <p>Occupation: {person.occupation}</p>
//             <p>City: {person.city}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         {person.map((person) => (
//           <Greetings
//             key={person.id}
//             person={person}
//             handleAlert={handleAlert}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

import Welcome from './components/Welcome'
import WelcomeHook from './components/WelcomeHook'
import Counter from './components/Counter'
import React from 'react'

const App = () => {
  return (
    <div>
      <Welcome />
      <hr />
      <WelcomeHook />
      <hr />
      <Counter />
    </div>
  )
}

export default App