import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformBrowser, Location } from '@angular/common';
import { LOG_CONFIG } from '../tokens/logConfig';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor(
    @Optional() @Inject(LOG_CONFIG) private logConfig: any,
    @Inject(PLATFORM_ID) private platformId: any,
    private location: Location,
  ) {
    console.log(this.logConfig);
  }

  logMsg(msg: any, label?: string) {
    label = label ? `${label} ` : '';
    if (!isPlatformBrowser(this.platformId) || (isPlatformBrowser(this.platformId) && !this.logConfig?.production)) {
      console.log(`${label}${msg}`);
    }
  }

  logLoad(component?: string) {
    this.logMsg(`${this.getPageURL()}${component ? ' - ' + component : ''}`, 'LOAD');
  }

  log404(component?: string) {
    this.logMsg(`${this.getPageURL()}${component ? ' - ' + component : ''}`, '404');
  }

  private getSiteUrl(): string {
    const baseUrl = this.logConfig?.siteUrl.endsWith('/') ? this.logConfig?.siteUrl.substring(0, this.logConfig?.siteUrl.length - 1) : this.logConfig?.siteUrl;
    return `${baseUrl}`;
  }

  getPageURL() {
    return `${this.getSiteUrl()}${this.location.path()}`;
  }
}
