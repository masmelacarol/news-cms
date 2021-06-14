import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { News } from 'src/app/core/models/news.model';
import { NewsService } from 'src/app/core/services/news/news.service';
import * as newsActions from '../actions/news.actions';

@Injectable()
export class NewsEffects {
  constructor(private actions$: Actions, private newsService: NewsService) {}

  getNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(newsActions.GET_NEWS),
      exhaustMap((action) =>
        this.newsService
          .getAllNews()
          .pipe(
            map((response: News[]) =>
              newsActions.getNewsSuccess({ news: response })
            )
          )
      )
    )
  );
}
