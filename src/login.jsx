export default function Login() {
    const containerStyle = {
        width: "90%",
        maxWidth: "600px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };

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

            <div style={{ padding: "0px 50px" }}>
                <table className="w3-table">
                    <tr>
                        <td>
                            <label for="username">Username*</label>
                            <input
                                type="text"
                                name="username"
                                className="w3-input w3-border"
                                placeholder="Username"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label for="password">Password*</label>
                            <input
                                type="password"
                                name="password"
                                className="w3-input w3-border"
                                placeholder="Password"
                            />
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
            </div>
        </ div >
    );
}//end function