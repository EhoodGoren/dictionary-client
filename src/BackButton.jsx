import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const navigateBack = () => {
        navigate('/');
    }
    return(
        <div className='back-button' onClick={navigateBack}>🔙</div>
    )
}

export default BackButton;
