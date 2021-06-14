import { createAction, props } from '@ngrx/store';
import { News } from 'src/app/core/models/news.model';

export const GET_NEWS = 'GET_NEWS';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

export const getNews = createAction(GET_NEWS);

export const getNewsSuccess = createAction(
  GET_NEWS_SUCCESS,
  props<{ news: News[] }>()
);

export const getNewsFailure = createAction(
  GET_NEWS_FAILURE,
  props<{ error: any }>()
);
