import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ParentComponent } from './components/demo/parent/parent.component';
import { ChildComponent } from './components/demo/child/child.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    // Components | Directives | Pipes
    AppComponent,
    UsersComponent,
    ParentComponent,
    ChildComponent,
    UserImgComponent,
    UserInfoComponent,
    LifeCycleComponent,
  ],
  imports: [
    // Modules - Built-in | Custom Modules
    BrowserModule,
    FormsModule,
  ],
  providers: [], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
