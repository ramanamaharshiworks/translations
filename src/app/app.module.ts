import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { SideMenuComponent } from './home/side-menu/side-menu.component';
import { TopMenuComponent } from './home/top-menu/top-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { TopCarouselComponent } from './home/top-carousel/top-carousel.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslationSelectionComponent } from './home/translation-selection/translation-selection.component';
import { BioContentComponent } from './home/bio-content/bio-content.component';
import { ParagraphComponent } from './home/paragraph/paragraph.component';
import { ParagraphListPageComponent } from './home/paragraph-list-page/paragraph-list-page.component';
import { TranslationListPageComponent } from './home/translation-list-page/translation-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopMenuComponent,
    HomeContentComponent,
    SideMenuComponent,
    TopMenuComponent,
    TopCarouselComponent,
    TranslationSelectionComponent,
    BioContentComponent,
    ParagraphComponent,
    ParagraphListPageComponent,
    TranslationListPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
