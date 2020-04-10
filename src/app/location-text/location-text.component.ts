import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-location-text',
  templateUrl: './location-text.component.html',
  styleUrls: ['./location-text.component.css']
})
export class LocationTextComponent implements OnInit {

  location:string;
  lastLocation: string;

  locationDisplayText: string;

  locationSuggestions: Array<Place> = [];

  locationTextFieldSelected: boolean = false;

  defaultPlace: Place;

  readonly textCursor: string = '|';
  @ViewChild('locationInputField') locationInputField: ElementRef;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.defaultPlace = new Place();
    this.defaultPlace.name = "the World";
    this.defaultPlace.id = 1;

    this.locationDisplayText = this.location = this.defaultPlace.name;

    // this.locationSuggestions.push(this.defaultPlace);
  }

  locationTextSelected() {
    this.locationTextFieldSelected = true;
    this.lastLocation = this.location;
    this.location = ''
    this.locationDisplayText = this.textCursor;
    this.locationInputField.nativeElement.focus();
  }

  onlocationInputFieldTextChange(event: any) { // without type info
    this.location = event.target.value;
    this.locationDisplayText = this.location + this.textCursor;

    this.locationSuggestions = [];
    this.locationSuggestions.push(this.defaultPlace);

    if (this.location.length > 2) {
      // Give suggestion

      this.httpService.get('/suggestions?locationText=' + this.location).subscribe(
        (response: Array<Place>) => {
          // console.log(response)
          this.locationSuggestions = [this.defaultPlace, ...response];
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  onlocationInputFieldTextFocusOut() {
    if (this.location === '') {
      this.locationDisplayText = this.location = this.lastLocation;
    }
    else {
      this.locationDisplayText = this.location;
    }

    // hide suggestion
    // this.locationTextFieldSelected = false;
  }

  placeSelected(locationSuggestion: Place) {
    this.locationDisplayText = this.location = locationSuggestion.name;
    // hide suggestion
    this.locationTextFieldSelected = false;
  }
}

class Place {
  name: string;
  id: number;
}
