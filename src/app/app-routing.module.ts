import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ParagraphListPageComponent } from './home/paragraph-list-page/paragraph-list-page.component';
import { TranslationListPageComponent } from './home/translation-list-page/translation-list-page.component';

const routes: Routes = [
  {
    path: ":name/:translation",
    component: ParagraphListPageComponent
  }, {
    path: ":name",
    component: TranslationListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
