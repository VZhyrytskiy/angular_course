import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ConstantLiteral } from '../core/models/config';
import { ConstantLiteralToken } from '../core/services/constant.service';
import { GeneratorToken } from '../core/services/generator.service';
import { LocalStorageService, LocalStorageToken } from '../core/services/local-storage.service';

enum Level {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Expert = 'Expert'
}

export const categoriesOptions = () => [
  { type: Level.Beginner, option: Level.Beginner },
  { type: Level.Intermediate, option: Level.Intermediate },
  { type: Level.Expert, option: Level.Expert },
];

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

  constructor(
    @Optional() @Inject(ConstantLiteralToken) private cl: ConstantLiteral,
    @Optional() @Inject(GeneratorToken) private rnd: string,
    @Optional() @Inject(LocalStorageToken) private ls: LocalStorageService
  ) { }

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
