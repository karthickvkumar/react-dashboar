import React from 'react';

const SubHeader = (props) => {
    return (
        <div>
            <h3>This is a Sub Header Component</h3>
            <h3>{props.dog}</h3>
            <h3>{props.location}</h3>
        </div>
    );
};

export default SubHeader;