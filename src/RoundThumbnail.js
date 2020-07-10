import React, { useState } from 'react';

function RoundThumbnail(props) {
    const {elt} = props;
    const[showCta, setShowCta] = useState(false);
    const setBackgroundImg = (url) =>{
        return {backgroundImage: `url(${url})`}
      } 

    return (
        <div className="roundThumbnail" 
             style={setBackgroundImg(elt.thumbnail)} 
             onMouseEnter={() => setShowCta(true)}
             onMouseLeave={() => setShowCta(false)}>
            <h3>{elt.title}</h3>
            {showCta && <button className="cta">Acheter</button>} 
        </div>
)
}

export default RoundThumbnail;