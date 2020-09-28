import React, {useState} from 'react';

const ViewObject = ({ valObject }) => {
    const keys = Object.keys(valObject);
    const [expandedState, setExpanded] = useState({});
    const toggleExpand = key => {
        setExpanded({
            ...expandedState,
            [key]: !expandedState[key]
        });
    };

    const parseObject = ({key, value}) => {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            return (
                <div style={{marginLeft: '2rem'}}>
                    <span style={{fontWeight: 'bold'}}>{key}: </span>
                    <span>{value}</span>
                </div>
              )
        } else if (typeof value === 'object') {
            const expandClass = expandedState[key] ? 'openExpandIcon' : 'expandIcon';
            return (
                <div>
                    <span className={expandClass} onClick={() => toggleExpand(key)} style={{fontWeight: 'bold'}}>{key}:</span>
                    <span>
                    { expandedState[key] ?
                        <div style={{marginLeft: '2rem'}}><ViewObject valObject={value} /></div>
                        :
                        <span> ...</span>
                    }
                    </span>
                </div>
            )
        } else {
            return null;
        }
    };
    return (
        <div>
            { keys.map((key, index) => {
              return (
                <div key={index}>
                    {parseObject({key, value: valObject[key]})}
                </div>
            )})}
        </div>
    );
}

export default ViewObject;