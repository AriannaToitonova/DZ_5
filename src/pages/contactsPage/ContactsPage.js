import React, {useState} from 'react';

function ContactsPage(props) {

    const [state,setState] = useState("")

    const changeInput = (e) => {
        setState (e.target.value)
    }

   const add = () =>{
        console.log(state);
        setState("")
    }
   const clear = () =>{
        setState( "")
    }


    return (
        <>
            <input
                value={state}
                onChange={changeInput}
                type="text"/>
            <button onClick={add}>add</button>
            <button onClick={clear}>clear</button>
        </>
    );
}

export default ContactsPage;