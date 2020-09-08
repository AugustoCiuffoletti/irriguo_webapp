import { Component, NgZone } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: "trento-component",
  templateUrl: "./trento.component.html",
  styleUrls: ["./trento.component.css"]
})

export class TrentoComponent {
  impianti = ["balcone", "bouganville", "benjamin", "test"];
  selezionato: string = undefined;
  statistiche;
  storico;
  residuo;
  title = "Irriguo2019";
  constructor(
    private mdbService: MongodbService,
    private wbService: WeatherBitService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {}

  // seleziona(impianto) {
  //   this.statistiche = undefined;
  //   this.storico = undefined;
  //   this.selezionato = impianto;
  //   this.mdbService
  //     .getConfig(this.selezionato)
  //     .subscribe(
  //       stat => (this.statistiche = stat),
  //       err => console.error("MongoDB observer got an error: " + err.message)
  //     );
  //   this.mdbService
  //     .getResidual(this.selezionato)
  //     .subscribe(
  //       res => (this.residuo = res),
  //       err => console.error("MongoDB observer got an error: " + err.message)
  //     );
  //   this.mdbService
  //     .getHistory(this.selezionato)
  //     .subscribe(
  //       hist => (this.storico = hist),
  //       err => console.error("MongoDB observer got an error: " + err.message)
  //     );
  //   this.wbService.getMeteo("trento").subscribe(
  //     (x: any) => {
  //       console.log(JSON.stringify(x.data[0]));
  //     },
  //     err => console.error("Meteo observer got an error: " + err.message)
  //   );
  // }

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

  stringaData(unixTime) {
    var d = new Date(+unixTime);
    return d.toLocaleString("it");
  }
}
