import React from 'react'

const Card_74 = ({ id,img, name, Introduction }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 .input-reset: none'>
            <img src={img} alt="robot" />
            <h2>{name}</h2>
            <p>{Introduction}</p>
        </div>
    )
}

export default Card_74;