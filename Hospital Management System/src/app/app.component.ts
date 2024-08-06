import { Component } from '@angular/core';
import { Doctor } from './model/Doctor';
import { DoctorService } from './doctor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  doctor : Doctor;
  result : string;
  doctorArr : Doctor[];
  flag : boolean;
  docSalary : any;
  docName : any;
  docId : any;
  docRole :any;
constructor(private doctorservice : DoctorService){
    this.doctor = new Doctor();
    this.result = "";
    this.doctorArr =[];
    this.flag=false;
  }
  insertDoctor(data:any){
    this.doctor.id=data.docId;
    this.doctor.docName=data.docName;
    this.doctor.docRole=data.docRole;
    this.doctor.docSalary=data.docSalary;
   
    this.result = this.doctorservice.insertDoctor(this.doctor);
  }
  updateDoctor(data:any){
    this.doctor.id=data.docId;
    this.doctor.docName=data.docName;
    this.doctor.docRole=data.docRole;
    this.doctor.docSalary=data.docSalary;
   
    this.result = this.doctorservice.upadteDoctor(this.doctor);
  }
  deleteDoctor(data:any){
    this.result = this.doctorservice.deleteDoctor(data.docId);

  }
  findDoctor(data:any){
    this.doctor = this.doctorservice.findDoctor(data.docId);
    this.result = this.doctor.id + " " + this.doctor.docName +" "+  this.doctor.docRole +" "+ this.doctor.docSalary  ;

  }
  findAllDoctor(){
    this.doctorArr=this.doctorservice.findAllDoctor();
    this.flag =true;
  }
}

