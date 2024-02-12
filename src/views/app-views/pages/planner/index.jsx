import React from 'react';
import {Card} from 'antd';
import PlanningField from "./PlanningField";
import ElementsField from "./ElementsField";

const Planner = () => {
    return (
        <Card>
            <h3>Planner</h3>
            <PlanningField/>
            <ElementsField/>
        </Card>
    );
};

export default Planner;