import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SharedModule } from './shared/shared.module';
import { ItemCardComponent } from './components/landing-page/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ItemCardComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
