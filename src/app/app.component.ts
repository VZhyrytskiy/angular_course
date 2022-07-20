import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;

  constructor(private readonly renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.title.nativeElement, 'innerText', 'Заголовок для приложения из класса');
  }

}
