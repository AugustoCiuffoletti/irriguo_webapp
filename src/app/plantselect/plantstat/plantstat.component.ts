import { Component, OnInit, NgZone, Input,Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { MongodbService } from "../../mongodb.service";
import { WeatherBitService } from "./weatherbit.service";

@Component({
  selector: "app-plantstat",
  templateUrl: "./plantstat.component.html",
  styleUrls: ["./plantstat.component.css"]
})
export class PlantstatComponent implements OnInit {
  @Input() plant: string;
  @Output() close = new EventEmitter<string>();
  statistiche;
  storico;
  residuo;

  constructor(
    private mdbService: MongodbService,
    private wbService: WeatherBitService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    console.log(">" + this.plant + "<");
    this.mdbService
      .getConfig(this.plant)
      .subscribe(
        stat => (this.statistiche = stat),
        err => console.error("MongoDB observer got an error: " + err.message)
      );
    this.mdbService
      .getResidual(this.plant)
      .subscribe(
        res => (this.residuo = res),
        err => console.error("MongoDB observer got an error: " + err.message)
      );
    this.mdbService
      .getHistory(this.plant)
      .subscribe(
        hist => (this.storico = hist),
        err => console.error("MongoDB observer got an error: " + err.message)
      );
    this.wbService.getMeteo("trento").subscribe(
      (x: any) => {
        console.log(JSON.stringify(x.data[0]));
      },
      err => console.error("Meteo observer got an error: " + err.message)
    );
  }

  refill() {
    this.mdbService
      .setRefill(this.selezionato)
      .subscribe(
        hist => console.log("Refill done"),
        err => console.error("Observer got an error: " + err)
      );
    this.mdbService.getConfig(this.selezionato).subscribe(
      stat => {
        this.ngZone.run(() => {
          this.statistiche = stat;
        });
      },
      err => console.error("Observer got an error: " + err)
    );
  }

  back() {
    this.close.emit("x");
  }

  stringaData(unixTime) {
    var d = new Date(+unixTime);
    return d.toLocaleString("it");
  }
}
