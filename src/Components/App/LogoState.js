import React, {useState} from 'react';

const MyApp = () =>{
  const [greeting, setGreeting] = useState(
    "....Build me a website"
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
        <Input 
          value={greeting}
          onChangeInput={handleChange}
          
        >
          What do you want?
        </Input>
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

export default MyApp;