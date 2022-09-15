import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';

const routes: Routes = [
  { path:'projects/:name',component:ProjectComponent },
  { path:'',redirectTo:'/',pathMatch:'full' },
  { path:'**',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
