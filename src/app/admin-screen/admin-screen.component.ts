import { Component, OnInit } from '@angular/core';
import { ApplicantDetails } from '../models/applicantDetails';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.css']
})
export class AdminScreenComponent implements OnInit{
  applicantwithoutMentorList : ApplicantDetails[] = [];
  evaluators = new FormControl('',[Validators.maxLength(3),Validators.minLength(3)]);

  mentorNameList : string[] = ["A", "B", "C"];
  ngOnInit(): void {
    this.getAllApplicantsWithoutMentors();
  }

  getAllApplicantsWithoutMentors(){

  }



}
