export class Car {
  public id: number;
  public model: string;
  public description: string;
  public year: number;
  public brand: string;
  public kilometers: number;
  public price: number;
  constructor(i, m, d, y, b, k, p) {
    this.id = i;
    this.model = m;
    this.description = d;
    this.year = y;
    this.brand = b;
    this.kilometers = k;
    this.price = p;
  }
}
