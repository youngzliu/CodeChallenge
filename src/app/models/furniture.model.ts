export class Furniture {
  constructor(public id: string, public name: string, public imageUrl: string, public description: string, public colors: string[], public type: string, public deliverable: boolean, public cost: number, public stock: number, public length: number = -1, public width: number = -1) { }

  getDimensions() {
    if (this.length === -1 || this.width === -1) {
      return "N/A";
    }
    else {
      return `${this.length} x ${this.width}`;
    }
  }

  getDeliverable() {
    if (this.deliverable) {
      return "Yes";
    }
    else {
      return "No";
    }
  }


}