import React, { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../store/context";


export const LoginComponent = () => {

    const {register, handleSubmit } = useForm();
    const ctx = useContext(AuthContext);

    const submitForm = (data: any) => {
        // come on, just a fake authenticator
        // repo primarily focus on use context
        if (data.userid !== data.password) {
            console.log('Invalid password');
            return;
        }
        ctx.setData({
            type: 'auth',
            payload: {
                isLoggedIn: true,
                user: data.userid,
                token: 'abc'
            }
        })
    }

    return (
        <React.Fragment>
            <div>
                <form onSubmit={handleSubmit((data) => submitForm(data))}>
                <div>
                    <label>Name:</label>
                    <input {...register('userid')} type="text" id="userid" autoComplete="off"></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input {...register('password')} type="password" id="password"></input>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
                </form>
            </div>
        </React.Fragment>
    )
}
