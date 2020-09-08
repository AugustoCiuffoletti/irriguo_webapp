import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plantstat',
  templateUrl: './plantstat.component.html',
  styleUrls: ['./plantstat.component.css']
})
export class PlantstatComponent implements OnInit {
  @Input() plant: string;

  constructor() { }

  ngOnInit() {
  }

}