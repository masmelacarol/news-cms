import { Action, createReducer, on } from '@ngrx/store';
import { Register } from '../../core/models/register.model';
import * as registerActions from '../actions/register.actions';

export interface State {
  register: Register;
  isLoading: boolean;
  statusMessage: string;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: State = {
  register: {
    name: '',
    family_name: '',
    email: '',
    phone: 0,
    program: '',
    comment: '',
  },
  isLoading: false,
  statusMessage: '',
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const registerReducer = createReducer(
  initialState,
  on(registerActions.createRegister, (state, { register }) => ({
    ...state,
    isLoading: true,
    register,
  })),
  on(registerActions.createRegisterSuccess, (state, { message }) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: true,
    statusMessage: message,
  })),
  on(registerActions.createRegisterFailure, (state, { message }) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: false,
    isLoadingFailure: true,
    statusMessage: message,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return registerReducer(state, action);
}

export const createRegister = (state: State) => {
  return {
    register: state.register,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
    isLoadingFailure: state.isLoadingFailure,
    statusMessage: state.statusMessage,
  };
};
