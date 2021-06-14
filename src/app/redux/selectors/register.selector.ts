import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegister from '../reducers/register.reducer';

export const createRegisterState =
  createFeatureSelector<fromRegister.State>('register');

export const createRegister = createSelector(
  createRegisterState,
  fromRegister.createRegister
);
