import { Component } from '@angular/core';
import { ProjectDetails } from '../models/projectDetails';

@Component({
  selector: 'app-admin-project-approval',
  templateUrl: './admin-project-approval.component.html',
  styleUrls: ['./admin-project-approval.component.css']
})
export class AdminProjectApprovalComponent {
  projectArray: ProjectDetails[] = [{projectId:12345, projectTitle:"Nothing",description:"bfionxobbnxo bxnogbi", requiredSkills:"Java", location:"Pune", status:"Approved", mentorId:4321 },{projectId:67890, projectTitle:"Something",description:"bbnxo bxnogbi5747", requiredSkills:"Angular", location:"Mumbai", status:"Pending", mentorId:4321 },{projectId:11123, projectTitle:"Current",description:"bfionxvbxfbobbnxo bxnogbi", requiredSkills:"React", location:"Banglore", status:"Approved", mentorId:44331 },{projectId:13245, projectTitle:"Flash",description:"Barryxobbnxo bxnogbi", requiredSkills:"Algorithms", location:"Seattle", status:"Approved", mentorId:5432 },{projectId:64567, projectTitle:"Anything",description:"sbhohslg sgobsgb", requiredSkills:"Mongodb", location:"Kolkata", status:"Approved", mentorId:4321 },{projectId:12345, projectTitle:"Nothing",description:"bfionxobbnxo bxnogbi", requiredSkills:"Java", location:"Pune", status:"Approved", mentorId:4321 }];
}
