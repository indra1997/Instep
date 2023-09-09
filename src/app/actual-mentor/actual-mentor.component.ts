import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectDetails } from '../models/projectDetails';



@Component({
  selector: 'app-actual-mentor',
  templateUrl: './actual-mentor.component.html',
  styleUrls: ['./actual-mentor.component.css']
})
export class ActualMentorComponent implements OnInit{
  changeCus: boolean = false;
  addressForm !: FormGroup;
  mentorProjects !: ProjectDetails[];
  constructor(private router:Router, private formBuilder: FormBuilder, private http : HttpClient){

  }
  ngOnInit(): void {
    this.http.get<ProjectDetails[]>("http://localhost:8080/get-project-details").subscribe(
      data => {
        this.mentorProjects = data;
 
      },
      errorResponse =>{
        
      }
    );
  }

  addProject(){
    this.router.navigate(['/add-project']);
  }

}
