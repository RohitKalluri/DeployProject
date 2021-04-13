import { Component, OnInit } from '@angular/core';
import { User } from 'app/user.model';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { jsDocComment } from '@angular/compiler';

@Component({
  selector: 'app-adminscreen',
  templateUrl: './adminscreen.component.html',
  styleUrls: ['./adminscreen.component.css']
})
export class AdminscreenComponent implements OnInit {
  data:any=[];
  username!:string; 
  email!:string;
  password!:string;
  mobileNumber!:string;
  role!:string;
  constructor(private route:Router,private httpClient:HttpClient) { }

  ngOnInit(): void {
    if(localStorage.getItem('SessionUser')!=="admin"){
      alert('Please login as admin to access Admin services!!!')
      this.route.navigate([''])
    }
    this.httpClient.get('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/admin/',{observe:'response'})
      .subscribe((response)=>{
        this.data=response.body;
        }
      )
  }

  u=new User("abc@gmail.com","abc","abcdef","123456789");

  editbutton(emailId:string){
    let en,ep,em,er,eno;
    for(let i=0;i<this.data.length;i++){
      if(this.data[i].email==emailId){
          em = this.data[i].email;
          ep = this.data[i].password;
          en = this.data[i].username;
          er = this.data[i].role;
          eno = this.data[i].mobileNumber;
          this.username = en;
          this.mobileNumber = eno;
          this.password = ep;
          this.email=em;
          const filterArray = this.data.filter((item:any) => item.email !== emailId);
          this.data = filterArray;
      }
    }
  }
  updatebutton(){
    
    this.httpClient.put('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/admin/userEdit/'+this.email,{
      email:this.email,
      password:this.password,
      username:this.username,
      mobileNumber:this.mobileNumber,
      active:1,
      role:"user"
    },{observe:"response"}).subscribe(
      (response) => {
        if(response.body==true){
          alert('User updated Succussfully!!')
          window.location.reload()
        }
        else
          alert('User not Updated!!')
      }
    )
  }

  deletebutton(emailId:String){
    var flag=null;
    this.httpClient.get('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/admin/delete/'+emailId,{observe:"response"})
     .subscribe(
       (response) => {
          if(response.body==true){
              alert('User deleted Succussfully!!')
              window.location.reload()
          }
          else
              alert('User not deleted!!')
       }
     )
  }
  
  addUserClick(){
    this.route.navigate(['signup'])
  }

}
