import { createAction, props } from '@ngrx/store';
import { Program } from 'src/app/core/models/programs.model';

export const GET_PROGRAMS = 'GET_PROGRAMS';
export const GET_PROGRAMS_SUCCESS = 'GET_PROGRAMS_SUCCESS';
export const GET_PROGRAMS_FAILURE = 'GET_PROGRAMS_FAILURE';

export const getPrograms = createAction(GET_PROGRAMS);

export const getProgramsSuccess = createAction(
  GET_PROGRAMS_SUCCESS,
  props<{ programs: Program[] }>()
);

export const getProgramsFailure = createAction(
  GET_PROGRAMS_FAILURE,
  props<{ error: any }>()
);
