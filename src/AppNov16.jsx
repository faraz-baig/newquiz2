// // import { useState } from "react";


// // export default function AppNov16(){
// //   let [counters, setCounters] = useState([1,1,1,1]);

// //   const handleIncrement = (index) =>{
// //     //console.log("increment "+index);
// //     //counters[index] = counters[index] + 1;  not worked
// //     // setCounters(counters[index] + 1);    not worked  becuase the set state function set the state of the same type. this method will change the type from array to single number which will cause error
    
// //     let copyCounters =[...counters];  // created a deep copy of the actual array
// //     copyCounters[index]++;     // incremente don that particular index
// //     setCounters(copyCounters);  // set the new array to teh useState

// //    // setCounters(counters[index] + 1);
// //   }
// //   const handleDecrement =(index)=>{
// // //    console.log("decrement"+index);
// //    let copyCounters = [...counters];
// //    if(copyCounters[index] > 0)
// //     copyCounters[index]--;
// //    setCounters(copyCounters); 
// // }
// //   return (
// //     <div style={{background:"pink"}}>
// //       <h1 className="text-2xl">Burger Deals</h1>
// //         {counters.map((counter,index)=>(
// //           <div key={index} className="m-4">
// //             <button className="border border-black p-4 mr-2" onClick={()=>handleIncrement(index)}>+</button>
// //                {counter}
// //             <button className="border border-black p-4 ml-2 mb-2" onClick={()=>handleDecrement(index)}>-</button></div>))}
// //     </div>
// //   );
// // }








// // // import { useState } from "react";

// // // let colors=['red','brown','grey','yellow','pink','blue'];

// // // export default function AppNov16(){
// // //   let [selectedColor,setSelectedColor]=useState("red");
  
// // //   let changeColor = (color) =>{
// // //     // console.log("Change color function is called....");
// // //     setSelectedColor(color);
// // //   }

// // //   return (
// // //     <div>
// // //   {
// // //         colors.map(color=><button onClick={()=>changeColor(color)} className="border border-blue-400 m-2 p-4 rounded-lg" key={color}>{color}</button>)
// // //       }
// // //     <div style={{background:selectedColor}}>
// // //       <h1>Task 1 APP nov 16</h1>
 
    
   

// // //       </div>
// // //     </div>

// // //   );
// // // }

// import { useState } from 'react';
// import controller1 from './images/controller1.jpg';
// import controller2 from './images/controller2.jpg';
// import controller3 from './images/controller3.jpg';

// let images=[controller1,controller2,controller3]

// export default function AppNov16(){
//   let [quantities,setQuantities]=useState([1,1,1]);
//   let prices=[18490, 28000, 19000];
//   let titles=["White PS5 DualSense Wireless Controller","Red PS5 DualSense Wireless Controller","Black PS5 DualSense Wireless Controller"];

//   const handleIncrement=(index)=>{
//     let copyQuantities = [...quantities];
//     copyQuantities[index]++;
//     setQuantities(copyQuantities);
//   }
//   const handleDecrement=(index)=>{
//     let copyQuantities = [...quantities];
//     if(copyQuantities[index]>0)
//       copyQuantities[index]--;
//     setQuantities(copyQuantities);
//   }
//   return (
//     <div>
//       <div className="grid justify-center bg-blue-300 p-14">
//          <h1 className="text-3xl text-center font-bold">PS5 Controlers</h1>
//          <div className='bg-yellow-400 grid grid-cols-3 mx-auto justify-center align-middle mt-4 w-[80%]'>
//          { quantities.map((counter,index)=>(
//          <div className='border border-blue-700' key={index}>
//             <img src={images[index]} className='h-[300px] w-[100%]' />
//             <div className='m-2'>
//               <p className='font-bold'>{titles[index]}</p>
//             <p>RS {prices[index]} PKR</p>
//             <div>
//             <button className='bg-white border border-black rounded-[10px] p-[10px]' onClick={()=>handleDecrement(index)}>-</button>
//               {counter}
//             <button className='bg-white border border-black rounded-[10px] p-[10px]' onClick={()=>handleIncrement(index)}>+</button>

//             </div>
//             </div>
//          </div>
//          ))
//          }
//          </div>

//       </div>



//     </div>
//   );

// }

export default function AppNov16(){
  return (<></>);
}