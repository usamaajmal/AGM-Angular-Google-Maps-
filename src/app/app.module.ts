import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3NYtp1NuKMKFjke-cr3GgfKMcjJ-A4a4'
      
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
