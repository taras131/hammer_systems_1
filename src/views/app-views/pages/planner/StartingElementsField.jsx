import React from 'react';
import {useSelector} from "react-redux";
import {getStartElements} from "../../../../redux/selectors/Planner";
import DraggableElement from "./DraggableElement";

const StartingElementsField = () => {
    const startElements = useSelector(state => getStartElements(state))
    const startElementsList = startElements.map(el => (<DraggableElement key = {el.id} {...el} isStarting/>))
    return (
        <div style={{height: "200px", backgroundColor: "whitesmoke", marginTop: "20px", padding: "20px"}}>
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",

            }}>
                {startElementsList}
            </div>
        </div>
    );
};

export default StartingElementsField;