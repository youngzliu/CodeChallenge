import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { FurnitureService } from "./furniture.service"
import { Furniture } from './models/furniture.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FurnitureService]
})
export class AppComponent implements OnInit {

  furnitureObs;
  furnitureList: Furniture[] = [];
  displayTable: boolean = false;

  constructor(private furnitureService: FurnitureService) {
  }

  ngOnInit() {
    this.getFurniture();
  }

  getFurniture() {
    this.furnitureService.getFurnitureData().subscribe(response => {
      this.furnitureObs = response.json();
      for (let furniture of this.furnitureObs.body.data) {
        console.log(furniture)
        if (furniture.dimensions === undefined) {
          this.furnitureList.push(new Furniture(furniture.id, furniture.name, furniture.imageUrl, furniture.description, furniture.colors, furniture.type, furniture.deliverable, furniture.cost, furniture.stock));
        }
        else {
          this.furnitureList.push(new Furniture(furniture.id, furniture.name, furniture.imageUrl, furniture.description, furniture.colors, furniture.type, furniture.deliverable, furniture.cost, furniture.stock, furniture.dimensions.length, furniture.dimensions.width));
        }
      }
      console.log(this.furnitureList);
    });
  }
}
