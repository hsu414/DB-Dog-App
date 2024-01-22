import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }
  
  breedsListURL ="/api/breeds/list";

  getBreedsList(){
    return this.http.get(this.breedsListURL);
  }

  getBreedsListByPage(pageNumber: number, pageSize: number){
    return this.http.get(`${this.breedsListURL}?offset=${pageNumber*pageSize}&size=${pageSize}`);
  }

  getBreedImage(breed: string){
    return this.http.get(`/api/breeds/${breed}/image`);
  }

  sendClickEvent(breed: string){
    return this.http.post(`/api/analytics/breeds/${breed}`,{event: "viewMore", id:breed},{headers: this.headers});
  }


}
