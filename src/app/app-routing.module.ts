import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from "./menu/navbar/navbar.component";
import { HomeComponent } from './menu/home/home.component';
import { LinkComponent } from './menu/link/link.component';


const routes: Routes = [
  { path: "navbar", component:NavbarComponent},
  { path: "home", component:HomeComponent},
  { path: "link", component: LinkComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
