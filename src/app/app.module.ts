import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FilterPipe } from "./filter.pipe";



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    HttpModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
