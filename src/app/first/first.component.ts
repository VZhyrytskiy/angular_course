import { Component, OnInit } from '@angular/core';

enum Level {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Expert = 'Expert'
}

interface Course {
  category: Level;
  price: number;
  isAvailable: boolean;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name!: string;
  description!: string;
  courses!: Course[];

  constructor() { }

  ngOnInit(): void {
    this.name = 'Angular Course #34';
    this.description = 'This training is about Google framework – Angular (version 14).';
    this.courses = [
      {
        category: Level.Beginner,
        price: 150,
        isAvailable: true
      },
      {
        category: Level.Expert,
        price: 550,
        isAvailable: false
      },
      {
        category: Level.Intermediate,
        price: 350,
        isAvailable: true
      },
      {
        category: Level.Beginner,
        price: 150,
        isAvailable: true
      },
    ];
  }

}
