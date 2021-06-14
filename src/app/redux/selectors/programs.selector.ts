import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPrograms from '../reducers/programs.reducer';

export const getProgramsState =
  createFeatureSelector<fromPrograms.State>('programs');

export const getPrograms = createSelector(
  getProgramsState,
  fromPrograms.getPrograms
);
