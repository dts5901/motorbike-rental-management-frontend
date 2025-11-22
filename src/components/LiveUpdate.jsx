export function LiveUpdate({ message }) {
    const style = {
        position: 'absolute',
        left: '-9999px'
    };
    
    return (
        <div style={style} aria-live="assertive">{message}</div>
    );
}//end function