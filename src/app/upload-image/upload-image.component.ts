import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  url ="https://cdn4.iconfinder.com/data/icons/photos-and-pictures/60/camera_sign_square_copy-512.png";
  selectedFile ="null";
  formTemplate = new FormGroup(
    {
      caption : new FormControl(''),
      imageUrl :new FormControl('')
    }
    
  )
  onsubmit()
    {
      console.log(this.formTemplate.value);
      const uploadImageData = new FormData();  
    }
    onFileSelected(event:any)
    {
      console.log(event);
      if(event.target.files)
      {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload =(event:any)=>
        {
          this.url=event.target.result;
        }
      }
      this.selectedFile = event.target.files[0];
    }
    onUplaod()
    {

    }

}
