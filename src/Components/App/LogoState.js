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
    var comparing = Object.filter(workStates, x => x === "...Build a React website");
    var comparingNow = Object.filter(workStates, x => x === currentValue);
    var lastItem = Object.values(comparing).toString();

    //greeting and CurrentValue is a string originally "...Build a React website" string to be concise
    var currentValue = greeting;
    
    // var correctOrNot = Object.filter(workStates, x => (Object.values(x) === greeting));
    // console.log({correctOrNot});
    // console.log(Object.values(correctOrNot));
    // console.log({greeting});
    // console.log({lastItem}); //{lastItem: "...Build a React website"}

    // console.log("current type of greeting " +typeof(greeting)); //current type of greeting string
    // console.log({currentValue});
    // console.log("current value type " +typeof(currentValue)); //current value type string
    // console.log("does current value and greeting match" + (currentValue === greeting));
    // var lastItemString = lastItem.toString();
    console.log(Object.keys(comparing)); // 3
    console.log(Object.values(comparing));// ["...Build a React website"]

    console.log(` at end should be true ${greeting === lastItem}`);

    if (greeting !== lastItem){
      setGreeting(workStates[3]);
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