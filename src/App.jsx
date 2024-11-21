
// // // event handling +state management
// // import { useState } from "react";


// // export default function App() {
// //  let name ="Faraz Baig";
// //  let [counter, setCounter] =useState(0);  // state variable because it will update when the state will be changes
// //  // let counter = 0; is a simple variable
// //  // let [counter,functionForUpdate] = useState(0); it is a state variable

// //   const handleEvent=(name)=>{
// //     alert("Helloe "+name);
// //   }
// //   const increment =()=>{
// // //    counter = counter+1;     // state update
// //       setCounter(counter+1);
// //     // screen update/refresh
// //   }
// //   const decrement=()=>{
// //     if(counter>0)
// //       setCounter(counter-1);
// //   }
// //   return (
// //     <div>
// //     <h1 className="text-3xl font-bold underline bg-red-200">
// //       <p>Welcome {name}</p>
    
// //     </h1>
// //     <button onClick={() => handleEvent("ali")}>Show Alert</button>
// //     <div className="flex flex-row flex-nowrap justify-center content-center bg-pink-300 p-14 items-center">
// //         <div className="basis-1 flex justify-center items-center">
// //           <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={decrement} disabled={!counter}>-</button>
// //         </div>
// //         <div className="basis-1 flex justify-center items-center">
// //           <p className="text-center m-2 w-10 text-[20px]">{counter}</p>
// //         </div>
// //         <div className="basis-1 flex justify-center items-center">
// //           <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={increment}>+</button>
// //         </div>
// //     </div>

// //     </div>
// //   )
// // }


// import { useState } from 'react';

// function Counter() {
//   const [counter, setCounter] = useState(0);

//   const increment = () => setCounter(counter + 1);
//   const decrement = () => setCounter(counter - 1);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
//         {/* Decrement Button */}
//         <button
//           className="w-12 h-12 bg-red-600 text-white text-xl font-semibold rounded-full shadow-lg transform hover:bg-red-700 transition-colors duration-300"
//           onClick={decrement}
//           disabled={counter <= 0}
//         >
//           -
//         </button>

//         {/* Counter Value */}
//         <div className="text-3xl font-bold text-gray-700">
//           {counter}
//         </div>

//         {/* Increment Button */}
//         <button
//           className="w-12 h-12 bg-green-600 text-white text-xl font-semibold rounded-full shadow-lg transform hover:bg-green-700 transition-colors duration-300"
//           onClick={increment}
//         >
//           +
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Counter;

import { useState } from "react";

export default function App(){
  let [counter,setCounter]=useState(0);
  const clickHandler =()=>{
   // alert("Hello World");
   // clickHandler2();
   setCounter(counter+1);
  }
  const clickHandler2=()=>{
  //  alert("Second function called");
  if(counter >0)
    setCounter(counter - 1);
  else
    alert("counter cannot be less than 0");
  }

  return (
    <div>
      <h1>Task 1</h1>
      <h1>counter = {counter}</h1>
     <button onClick={clickHandler}>Click Me</button>
      {/* <button onClick={()=>{clickHandler(); clickHandler2();}}>Click Me</button> */}
      <button onClick={clickHandler2}>Decrease</button>
    </div>
  );
}