import { Component, NgZone } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { MongodbService } from './mongodb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  impianti=["balcone","bouganville","benjamin","test"];
  selezionato: string = undefined;
  statistiche;
  storico;
  residuo;
  title = 'Irriguo2019'; 
  constructor(private mdbService: MongodbService, private ngZone: NgZone) { }
  ngOnInit() { }
  seleziona(impianto) {
	this.statistiche=undefined;
	this.storico=undefined;
	this.selezionato=impianto;
    this.mdbService.getConfig(this.selezionato).subscribe(
      stat => this.statistiche=stat,
      err => console.error('Observer got an error: ' + err)
    );
    this.mdbService.getResidual(this.selezionato).subscribe(
      res => this.residuo=res,
      err => console.error('Observer got an error: ' + err)
    );
    this.mdbService.getHistory(this.selezionato).subscribe(
      hist => this.storico=hist,
      err => console.error('Observer got an error: ' + err)
    );
  }
  clean() {
    this.selezionato=undefined;
  }
  refill() {
	this.mdbService.setRefill(this.selezionato).subscribe(
      hist => console.log("Refill done"),
      err => console.error('Observer got an error: ' + err)
    );
    this.mdbService.getConfig(this.selezionato).subscribe(
      stat => { this.ngZone.run( () => {this.statistiche=stat})},
      err => console.error('Observer got an error: ' + err)
    );
  }
  private stringaData(unixTime) {
	var d=new Date(+unixTime);
	return d.toLocaleString("it");;
  }
}
