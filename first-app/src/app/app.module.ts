import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ParentComponent } from './components/demo/parent/parent.component';
import { ChildComponent } from './components/demo/child/child.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { DirectiveDemoComponent } from './components/demo/directive-demo/directive-demo.component';
import { CommentComponent } from './components/users/comment/comment.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/demo/pipe-demo/pipe-demo.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { CommentFormComponent } from './components/users/comment-form/comment-form.component';
import { AuthComponent } from './components/auth/auth.component';

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
    DirectiveDemoComponent,
    CommentComponent,
    HighlightDirective,
    PipeDemoComponent,
    ReversePipe,
    CountryCodePipe,
    FilterPipe,
    CommentFormComponent,
    AuthComponent,
  ],
  imports: [
    // Modules - Built-in | Custom Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
