import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromNews from './reducers/news.reducer';
import * as fromPrograms from './reducers/programs.reducer';
import * as fromRegister from './reducers/register.reducer';

export interface State {
  news: fromNews.State;
  programs: fromPrograms.State;
  register: fromRegister.State;
}

export const reducers: ActionReducerMap<State> = {
  news: fromNews.reducer,
  programs: fromPrograms.reducer,
  register: fromRegister.reducer,
};

export const getNewsState = createFeatureSelector<fromNews.State>('news');

export const getNews = createSelector(getNewsState, fromNews.getNews);
