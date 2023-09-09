import { Component, Inject, OnInit } from '@angular/core';
import { MentorDetails } from '../models/mentorDetails';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import {NgIf} from '@angular/common';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

import {FormBuilder, Validators, FormGroup} from "@angular/forms";





@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.component.html',
  styleUrls: ['./add-mentor.component.css']
})
export class AddMentorComponent implements OnInit{
  mentor: MentorDetails = {mentorId:0,
    mentorName:"",
    email: "",
    location: "",
    unit: "",
    numberOfProjects:0, status:""};


  constructor(public dialog: MatDialog) {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  mentorArray: MentorDetails[] = [
    {mentorId:122,
    mentorName:"Indrajit",
    email: "infts@fg.com",
    location: "Masur",
    unit: "STG",
    numberOfProjects:1000, status:"Approved"},
    {mentorId:123,
      mentorName:"Rushikesh",
      email: "inffhs@fg.com",
      location: "Ichalkaranji",
      unit: "STG",
      numberOfProjects:100,status:"Approved"},
      {mentorId:124,
        mentorName:"Mrunank",
        email: "indzfts@fg.com",
        location: "Mumbai",
        unit: "STG",
        numberOfProjects:10,status:"Approved"},
        {mentorId:125,
          mentorName:"Ruturaj",
          email: "infxfts@fg.com",
          location: "Thane",
          unit: "STG",
          numberOfProjects:1,status:"Approved"},
          {mentorId:125,
            mentorName:"Ashutosh",
            email: "inzdffts@fg.com",
            location: "Pune",
            unit: "STG",
            numberOfProjects:-1,status:"Approved"}];

    openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result==undefined){
        this.mentor = {mentorId:0,
          mentorName:"ha",
          email: "ha",
          location: "ha",
          unit: "ha",
          numberOfProjects:0, status:""};
      }else{
        this.mentor = result;
      }
      
    });
  }
}


