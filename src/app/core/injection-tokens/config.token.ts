import { InjectionToken } from '@angular/core';
import { Config } from '../../../environments/config.interface';
console.log(new InjectionToken<Config>('CONFIG_TOKEN'));
export const CONFIG_TOKEN = new InjectionToken<Config>('CONFIG_TOKEN');
