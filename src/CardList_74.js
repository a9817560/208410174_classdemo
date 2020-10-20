import React from 'react'
import Card_74 from './Card_74'

const CardList_74 = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card_74
                        key={i}
                        id={user.id}
                        img={user.img}
                        name={user.name}
                        Introduction={user.Introduction}
                    />
                )
            })

            }
        </div>
    )
}

export default CardList_74

