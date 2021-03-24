import { useRef } from "react";
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
const Search = ({ set }) => {

    const find = async (txt) => {
        if (txt==""){return;}
        const fch = await fetch(`https://api.github.com/users/${txt}`);
        const profile = await fch.json();
        set(profile);
        console.log(profile);

    }



    const inptxt = useRef();
    function handle(event) {
        event.preventDefault();
        find(inptxt.current.value);
        inptxt.current.value = '';
    }

    return (

        <form onSubmit={handle}>
              <InputGroup className="mb-3">
    <FormControl ref={inptxt}
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />

  </InputGroup>
        </form>

    );


}



export default Search;