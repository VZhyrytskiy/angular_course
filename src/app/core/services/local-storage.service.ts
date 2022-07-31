import { InjectionToken } from '@angular/core';

export class LocalStorageService {
  private STORAGE = 'ang_app_storage';

  getData() {
    return JSON.parse(window.localStorage.getItem(this.STORAGE) || '');
  }

  setData(payload: any) {
    window.localStorage.setItem(this.STORAGE, JSON.stringify(payload));
  }
}

export const storageInstance = new LocalStorageService();

export const LocalStorageToken = new InjectionToken<LocalStorageService>('LocalStorageService');
