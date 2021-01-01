import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelephonesComponent } from './telephones/telephones.component';
import { AddTelephoneComponent } from './add-telephone/add-telephone.component';
import { UpdateTelephoneComponent } from './update-telephone/update-telephone.component';


const routes: Routes = [
  {path: "telephones", component : TelephonesComponent},
  {path: "add-telephone", component : AddTelephoneComponent},
  {path: "updateTelephone/:id", component : UpdateTelephoneComponent},
  { path: "", redirectTo: "telephones", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
