import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // make sure to import your created components; don't need the .ts, this gets added automatically by webpack when bundled
import { ServersComponent } from './servers/servers.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent // list your created components here
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
