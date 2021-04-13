import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminscreenComponent } from './adminscreen/adminscreen.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import {MatCardModule} from '@angular/material/card';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { AddImageComponent } from './add-image/add-image.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { AuthguardServiceService } from "./authguard-service.service";
import { ProfileComponent } from './profile/profile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommentsComponent } from './comments/comments.component';
import {ScrollingModule } from '@angular/cdk/scrolling'
import {MatTooltipModule} from '@angular/material/tooltip';
import { AdmincommentComponent } from './admincomment/admincomment.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminscreenComponent,
    HomeComponent,
    TestingComponentComponent,
    AddImageComponent,
    UploadImageComponent,
    ProfileComponent,
    CommentsComponent,
    AdmincommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    ScrollingModule,
    MatTooltipModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
