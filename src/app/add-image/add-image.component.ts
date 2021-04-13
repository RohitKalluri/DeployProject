import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  constructor(private httpClient: HttpClient,private route:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('SessionUser')=="null"){
      alert('Please login/signup to access our website services!!!')
      this.route.navigate([''])
    }
    this.name=localStorage.getItem('SessionUser');
  }

  tag!:any
  name!:any
  selectedFile!: File;
  url ="https://cdn4.iconfinder.com/data/icons/photos-and-pictures/60/camera_sign_square_copy-512.png";
  formTemplate = new FormGroup(
    {
      caption : new FormControl(''),
      imageUrl :new FormControl('')
    }
    
  )

    //Gets called when the user selects an image
    public onFileChanged(event:any) {
      //Select File
      this.selectedFile = event.target.files[0];
      if(event.target.files)
      {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload =(event:any)=>
        {
          this.url=event.target.result;
        }
      }
    }

    public onUpload(){
     // console.log(this.selectedFile)
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://onlinepicturemanagerbackend-env.eba-5zhbabbn.us-east-2.elasticbeanstalk.com/image/addImage/'+this.tag, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          alert('Image uploaded!!')
          this.route.navigate(['home'])
        } else {
          alert('Image not uploaded!!')
        }
      }
      );

    }

}
