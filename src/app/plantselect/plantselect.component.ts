import { Component, OnInit, NgZone } from "@angular/core";
import { MongodbService } from "../mongodb.service";

@Component({
  selector: "app-plantselect",
  templateUrl: "./plantselect.component.html",
  styleUrls: ["./plantselect.component.css"]
})
export class PlantselectComponent implements OnInit {
  //impianti = ["balcone", "bouganville", "benjamin", "test"];
  impianti;
  selezionato: string = undefined;

  constructor(private mdbService: MongodbService, private ngZone: NgZone) {}

  ngOnInit() {
    this.mdbService.getPlants().subscribe(
      resp => {
        this.ngZone.run(() => {
          this.impianti = resp;
        });
      },
      err => console.error("Observer got an error: " + err.message)
    );
  }

  seleziona(impianto) {
    this.selezionato = impianto;
  }

  reopen() {
    this.selezionato = undefined;
  }
}
