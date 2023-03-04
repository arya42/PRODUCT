import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 

  }
  getproducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }
  addproducts(data:any){
    return this.http.post<any>('https://dummyjson.com/products/add',data);
  }
}
