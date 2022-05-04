import { createAction } from '@ngrx/store';

import { User, Profile } from './../core/interfaces/users.interfaces';

export const GetUsers = createAction('Get Users');

export const GetUsersSuccess = createAction(
  'Get Users Success',
  (payload: User[]) => ({ payload }),
);

export const GetProfiles = createAction('Get Profiles');

export const GetProfilesSuccess = createAction(
  'Get Profiles Success',
  (payload: Profile[]) => ({ payload }),
);
