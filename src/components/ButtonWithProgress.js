import React from "react";

const ButtonWithProgress = (props) => {
    const {onClick, pendingApiCall, disabled, text} = props;
    return (<button className="btn btn-primary"
                    onClick={props.onClick}
                    disabled={props.disabled}>

            {props.pendingApiCall &&
                (<div className="spinner-border text-light spinner-border-sm me-sm-1">
                <span className="visually-hidden">Loading...</span>
            </div>)}
        {props.text}
        </button>);
}

export default ButtonWithProgress;