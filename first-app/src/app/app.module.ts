import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChildComponent } from './components/demo/child/child.component';
import { DirectiveDemoComponent } from './components/demo/directive-demo/directive-demo.component';
import { LifeCycleComponent } from './components/demo/life-cycle/life-cycle.component';
import { ObservableDemoComponent } from './components/demo/observable-demo/observable-demo.component';
import { ParentComponent } from './components/demo/parent/parent.component';
import { PipeDemoComponent } from './components/demo/pipe-demo/pipe-demo.component';
import { NewTodoComponent } from './components/todos/new-todo/new-todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { CommentFormComponent } from './components/users/comment-form/comment-form.component';
import { CommentComponent } from './components/users/comment/comment.component';
import { UserImgComponent } from './components/users/user-img/user-img.component';
import { UserInfoComponent } from './components/users/user-info/user-info.component';
import { UsersComponent } from './components/users/users.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { LoggerInterceptor } from './services/interceptor/logger.interceptor';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routing';
import { HeaderComponent } from './components/header/header.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseItemComponent } from './components/expenses/expense-item/expense-item.component';

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
    ObservableDemoComponent,
    TodosComponent,
    NewTodoComponent,
    HeaderComponent,
    ExpensesComponent,
    ExpenseItemComponent,
  ],
  imports: [
    // Modules - Built-in | Custom Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true,
    },
  ], // Services
  bootstrap: [AppComponent],
})
export class AppModule {}
