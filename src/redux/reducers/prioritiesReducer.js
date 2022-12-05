import * as storageUtils from '../../util/storageUtils';
import * as types from '../actions/actionTypes';

export default function prioritiesReducer(priorities = new Map(), action) {
  switch (action.type) {
    case types.UPDATE_PRIORITIES: {
      const updatedPriorities = new Map(priorities.set(action.field, action.priorities));
      storageUtils.savePriorities(updatedPriorities);
      return updatedPriorities;
    }

    default:
      return priorities;
  }
}
