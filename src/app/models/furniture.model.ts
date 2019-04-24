export class Furniture {
  constructor(public id: string, public name: string, public imageUrl: string, public description: string, public colors: string[], public type: string, public deliverable: boolean, public cost: number, public stock: number, public length: number = -1, public width: number = -1) { }
}