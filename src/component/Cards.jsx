import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
const carddata = [
     {
        src: card1,
        title: "Declarative",
        description: "React makes it painless to create interactive UIs"
    },
     {
        src: card2,
        title: "Components",
        description: "Build encapsulated components that manage their state"
    },
     {
        src: card3,
        title: "Single-Way",
        description: "A set of immutable values are passed to the compmnent's"
    },
     {
        src: card4,
        title: "JSX",
        description: "Statically-types designed to run on modern browers"
    }
];

function Cards() {
  return (

    <>
    <div className='w-full h-full py-10 px-9 gap-20 bg-slate-50 flex justify-center items-center'>
            {   //this bracket is must
            
             carddata.map((card,index)=>{
                   const {src,title,description}=card;
                 return (
                            <div className='flex flex-col w-[11rem] justify-center items-center' key={index}>
                              <img className='w-full object-cover' src={src} alt={title}/>
                              <h1 className='text-3xl font-semibold'>{title}</h1>
                              <p className='text-1xl text-left pl-4 text-[#343F5C]'>{description}</p>
                            </div>
                        );
         
              })
            };  
      </div>
    </>
   
  )
}

export default Cards
