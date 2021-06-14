import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { News } from 'src/app/core/models/news.model';
import * as fromRoot from '../../../redux';

@Component({
  selector: 'app-card-new',
  templateUrl: './card-new.component.html',
  styleUrls: ['./card-new.component.scss'],
})
export class CardNewComponent implements OnInit {
  cardNew: News | undefined;
  news$ = this.store.pipe(select(fromRoot.getNews));
  images: String[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly store: Store
  ) {
    this.getImages();
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.news$.subscribe((newsItems) => {
        this.cardNew = newsItems.news.find((item) => item.id === id);
      });
    });
  }

  ngOnInit(): void {}

  getImages() {
    for (let index = 0; index < 7; index++) {
      this.images.push(`https://picsum.photos/id/${index}/800/200`);
    }
  }
  isNumber(str: string): number {
    return parseInt(str);
  }
}
