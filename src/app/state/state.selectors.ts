import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UsersState } from 'src/app/state/state.reducers';

const getState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(getState, state => state.users);

export const getProfiles = createSelector(getState, state => state.profiles);
