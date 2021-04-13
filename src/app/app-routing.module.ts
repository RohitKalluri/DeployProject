import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import { AuthenticationGuard } from './authentication.guard';
import { AuthguardServiceService } from './authguard-service.service';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import {TestingComponentComponent} from './testing-component/testing-component.component'
import {AddImageComponent} from './add-image/add-image.component'
import {AdmincommentComponent} from './admincomment/admincomment.component'
const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"admin",component:AdminscreenComponent},
  {path:'home',component: HomeComponent },
  {path:'addImage',component:AddImageComponent},
  {path:'profile',component:ProfileComponent},
  {path:'comments',component:CommentsComponent},
  {path:'admincomment',component:AdmincommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   