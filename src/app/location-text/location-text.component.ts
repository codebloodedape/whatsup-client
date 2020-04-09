import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-location-text',
  templateUrl: './location-text.component.html',
  styleUrls: ['./location-text.component.css']
})
export class LocationTextComponent implements OnInit {

  location:string;
  lastLocation: string;

  locationDisplayText: string;

  readonly textCursor: string = '|';
  @ViewChild('locationInputField') locationInputField: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.location = 'the world';
    this.locationDisplayText = this.location;
  }

  locationTextSelected() {
    this.lastLocation = this.location;
    this.location = ''
    this.locationDisplayText = this.textCursor;

    this.locationInputField.nativeElement.focus();
  }

  onlocationInputFieldTextChange(event: any) { // without type info
    this.location = event.target.value;
    this.locationDisplayText = this.location + this.textCursor;
  }

  updateLocationIfEmpty() {
    if (this.location === '') {
      this.locationDisplayText = this.location = this.lastLocation;
    }
    else {
      this.locationDisplayText = this.location;
    }
  }

}
