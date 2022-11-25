import { combineReducers } from 'redux';
import services from './servicesReducer';

const rootReducer = combineReducers({
  services: services,
});

export default rootReducer;
