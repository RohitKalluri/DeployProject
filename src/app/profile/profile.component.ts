import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data:any=[]
  username!:any
  constructor(private httpClient: HttpClient,private route:Router) { }
  
  ngOnInit(): void {
    if(localStorage.getItem('SessionUser')=="null"){
      alert('Please login/signup to access our website services!!!')
      this.route.navigate([''])
    }
    this.username=localStorage.getItem('SessionUser')
    this.httpClient.get('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/image/profile/'+this.username,{observe:"response"})
     .subscribe(
       (response) => {
          this.data=response.body
          for(var i=0;i<this.data.length;i++){
            this.data[i].image='data:image/jpeg;base64,' + this.data[i].image;
          }
       }
     )
  }

}
