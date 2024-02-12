import React from 'react';
import {useSelector} from "react-redux";
import {getStartElements} from "../../../../redux/selectors/Planner";
import Element from "./Element";

const ElementsField = () => {
    const startElements = useSelector(state => getStartElements(state))
    const startElementsList = startElements.map(el => (<Element key = {el.id} {...el}/>))
    return (
        <div style={{height: "200px", backgroundColor: "whitesmoke", marginTop: "20px", padding: "20px"}}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                width: "100%"
            }}>
                {startElementsList}
            </div>
        </div>
    );
};

export default ElementsField;