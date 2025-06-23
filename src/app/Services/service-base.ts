export class ServiceBase {
  protected static baseURL = 'https://fakestoreapi.com/products'; 

  protected static getURL(path: string) {
    return `${this.baseURL}${path}`;
  }
}