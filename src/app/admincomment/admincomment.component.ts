import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admincomment',
  templateUrl: './admincomment.component.html',
  styleUrls: ['./admincomment.component.css']
})
export class AdmincommentComponent implements OnInit {

  constructor(private httpClient: HttpClient,private route:Router) { }
  isVisible=true;
  commentsArray:any=[];
  ngOnInit(): void {
    if(localStorage.getItem('SessionUser')=='admin'){
      this.isVisible=false;
    }
   this.httpClient.get('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/comment/', { observe: 'response' })
      .subscribe((response) => {
        this.commentsArray=response.body
      }
      );

  }

}
