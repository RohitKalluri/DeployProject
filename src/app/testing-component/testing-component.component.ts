import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-testing-component',
  templateUrl: './testing-component.component.html',
  styleUrls: ['./testing-component.component.css']
})
export class TestingComponentComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.httpClient.get('https://8080-fcffcdaacacafeccbeefdaacddcadfaffe.examlyiopb.examly.io/image/',{observe:"response"})
     .subscribe(
       (response) => {
         console.log(JSON.stringify(response.body))
         this.data=response.body
         for(var i=0;i<this.data.length;i++){
           this.data[i].image='data:image/jpeg;base64,' + this.data[i].image;
         }
       }
     )
  }

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  message!: string;
  imageName: any;
  tag!:any
  data:any=[];
  finaldata:any = [];
  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('https://8080-fcffcdaacacafeccbeefdaacddcadfaffe.examlyiopb.examly.io/image/addImage/'+this.tag, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          alert('Image uploaded!!')
        } else {
          alert('Image not uploaded!!')
        }
      }
      );


  }
}
