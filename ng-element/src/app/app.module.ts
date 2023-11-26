import { Injector, NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [ButtonComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const customElement = createCustomElement(ButtonComponent, {
      injector: this.injector,
    });
    customElements.define('app-button', customElement);
  }
}
