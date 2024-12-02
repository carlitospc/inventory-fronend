import { HttpClient } from '@angular/common/http';
import { encapsulateStyle } from '@angular/compiler';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1"

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
/**
 * get all categories
 * @returns 
 */
  getCategories() {

    const endPoint = `${base_url}/categories`;
    return this.http.get(endPoint)
  }
}
