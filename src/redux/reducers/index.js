import { combineReducers } from 'redux';
import priorities from './prioritiesReducer';
import services from './servicesReducer';

const rootReducer = combineReducers({
  services: services,
  priorities: priorities,
});

export default rootReducer;
