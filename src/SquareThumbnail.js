import React, { useState } from 'react';
import heartIcon from './images/icon-heart.svg';

function SquareThumbnail(props) {
    const {elt} = props;
    const[showCta, setShowCta] = useState(false);
    const setBackgroundImg = (url) =>{
        return {backgroundImage: `url(${url})`}
      } 

    const hasDiscount = (value) => {
        if(value){
            return {textDecoration: 'line-through'}
        }
    }
    return (
    <div className="squareThumbnail" 
         onMouseEnter={() => setShowCta(true)}
         onMouseLeave={() => setShowCta(false)}>
        <div className="squareThumbnailImg" style={setBackgroundImg(elt.thumbnail)}>
            <div className="squareThumbnailIcons">
                <div>
                {elt.coup_de_coeur && 
                    <div className="favorite">
                    <img src={heartIcon} />
                    <p>Coup de coeur</p>
                    </div>}
                </div>
                <div>
                {elt.discount && <div className="promo">PROMO</div>}
                </div>
            </div>
            {showCta && <button className="cta square">Acheter</button>} 
        </div>
        <div>
            <p className="squareThumbnailTitle">{elt.title}</p>
            <div className="price">
                <p style={hasDiscount(elt.discount)}>{elt.price}€</p>
                {elt.discount && <p>{elt.discount}€</p>}
            </div>
        </div>
    </div>
)
}

export default SquareThumbnail;