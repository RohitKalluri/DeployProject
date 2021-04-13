import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name!:string
  pass!:string
  constructor(private route:Router,private httpClient:HttpClient) { }

  username!:any
  data!:any
  ngOnInit(): void {
    localStorage.setItem('SessionUser',"null");
  }

  public postData(){

      if(this.name==='admin'&&this.pass==='admin'){
        localStorage.setItem('SessionUser',"admin");
        this.route.navigate(['admin'])
      }


      else{


        this.httpClient.post('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/admin/getUserName',{
          email:this.name,
          password:this.pass
        },{observe:"response"})
        .subscribe(
          (response) => {
            this.data=response.body;
            this.username=this.data.username
            localStorage.setItem('SessionUser',this.username);
          }
        )




        this.httpClient.post('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/login',{
          email:this.name,
          password:this.pass
        },{ observe: 'response' })
        .subscribe((response) => {
          if(response.body==true){
            this.route.navigate(['home']);
          }
          else
            alert('Invalid Credentials!! ')
        })
      }
  }
}
