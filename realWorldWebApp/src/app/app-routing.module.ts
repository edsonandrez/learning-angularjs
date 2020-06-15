import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ArticleListComponent} from './article-list/article-list.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: '', component: ArticleListComponent },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
