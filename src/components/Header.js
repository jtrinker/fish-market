import React from 'react';

// stateless function: don't need full blown react component
// es6 function, passing in props
const Header = (props) => {
    return (
            <header className="top">
                <h1>
                    Catch
                    <span className="ofThe">
                        <span className="of">of</span>
                        <span className="the">the</span>
                    </span>
                    Day
                </h1>
                {/* 'this' refers to the component, Header */}
                <h3 className="tagline"><span>{props.tagLine}</span></h3>
            </header>
        )
}

export default Header;
