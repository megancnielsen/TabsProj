import React from 'react';


export interface TabsProps {
    label: string;
    // content: string;
    // isSelected: boolean;
    onClick: () => any;
}

const Tabs: React.FC<TabsProps> = ({ label, onClick }) => {
    return ( 
        <button style={{
            border: "1px solid grey"
            
        }} 
        className="btn" 
        onClick = {onClick}>{ label }
        </button>
    )
   
};

export default Tabs;