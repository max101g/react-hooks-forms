import React from "react";

function Form(props) {

  return (
    <form>
      <input 
          onChange={props.handleFirstNameChange} 
          type="text" 
          value={props.firstName} />
      <input 
          onChange={props.handleLastNameChange} 
          type="text" 
          value={props.lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
