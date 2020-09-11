import React from 'react';
import SubHeader from './sub-header';

const HeaderComponent = () => {
    let userName = "Mr.John";
    let userLocation = "Canada";

    const displayResult = () => {
        let a = 100;
        let b = 200;
        let result = a + b;
        alert(result)
    }

    return (
        <div>
            <h1>This is a Header Page {userName}</h1>
            <button onDoubleClick={() => displayResult()}>Click Me</button>
            <SubHeader dog={userName} location={userLocation}></SubHeader>
        </div>
    )
}

export default HeaderComponent;