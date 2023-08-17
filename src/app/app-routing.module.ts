import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component'; // Update with your component paths
import { ProfileDetailComponent } from './profile-detail/profile-details.component'; // Update with your component paths
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
  { path: 'map', component: MapComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}