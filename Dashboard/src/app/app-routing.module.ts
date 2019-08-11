import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { MyplanComponent } from './myplan/myplan.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'goals' , component: GoalsComponent},
  {path:'myplan' , component: MyplanComponent},
  {path:'myprofile', component: MyprofileComponent},
  {path:'' , component: MyplanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [GoalsComponent,MyplanComponent,MyprofileComponent]
