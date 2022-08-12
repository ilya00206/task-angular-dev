import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AnimalsState } from 'src/app/state/state.reducers';
import { mapAnimalWithProfiles } from '../core/models/animal.model';

const getState = createFeatureSelector<AnimalsState>('animals');

export const getAnimals = createSelector(getState, (state) => state.animals);

export const getAnimalsProfiles = createSelector(
  getState,
  (state) => state.profiles,
);
export const getAnimalsWithProfiles = createSelector(getState, (state) => {
  if (!state.animals || !state.profiles) {
    return null;
  }
  return mapAnimalWithProfiles(state.animals, state.profiles);
});
