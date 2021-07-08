import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Add an item in localStorage
   * @param key The storage key (id) to identify the object
   * @param value The data to store in the localStorage
   * @param options Options
   */
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Retreive an item from the localStorage
   * @param key The storage key of the item to retreive
   */
  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  /**
   * Remove an item from the localStorage
   * @param key The storage key of the item to delete
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
