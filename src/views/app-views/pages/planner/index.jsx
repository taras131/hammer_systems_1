import React from 'react';
import {Card} from 'antd';
import PlanningField from "./PlanningField";
import StartingElementsField from "./StartingElementsField";

const Planner = () => {
    return (
        <Card>
            <h3>Planner</h3>
            <PlanningField/>
            <StartingElementsField/>
        </Card>
    );
};

export default Planner;