import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: ':username', component: MainPageComponent },
  { path: ':username/:postId', component: CommentPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
