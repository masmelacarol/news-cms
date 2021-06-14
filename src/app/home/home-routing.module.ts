import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardNewComponent } from './components/card-new/card-new.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'news/:id',
    component: CardNewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
