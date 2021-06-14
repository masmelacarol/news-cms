import { Action, createReducer, on } from '@ngrx/store';
import { Program } from 'src/app/core/models/programs.model';
import * as programsActions from '../actions/programs.actions';

export interface State {
  programs: Program[];
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: State = {
  programs: [],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const programsReducer = createReducer(
  initialState,
  on(programsActions.getPrograms, (state: any) => ({
    ...state,
    isLoading: true,
  })),
  on(programsActions.getProgramsSuccess, (state, { programs }) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: true,
    programs,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return programsReducer(state, action);
}

export const getPrograms = (state: State) => {
  return {
    programs: state.programs,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
  };
};
