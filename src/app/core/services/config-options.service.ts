import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private config!: ConfigModel;

  setConfig(options: Partial<ConfigModel>) {
    this.config = { ...this.config, ...options };
  }

  getConfig(): ConfigModel | null {
    return this.config || null;
  }

  setConfigProperty(key: string, value: any) {
    this.config[key as keyof ConfigModel] = value;
  }
}
