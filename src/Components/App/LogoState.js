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


  const handleChange = () => {
    Object.filter = (obj, predicate) =>
      Object.keys(obj)
            .filter(key=> predicate(obj[key]) )
            .reduce( (res, key) => (res[key] = obj[key], res), {}
    );
    var comparing = Object.filter(workStates, x => x == "...Build a React website");
    console.log(Object.keys(comparing)); // 3
    if (greeting !== workStates[3]){
    // console.log({greeting});
    // console.log(Object.values(workStates));
    // var resultHere = "";
    // function update(x){
    //   var result = x++
    //   setGreeting(workStates[result])
    // };
    setGreeting(workStates[2]);
    // console.log({greeting});
    }else{
      setGreeting(workStates[0])
    };

  };
  
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