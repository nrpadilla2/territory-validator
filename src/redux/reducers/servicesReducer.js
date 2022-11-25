import * as storageUtils from '../../util/storageUtils';
import * as types from '../actions/actionTypes';

export default function servicesReducer(services = [], action) {
  switch (action.type) {
    case types.UPDATE_SERVICE: {
      const filteredServices = services.filter((s) => s.id != action.service.id);
      const updatedServices = [...filteredServices, action.service];

      storageUtils.saveServices(updatedServices);

      return updatedServices;
    }
    default:
      return services;
  }
}
