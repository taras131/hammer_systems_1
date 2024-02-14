import React from 'react';
import {Card} from 'antd';
import PlanningField from "./PlanningField";
import StartingElementsField from "./StartingElementsField";


const Planner = () => {
    return (
        <Card>
            <h3>Planner</h3>
            <PlanningField/>
            <p>Кликнете по элементу дважды, чтобы повернуть его.</p>
            <StartingElementsField/>
            <p>Чтобы добавить элемент в план, перетащите его мышкой.</p>
        </Card>
    );
};

export default Planner;