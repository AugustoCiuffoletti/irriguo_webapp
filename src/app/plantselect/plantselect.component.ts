import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-plantselect",
  templateUrl: "./plantselect.component.html",
  styleUrls: ["./plantselect.component.css"]
})
export class PlantselectComponent implements OnInit {
  impianti = ["balcone", "bouganville", "benjamin", "test"];
  selezionato: string = undefined;

  constructor() {}

  ngOnInit() {}

  seleziona(impianto) {
    this.selezionato = impianto;
  }
}
