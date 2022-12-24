import { FaceSnapDetailsComponent } from './components/face-snap-details/face-snap-details.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import  { Routes } from "@angular/router";
import { FaceSnapListComponent } from "./components/face-snap-list/face-snap-list.component";

const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path: 'facesnaps', component: FaceSnapListComponent},
    {path:'facesnaps/:id', component: FaceSnapDetailsComponent}
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})
export class AppRoutingModule {

}