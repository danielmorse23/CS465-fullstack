import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrl: './trip-listing.component.css'
})
export class TripListingComponent implements OnInit {

  trips: Trip[] = [];

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.tripDataService.getTrips().subscribe((value: any) => {
      this.trips = value;
      console.log('There are ' + this.trips.length + ' trips available.');
    });
  }

  addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}