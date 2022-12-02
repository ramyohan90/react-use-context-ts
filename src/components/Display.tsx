import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../store/context";


export const DisplayComponent = () => {

    const ctx = useContext(AuthContext);

    return (
        <React.Fragment>
                Display component.
                {ctx.data.user}
        </React.Fragment>
    )
}