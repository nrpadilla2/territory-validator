import * as types from './actionTypes';

export function loadServices() {
  return { type: types.LOAD_SERVICES };
}

export function updateService(service) {
  return { type: types.UPDATE_SERVICE, service };
}

export function saveServices() {
  return { type: types.SAVE_SERVICES };
}
