import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { KeyValue } from '../../models/generic/key-value.model';
import { ApiReturn } from '../../models/api-return.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  data!: T;

  listData!: T[];

  protected codeTranslate!: string;

  protected path = '';

  protected basePath = '';

  constructor(protected http: HttpClient) {}

  getById(id?: string): Observable<ApiReturn<T>> {
    return this.http.get<ApiReturn<T>>(`${this.basePath}${this.path}/${id}`, this.buildHeader());
  }

  get(data?: KeyValue): Observable<ApiReturn<T[]>> {
    return this.http.get<ApiReturn<T[]>>(`${this.basePath + this.path}`, this.buildHeader(data, 'params')).pipe(
      tap((result) => {
        if (result.data) {
          this.listData = result.data;
        }
      }),
    );
  }

  post(path: string, data?: T): Observable<ApiReturn<T>> {
    return this.http.post<ApiReturn<T>>(this.basePath + this.path + path, data, this.buildHeader());
  }

  put(path: string, data?: T): Observable<ApiReturn<T>> {
    return this.http.put<ApiReturn<T>>(this.basePath + this.path + path, data, this.buildHeader());
  }

  patch(path: string, data?: T): Observable<ApiReturn<T>> {
    return this.http.patch<ApiReturn<T>>(this.basePath + this.path + path, data, this.buildHeader());
  }

  delete(path: string): Observable<any> {
    return this.http.delete(this.basePath + this.path + path, this.buildHeader());
  }

  buildHeader(data?: KeyValue | T, variable: 'body' | 'params' = 'body') {
    return {
      [variable]: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
  }
}
