import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualMentorComponent } from './actual-mentor/actual-mentor.component';
import { AddProjectComponentComponent } from './add-project-component/add-project-component.component';

const routes: Routes = [
  { path : '', redirectTo: 'projects', pathMatch: "full" },
  { path : 'projects', component: ActualMentorComponent },
  
  
  { path : 'add-project', component:AddProjectComponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
