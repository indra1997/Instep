import { Component } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewAddProjectComponent } from '../dialog-overview-add-project/dialog-overview-add-project.component';

@Component({
  selector: 'app-add-project-component',
  templateUrl: './add-project-component.component.html',
  styleUrls: ['./add-project-component.component.css']
})
export class AddProjectComponentComponent {
  projectArray: ProjectDetails[] = [{projectId:12345, projectTitle:"Nothing",description:"bfionxobbnxo bxnogbi", requiredSkills:"Java", location:"Pune", status:"Approved", mentorId:4321 },{projectId:67890, projectTitle:"Something",description:"bbnxo bxnogbi5747", requiredSkills:"Angular", location:"Mumbai", status:"Pending", mentorId:4321 },{projectId:11123, projectTitle:"Current",description:"bfionxvbxfbobbnxo bxnogbi", requiredSkills:"React", location:"Banglore", status:"Approved", mentorId:44331 },{projectId:13245, projectTitle:"Flash",description:"Barryxobbnxo bxnogbi", requiredSkills:"Algorithms", location:"Seattle", status:"Approved", mentorId:5432 },{projectId:64567, projectTitle:"Anything",description:"sbhohslg sgobsgb", requiredSkills:"Mongodb", location:"Kolkata", status:"Approved", mentorId:4321 },{projectId:12345, projectTitle:"Nothing",description:"bfionxobbnxo bxnogbi", requiredSkills:"Java", location:"Pune", status:"Approved", mentorId:4321 }];
  project = {projectId:0, projectTitle:"Nothing",description:"Nothing", requiredSkills:"Nothing", location:"Nothing", status:"Nothing", mentorId:0 };

  constructor(public dialog: MatDialog) {
    
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewAddProjectComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result==undefined){
        this.project = {projectId:0, projectTitle:"Nothing",description:"Nothing", requiredSkills:"Nothing", location:"Nothing", status:"Nothing", mentorId:0 };
      }else{
        this.project = result;
        this.project.status = "Pending";
        this.project.mentorId = 11111;
      }
      
    });
  }

}
