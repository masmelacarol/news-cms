import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { getNews } from '../redux/actions/news.actions';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild(MatSidenav)
  sideNav!: MatSidenav;

  constructor(private readonly store: Store) {
    this.store.dispatch(getNews());
  }

  ngOnInit(): void {}

  toggleClick() {
    this.sideNav.mode = 'over';
    this.sideNav.toggle();
  }
}
