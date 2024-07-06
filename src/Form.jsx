import React from "react";
import Input from "./input.jsx"

function Form(props)
{
        return <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
            <button type="submit">{props.Isregistered?"Login":"Register"}</button>
          </form>
}
export default Form;