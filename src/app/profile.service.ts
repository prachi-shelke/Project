import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'https://api.example.com/profiles'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getProfiles(): Observable<any[]> {
    return of(mockProfiles); // Import 'of' from 'rxjs' to return an observable
  }
}

const mockProfiles: any[] = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'john-doe.jpg',
    description: 'Software Developer',
    address: '123 Main St, Cityville'
  },
  // Add more mock profiles as needed

];

