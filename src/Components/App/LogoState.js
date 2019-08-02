import React, {useState} from 'react';

const LogoState = () =>{
  
  const workStates = {
    0: "...Build me a website",
    1: "...Teach me to code",
    2: "...Build a Vanilla JavaScript website",
    3: "...Build a React website",
  };
  
  const [greeting, setGreeting] = useState(
    workStates[0]
  );
  // const handleChange = event => setGreeting(event.target.value + 1);
  const handleChange = event => {
    // if (greeting !== 0){
    // console.log({greeting})
    // console.log({greeting})
    // setGreeting(workStates[1]);
    setGreeting(workStates[1]);
  
  };
  
    // setGreeting(
    // if(greeting !==2){

    // }
    // workStates[1]
    // );

  return(
    <div>
      <div 
        value={greeting}
        onClick={handleChange}
      >
        {greeting}
      </div>
      <section
        id="inputState"
      >    
      </section>
    </div>
  );
};




export default LogoState;