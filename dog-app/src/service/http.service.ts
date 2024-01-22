import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  
  breedsListURL ="/breeds/list";

  getBreedsList(){
    return this.http.get(this.breedsListURL);
  }

  getBreedsListByPage(pageNumber: number, pageSize: number){
    return this.http.get(`${this.breedsListURL}?offset=${pageNumber*pageSize}&size=${pageSize}`);
  }

  getBreedImage(breed: string){
    return this.http.get(`breeds/${breed}/image`);
  }


}
