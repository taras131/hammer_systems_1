import React, {useState, useEffect} from 'react';
import {db} from "../../../../configs/FirebaseConfig";
import {
    query,
    collection,
    onSnapshot,
} from "firebase/firestore";
import {useDispatch, useSelector} from "react-redux";
import {getActiveElements, getPlannerLoading, getPlannerMessage} from "../../../../redux/selectors/Planner";
import {fetchAddPlan, fetchUpdatePlan, setActiveElements, setPlannerLoading, fetchRemovePlan} from "../../../../redux/actions/Planner";
import Loading from "../../../../components/shared-components/Loading";
import {PLAN_COLLECTION_NAME} from "../../../../constants/ApiConstant";
import UploadedPlanItem from "./UploadedPlanItem";
import {Button} from 'antd';
import {memo} from 'react'

const ulStyle = {
    height: "270px",
    overflowY: "scroll",
    margin: "0",
    paddingLeft: "0",
    backgroundColor: "whitesmoke",
    padding: "10px"
}
const formStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "20px"
}
const inputStyle = {padding: "8px 12px", borderRadius: "20px", outline: "none", border: "1px solid blue"}

const UploadedPlans = memo(() => {
    const dispatch = useDispatch()
    const [newPlanName, setNewPlanName] = useState("")
    const [uploadedPlans, setUploadedPlans] = useState([])
    const activeElements = useSelector(state => getActiveElements(state))
    const isLoading = useSelector(state => getPlannerLoading(state))
    const planMessage = useSelector(state => getPlannerMessage(state))
    const handleInputChange = (e) => {
        setNewPlanName(e.currentTarget.value)
    }
    const handleSaveClick = async (e) => {
        e.preventDefault()
        let currentPlan = null
        if (uploadedPlans.length) currentPlan = uploadedPlans.filter(plan => plan.title === newPlanName)[0]
        const newPlan = {elements: {...activeElements}, title: newPlanName}
        if (currentPlan && currentPlan.id) {
            dispatch(fetchUpdatePlan(newPlan, currentPlan.id))
        } else {
            dispatch(fetchAddPlan(newPlan))
        }
    }
    const handleUploadPlanClick = (planId) => () => {
        const selectedPlan = uploadedPlans.filter(plan => plan.id === planId)[0]
        dispatch(setActiveElements(selectedPlan.elements))
        setNewPlanName(selectedPlan.title)
    }
    const handleUploadPlanRemoveClick = (planId) => () => {
        dispatch(fetchRemovePlan(planId))
    }
    useEffect(() => {
        dispatch(setPlannerLoading(true))
        const q = query(collection(db, PLAN_COLLECTION_NAME));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const activeElementsArr = [];
            try {
                querySnapshot.forEach((doc) => {
                    activeElementsArr.push({...doc.data(), id: doc.id});
                });
                setUploadedPlans(activeElementsArr)
            } catch (e) {
                alert(e);
            } finally {
                dispatch(setPlannerLoading(false))
            }
        });
        return () => unsubscribe();
    }, [dispatch]);
    useEffect(() => {
        if (planMessage) alert(planMessage);
    }, [planMessage])
    const uploadedPlanList = uploadedPlans.map(plan => (
        <UploadedPlanItem key={plan.id}
                          handlePlanClick={handleUploadPlanClick(plan.id)}
                          plan={plan}
                          handleRemoveClick={handleUploadPlanRemoveClick(plan.id)}
                          isActive={plan.title === newPlanName}/>))
    if (isLoading) return (<Loading/>)
    return (
        <div style={{height: "100%", padding: "10px 20px", backgroundColor: "whitesmoke"}}>
            <div>
                <h3>Загрузить</h3>
                <ul style={ulStyle}>
                    {uploadedPlanList}
                </ul>
            </div>
            <form onSubmit={handleSaveClick} style={formStyle}>
                <input type="text" value={newPlanName} onChange={handleInputChange} style={inputStyle}/>
                <Button type="primary"
                        onClick={handleSaveClick}
                        disabled={!newPlanName.length || !Object.keys(activeElements).length}>
                    Сохранить
                </Button>
            </form>
        </div>
    )
});

export default UploadedPlans;