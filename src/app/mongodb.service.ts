import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  
  apiKEY: string = 'hry609012yRTl'
  apiURL: string = 'https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/manage-jjtug/service/plantControl/incoming_webhook';
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
