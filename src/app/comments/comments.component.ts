import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  isVisible=true;
  x=false;
  name!:any
  id!:any
  comment!:any
  constructor(private httpClient: HttpClient,private route:Router) { }
  data:any=[]
  commentsArray:any=[]
  ngOnInit(): void {
    if(localStorage.getItem('SessionUser')=="null"){
      alert('Please login/signup to access our website services!!!')
      this.route.navigate([''])
    }
    if(localStorage.getItem('SessionUser')=="admin"){
      this.isVisible=false;
    }
    if(localStorage.getItem('SessionUser')=="admin"){
      this.x=true;
    }
    this.name=localStorage.getItem('SessionUser')
    this.id=localStorage.getItem('imageId')
    this.httpClient.get('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/comment/',{observe:"response"})
    .subscribe(
      (response) => {
        this.data=response.body;
        for(let i=0;i<this.data.length;i++){
          if(localStorage.getItem('imageId')==this.data[i].imageid){
              this.commentsArray.push({
                id:this.data[i].id,
                name:this.data[i].username,
                text:this.data[i].comment
              })
          }
        }
      }
    )
  }
  

  public addCommentClicked(){
    this.httpClient.post('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/comment/image/'+this.comment,{id:this.id,name:this.name},{observe:"response"})
    .subscribe(
      (response) => {
        if(response.body==true){
          alert('comment added')
          window.location.reload()
        }
        else
          alert('comment not added')
      }
    )
  }
  public deleteClicked(commentid:any,commentName:any){
      if(commentName==this.name){
      this.httpClient.get('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/comment/image/delete/'+commentid,{observe:"response"})
      .subscribe(
        (response) => {
          if(response.body==true){
            alert('Comment Deleted Succussfully!!!')
            window.location.reload()
          }
        }
      )
      }else
        alert('This Operation is Invalid (Only Commented User can delete his comments)')
  }
  
}
