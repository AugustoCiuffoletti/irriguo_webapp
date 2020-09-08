import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class WeatherBitService {

  apiKEY: string = 'f2e72c0506fe42ca90fe869aeca6b59a'
  apiURL: string = 'https://api.weatherbit.io/v2.0/current';

  constructor(private http: HttpClient) {}
    
  public getMeteo(CityName: string): Observable<Object> {
    return this.http.jsonp(this.apiURL+'?key='+this.apiKEY+'&city='+CityName, 'callback');
  }
}
