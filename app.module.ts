import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component'
import { HttpClientModule } from '@angular/common/http';
import { GayathriComponent } from './gayathri/gayathri.component';
import { ReshmaComponent } from './reshma/reshma.component';
import { ServiceComponent } from './gayathri/service/service.component';




@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GayathriComponent,
    ReshmaComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
