import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
    const { register, setValue, watch, handleSubmit, formState: { errors }, reset } = useForm();

    const containerStyle = {
        width: "90%",
        maxWidth: "600px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };

    // Register the select field once
    useEffect(() => {
        register('username', { required: 'Username is required' });
        register('password', { required: 'Password is required' });
    }, [register]);
    const formValues = watch();

    const captureFormValue = (event) => {
        setValue(event.target.name, event.target.value, { shouldValidate: true });
    }//end function

    const processLogin = async (data) => {
        alert("Loging in...");
    }//end function

    return (
        <div
            className="w3-content"
            style={containerStyle}
        >
            <h1
                className="w3-center"
                style={{
                    fontFamily: "Trebuchet MS, Verdana, sans-serif",
                    fontWeight: 600,
                    fontSize: "25px"
                }}
                role="text"
            >
                Motorbike Rental <span className="lineBreak" /> &nbsp; Management System
            </h1>

            <form
                onSubmit={handleSubmit(processLogin)}
                style={{ padding: "0px 50px" }}
            >
                <table className="w3-table">
                    <tr>
                        <td>
                            <label for="username">Username*</label>
                            <input
                                type="text"
                                name="username"
                                className="w3-input w3-border"
                                onChange={captureFormValue}
                                placeholder="Username"
                                value={formValues.username??""}
                            />
                            {errors.username && <span className="w3-text-red">{errors.username.message}</span>}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="password">Password*</label>
                            <input
                                type="password"
                                name="password"
                                className="w3-input w3-border"
                                onChange={captureFormValue}
                                placeholder="Password"
                                value={formValues.password??""}
                            />
                            {errors.password && <span className="w3-text-red">{errors.password.message}</span>}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="submit"
                                className="w3-button w3-win8-green"
                                style={{ width: "100%" }}
                                value="Login"
                            />
                        </td>
                    </tr>
                </table>
            </form>
        </ div >
    );
}//end function