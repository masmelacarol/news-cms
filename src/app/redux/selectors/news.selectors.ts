import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNews from '../reducers/news.reducer';

export const getNewsState = createFeatureSelector<fromNews.State>('news');

export const getNews = createSelector(getNewsState, fromNews.getNews);
