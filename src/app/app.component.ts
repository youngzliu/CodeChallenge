import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { FurnitureService } from "./furniture.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
