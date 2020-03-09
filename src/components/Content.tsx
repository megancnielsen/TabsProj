import React from 'react';

interface BoxProps {
    content: string;
}

const Box: React.FC<BoxProps> = ( props ) => {
    return (
        <div style={{
            height: 500,
            margin: 20,
            border: "1px solid grey",
        }}>
        { props.content }
        </div>
    );
};

export default Box;