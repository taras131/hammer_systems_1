import React from 'react';
import {useSelector} from "react-redux";
import {getStartElements} from "../../../../redux/selectors/Planner";
import Element from "./Element";
import {memo} from 'react'

const StartingElementsField = memo(() => {
    const startElements = useSelector(state => getStartElements(state))
    const startElementsList = startElements.map(el => (<Element key = {el.id} {...el} isStarting/>))
    return (
        <div style={{height: "200px", backgroundColor: "whitesmoke", marginTop: "20px", padding: "20px"}}>
            <div style={{
                display: "flex",
                alignItems: "end",
                gap: "40px",

            }}>
                {startElementsList}
            </div>
        </div>
    );
});

export default StartingElementsField;