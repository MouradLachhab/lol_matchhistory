import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    SearchComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
