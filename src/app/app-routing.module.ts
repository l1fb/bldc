import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { AboutComponent } from "./about/about.component";
import { GivingComponent } from "./giving/giving.component";

const routes: Routes = [
  {
    path: ``,
    component: MainComponent
  }
  // {
  //   path: `/about`,
  //   component: AboutComponent
  // },
  // {
  //   path: `/giving`,
  //   component: GivingComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
