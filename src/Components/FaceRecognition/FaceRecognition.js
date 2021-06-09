import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imageUrl, box}) => {
    const myStyle = {
        top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol
    };
    
    return(
        
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputImage" src={imageUrl} alt="result" width="500px" height="auto"/>
                <div style={myStyle} className="bounding-box"></div>
            </div>
        </div>
    );
}

export default FaceRecognition;