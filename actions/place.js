import {ADD_PLACE} from './types';

//returns aa action, based on that reducers case is executed
export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName,
  };
};
