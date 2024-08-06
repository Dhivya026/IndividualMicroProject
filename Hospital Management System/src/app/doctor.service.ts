import { Injectable } from '@angular/core';
import { Doctor } from './model/Doctor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService{
  url :string;
  doctor : Doctor;
  doctorArr : Doctor[];

  constructor(private http:HttpClient) {
    this.url="http://localhost:3005/docters";
    this.doctor = new Doctor();
    this.doctorArr =  [];
    
  

   }
  insertDoctor(doctor : Doctor){
    this.http.post<Doctor>(this.url,doctor).subscribe();
    return "Doctor Details Added";
  }
  upadteDoctor(doctor : Doctor){
    this.http.put<Doctor>(this.url+"/"+doctor.id,doctor).subscribe();
    return "Doctor Details Updated";
  }
  deleteDoctor(docId : number){
    this.http.delete<Doctor>(this.url+"/"+docId).subscribe();
    return "Doctor Details Deleted";
  }
  findDoctor(docId : number){
    this.http.get<Doctor>(this.url+"/"+docId).subscribe(data => this.doctor = data);
    return this.doctor;
   }
   findAllDoctor(){
    this.http.get<Doctor[]>(this.url).subscribe(data => this.doctorArr = data);

    return this.doctorArr;
   }
  

}
