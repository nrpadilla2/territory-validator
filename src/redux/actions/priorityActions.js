import * as types from './actionTypes';

export function updatePriorities(field, priorities) {
  return { type: types.UPDATE_PRIORITIES, field, priorities };
}
