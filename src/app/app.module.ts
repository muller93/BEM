import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HostContextExampleComponent } from './host-context-example/host-context-example.component';
import { HostExampleComponent } from './host-example/host-example.component';
import { HostChildrenComponent } from './host-example/host-children/host-children.component';
import { ButtonComponent } from './button/button.component';
import { SimpleExampleComponent } from './simple-example/simple-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HostContextExampleComponent,
    HostExampleComponent,
    HostChildrenComponent,
    ButtonComponent,
    SimpleExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
