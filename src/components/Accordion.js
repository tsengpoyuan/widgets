import React, {useState} from 'react';

const Accordion =({items})=>{

    const [activeIndex, setActiveIndex] = useState(null); // convert to following comment, 3 line into 1 line

    /*
    const things = useState(null);
    const activeIndex = things[0];
    const setActiveIndex = thing[1];    
     */

    const onTitleClick = (index)=>{
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) =>{

        const active = index === activeIndex ? 'active' : '';

        return( 
            <React.Fragment key={item.title}>
                <div className={`title active}`}
                    onClick={()=>onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>;
};

export default Accordion;