import React from 'react';
import {Button, Tooltip} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

const UploadedPlanItem = ({plan, handlePlanClick, isActive, handleRemoveClick}) => {
    return (
        <li key={plan.id} onClick={() => handlePlanClick(plan.id)}
            style={{
                color: isActive ? "white" : "blue",
                padding: "15px",
                border: "1px solid white",
                margin: "10px 10px 0 0",
                cursor: "pointer",
                listStyle: "none",
                borderRadius: "20px",
                backgroundColor: isActive ? "blue" : "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
            <span>{plan.title}</span>
            <Tooltip title="Удалить">
                <Button onClick={handleRemoveClick}
                        type="primary"
                        shape="circle"
                        icon={<DeleteOutlined/>}/>
            </Tooltip>
        </li>
    );
};

export default UploadedPlanItem;