import { combineReducers } from 'redux';
import Auth from './Auth';
import Clients from './Clients';
import Theme from './Theme';
import Planner from './Planner';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    clients: Clients,
    planner: Planner
});

export default reducers;