import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email!:String
  pass!:String
  userName!:string
  mobileNumber!:String


  constructor(private route:Router,private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  public postData(){
    this.httpClient.post('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/signup',{
      email:this.email,
      password:this.pass,
      username:this.userName,
      mobileNumber:this.mobileNumber,
      active:1,
      role:"user"
    },{ observe: 'response' })
    .subscribe((response) => {
      if(response.body==true){
        localStorage.setItem('SessionUser',this.userName);
        this.route.navigate(['home'])
      }
      else
        alert('Invalid Credentials!! ')
    })
}

}
