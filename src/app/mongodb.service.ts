import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MongodbService {
  
  apiKEY: string = 'ft6T8-=9IX5CwT';
  apiURL: string = 'https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/irriguo2019_app-mnhjy/service/Irriguo2019_db/incoming_webhook';


  constructor(private http: HttpClient) {}
  
  public getConfig(impianto: string): Observable<Object> {
    return this.http.get(this.apiURL+'/stat?secret='+this.apiKEY+'&plant='+impianto);
  }
  public getHistory(impianto: string): Observable<Object> {
    return this.http.get(this.apiURL+'/hist?secret='+this.apiKEY+'&plant='+impianto);
  }
  public setRefill(impianto: string): Observable<Object> {
    return this.http.get(this.apiURL+'/refill?secret='+this.apiKEY+'&plant='+impianto);
  }
  public getResidual(impianto: string): Observable<Object> {
    return this.http.get(this.apiURL+'/residual?secret='+this.apiKEY+'&plant='+impianto);
  }
  public getAuth(name:string, key: string): Observable<Object> {
    return this.http.get(this.apiURL+'/auth?secret='+this.apiKEY+'&name='+name+'&key='+key);
  } 
  public getPlants(): Observable<Object> {
    return this.http.get(this.apiURL+'/plants?secret='+this.apiKEY);
  }
}
