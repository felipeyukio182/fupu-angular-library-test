import { Injectable, makeStateKey, StateKey, TransferState } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferStateService {
  private keys = new Map<string, StateKey<string>>();

  constructor(private readonly transferState: TransferState) {}

  setKey(name: any, response: any | any[]) {
    let key = this.keys.get(name);
    if (!key) {
      key = makeStateKey(name);
      this.keys.set(name, key);
    }
    this.transferState.set(key, response);
  }

  getKey(name: string, defaultValue: any | any[] = null): any | any[] {
    let key = this.keys.get(name);
    if (!key) {
      key = makeStateKey(name);
      this.keys.set(name, key);
    }
    const response = this.transferState.get(key, defaultValue);
    return response;
  }

  remove(name: string) {
    let key = this.keys.get(name);
    if (!key) {
      key = makeStateKey(name);
      this.keys.set(name, key);
    }
    this.transferState.remove(key);
  }
}
