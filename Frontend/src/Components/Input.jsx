import React from 'react';

const Input = ({Text, placeholder, id}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-800 font-semibold text-sm"> {Text}</label>
      <div className="mt-2">
        <input type="text" 
        id={id}
        name="inputname" 
        placeholder={placeholder}
        className="block w-96 rounded-md py-1.5 px-2 ring-1 ring-inset ring-Cafe  focus:text-gray-800" />
      </div>
    </div>
  );
}

export default Input;
