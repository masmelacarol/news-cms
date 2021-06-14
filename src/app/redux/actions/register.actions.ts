import { createAction, props } from '@ngrx/store';
import { Register } from 'src/app/core/models/register.model';

export const CREATE_REGISTER = 'CREATE_REGISTER';
export const CREATE_REGISTER_SUCCESS = 'CREATE_REGISTER_SUCCESS';
export const CREATE_REGISTER_FAILURE = 'CREATE_REGISTER_FAILURE';

export const createRegister = createAction(
  CREATE_REGISTER,
  props<{ register: Register }>()
);

export const createRegisterSuccess = createAction(
  CREATE_REGISTER_SUCCESS,
  props<{ message: string }>()
);

export const createRegisterFailure = createAction(
  CREATE_REGISTER_FAILURE,
  props<{ message: string }>()
);
