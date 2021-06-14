import { Action, createReducer, on } from '@ngrx/store';
import { News } from 'src/app/core/models/news.model';
import * as newsActions from '../actions/news.actions';

export interface State {
  news: News[];
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: boolean;
}

export const initialState: State = {
  news: [],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false,
};

const newsReducer = createReducer(
  initialState,
  on(newsActions.getNews, (state: any) => ({ ...state, isLoading: true })),
  on(newsActions.getNewsSuccess, (state, { news }) => ({
    ...state,
    isLoading: false,
    isLoadingSuccess: true,
    news,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return newsReducer(state, action);
}

export const getNews = (state: State) => {
  return {
    news: state.news,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
  };
};
