import {addDoc, collection, doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from "../configs/FirebaseConfig";
import {PLAN_COLLECTION_NAME} from "../constants/ApiConstant";

const FirebaseService = {}

FirebaseService.fetchAddPlan = async (data) => {
    await addDoc(collection(db, PLAN_COLLECTION_NAME), {
        title: data.newPlan.title,
        elements: data.newPlan.elements
    });
}
FirebaseService.fetchUpdatePlan = async ({updatedPlan, id}) => {
    await updateDoc(doc(db, PLAN_COLLECTION_NAME, id), updatedPlan);
}
FirebaseService.fetchRemovePlan = async (data) => {
    await deleteDoc(doc(db, PLAN_COLLECTION_NAME, data.id));
}

export default FirebaseService