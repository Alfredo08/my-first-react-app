import React from 'react';

function Hobby( props ){
    return(
        <li>
            <button onClick={() => props.changeFavoriteHobby( props.hobbyName ) }>
                Mark as favorite
            </button>
            #{props.idx} - I like {props.hobbyName}
        </li>
    )
}

export default Hobby;