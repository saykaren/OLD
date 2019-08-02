import React, {useState} from 'react';

const LogoState = () =>{
  const [greeting, setGreeting] = useState(
    "....Build me a market"
  );
  const handleChange = event => setGreeting(event.target.value);

  return(
    <div>
      <Headline
        headline={greeting}
      />
      <section
        id="inputState"
      >    
      </section>
    </div>
  );
};

const Headline = ({headline}) => (
    <h1>{headline}</h1>
);

const Input = ({value, onChangeInput, children}) => (
  <label>
    {children}
    <input 
      type="text"
      value={value}
      onChange={onChangeInput}
    />

  </label>
);

export default LogoState;