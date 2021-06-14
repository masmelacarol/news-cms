import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromRoot from '../../../redux/selectors/news.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  news$ = this.store.pipe(select(fromRoot.getNews));
  images: String[] = [];

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    for (let index = 1; index < 6; index++) {
      this.images.push(`https://picsum.photos/id/${index}/300/300`);
    }
  }
}
