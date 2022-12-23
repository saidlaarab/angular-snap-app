import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import  { Routes } from "@angular/router";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";

const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path: 'facesnaps', component: FaceSnapListComponent}
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class AppRoutingModule {

}