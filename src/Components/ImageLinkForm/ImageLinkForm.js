import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className="center f3">
                {`This magic app will detect faces is pictures. Give it a try!`}
            </p>
            <div className="center">
                <div className="center form pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 center" type="text" placeholder="Enter image URL here"
                    onChange={onInputChange} />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                    onClick={onButtonSubmit}>Detect </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;