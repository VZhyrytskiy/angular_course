import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {

  constructor(private readonly location: Location) { }

  public backClicked() {
    this.location.back();
  }

}
