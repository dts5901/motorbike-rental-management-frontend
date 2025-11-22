import { MoonLoader } from 'react-spinners';

export function Loader() {
    const loaderStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    };

    const containerStyle = {
        ...loaderStyle,
        width: "150px",
        height: "120px",
        backgroundColor: "white",
        zIndex: "1"
    };

    return (
        <div style={containerStyle} className='w3-card'>
            <MoonLoader
                size="50px"
                color="#00bfff"
                aria-label="Loading"
                cssOverride={loaderStyle}
            />
        </div>
    );
}//end function