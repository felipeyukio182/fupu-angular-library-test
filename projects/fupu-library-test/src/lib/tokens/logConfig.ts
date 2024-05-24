import { InjectionToken } from "@angular/core";

export interface LogConfig {
  production: boolean;
  siteUrl: string;
}

export const LOG_CONFIG = new InjectionToken<LogConfig>('logConfig');
