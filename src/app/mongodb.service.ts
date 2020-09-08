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
    return this.http.get(this.apiURL+'/app_stat?secret='+this.apiKEY+'&plant='+impianto);
  }
  public getHistory(impianto: string): Observable<Object> {
    return this.http.get(this.apiURL+'/app_hist?secret='+this.apiKEY+'&plant='+impianto);
  }
  public setRefill(impianto: string): Observable<Object> {
    return this.http.get(this.apiURL+'/app_refill?secret='+this.apiKEY+'&plant='+impianto);
  }
  public getResidual(impianto: string): Observable<Object> {
    return this.http.get(this.apiURL+'/app_residual?secret='+this.apiKEY+'&plant='+impianto);
  }
}
