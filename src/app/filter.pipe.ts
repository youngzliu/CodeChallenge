import { Pipe, PipeTransform } from '@angular/core';
import { Furniture } from './models/furniture.model';

@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {

  transform(input: Furniture[], filterOption) {
    if (filterOption === "sortId") {
      input.sort((a, b) => {
        let aId = parseInt(a.id);
        let bId = parseInt(b.id);
        if (aId < bId) {
          return -1;
        }
        else if (aId > bId) {
          return 1;
        }
        else {
          return 0;
        }

      })
      return input;
    }
    else if (filterOption === "sortPrice") {
      input.sort((a, b) => {
        let aPrice = a.cost;
        let bPrice = b.cost;
        if (aPrice < bPrice) {
          return -1;
        }
        else if (aPrice > bPrice) {
          return 1;
        }
        else {
          return 0;
        }

      })
      return input;
    }
    else if (filterOption === "deliverable") {
      let output: Furniture[] = [];
      for (let furniture of input) {
        if (furniture.deliverable === true) {
          output.push(furniture);
        }
      }
      return output;
    }
    else if (filterOption === "stock") {
      let output: Furniture[] = [];
      for (let furniture of input) {
        if (furniture.stock > 0) {
          output.push(furniture);
        }
      }
      return output;
    }
    else if (filterOption === "chair") {
      let output: Furniture[] = [];
      for (let furniture of input) {
        if (furniture.type === "chair") {
          output.push(furniture);
        }
      }
      return output;
    }
    else if (filterOption === "table") {
      let output: Furniture[] = [];
      for (let furniture of input) {
        if (furniture.type === "table") {
          output.push(furniture);
        }
      }
      return output;
    }
    else if (filterOption === "sofa") {
      let output: Furniture[] = [];
      for (let furniture of input) {
        if (furniture.type === "sofa") {
          output.push(furniture);
        }
      }
      return output;
    }
    else if (filterOption === "rug") {
      let output: Furniture[] = [];
      for (let furniture of input) {
        if (furniture.type === "rug") {
          output.push(furniture);
        }
      }
      return output;
    }
    else {
      return input;
    }
  }
}