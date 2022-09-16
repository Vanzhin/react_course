import React from 'react';

function List({array}) {
    return (
        <div className={"showBlue"}>
            <ul>
                {array.map(name => (
                    <li>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;