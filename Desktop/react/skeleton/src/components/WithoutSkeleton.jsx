import "../App.css"

import React from "react"

const WithoutSkeleton = props => {
    return (
        <div>
            <h1>Without Skeleton</h1>
            {!props.isLoading &&
            props.data.map(item => {
                return (
                    <li key={item.id} className="item">
                        <div>
                            <img className="img" src={item.avatar} alt={item.id} />
                        </div>
                        <div className="info">
                            <p>
                                <strong>
                                    {item.first_name} {item.last_name}
                                </strong>
                            </p>
                            <p>{item.email}</p>
                        </div>
                    </li>
                )
            })}
        </div>
    )
};

export default WithoutSkeleton;
