import { ApiReturn } from '../../models/api-return.model';

export class ApiServiceMock<Type> {
  private apiName = 'name';

  protected listData: Type[] = [];

  protected data!: Type;

  get(): Promise<ApiReturn<Type>> {
    return new Promise((resolve) => resolve({ data: this.data }));
  }

  getAll(): Promise<ApiReturn<Type[]>> {
    return new Promise((resolve) => resolve({ data: this.listData }));
  }

  post(url: string, date: any): Promise<ApiReturn<Type>> {
    return new Promise((resolve) => resolve({
      data: this.data,
    }));
  }

  put(): Promise<Type> {
    return new Promise((resolve) => resolve(this.data));
  }

  delete(): Promise<Type> {
    return new Promise((resolve) => resolve(this.data));
  }
}
