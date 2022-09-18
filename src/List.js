import React from 'react';

function List({array}) {
    if (array.length>0){
        return (
            <div className={"showBlue"}>
                <ul>
                    {array.map(item => (
                        <li>
                            <p>{item.user} пишет: </p>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

}

export default List;