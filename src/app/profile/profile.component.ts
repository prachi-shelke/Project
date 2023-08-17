import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'; // Import the service to fetch profile data
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: any[] = []; // Array to hold profile data

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    // Fetch profile data from the service
    this.profileService.getProfiles().subscribe((data) => {
      this.profiles = data;
    });
  }

  // Function to handle the "Summary" button click event
  showSummary(profile: any): void {
    // Call a function to display the map with the selected profile's address
    // You'll implement this functionality later when working on the map component
  }

  

  navigateToProfileDetail(profileId: number): void {
    this.router.navigate(['/profile', profileId]);
  }

}