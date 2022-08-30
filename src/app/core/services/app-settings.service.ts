import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, map, first, catchError, throwError, EMPTY, BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

export interface IAppSettings {
  appName: string;
  sortOptions: {
    field: string;
    direction: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private readonly baseUrl = 'http://localhost:4200/assets/app-settings.json';

  private readonly defaultSettings:IAppSettings = {
    "appName": "Test App Name",
    "sortOptions": {
      "field": "price",
      "direction": "false"
    }
  };

  private sortOptions$$ = new BehaviorSubject(this.defaultSettings);
  public sortOptions$ = this.sortOptions$$.asObservable();


  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly http: HttpClient
  ) { }

  public getSettings(): void {

    let localStorageData = this.localStorageService.getData();
    if (localStorageData &&
      Object.keys(localStorageData).length > 0 &&
      Object.getPrototypeOf(localStorageData) === Object.prototype) {
      this.sortOptions$$.next(localStorageData);
      return;
    }

    this.http.get<object>(this.baseUrl)
      .pipe(
        retry(2),
        first(),
        map(settings => {
          if (!settings ||
            Object.keys(settings).length === 0 ||
            Object.getPrototypeOf(settings) !== Object.prototype
          ) {
            this.localStorageService.setData(this.defaultSettings);
            this.sortOptions$$.next(this.defaultSettings);
            return;
          }

          this.localStorageService.setData(settings);
          this.sortOptions$$.next(settings as IAppSettings);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 404) {
            this.localStorageService.setData(this.defaultSettings);
            this.sortOptions$$.next(this.defaultSettings);
            return EMPTY;
          }
          return throwError(() => new Error('Something bad happened; please try again later.'));
        }),
      )
      .subscribe();
  }
}
