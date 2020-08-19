export class PizzaSize {

  public name: string;
  public id: number;

  constructor() {
    this.id = 0;
    this.name = 'Large';
  }

  static create(id: number, name: string): PizzaSize {
    const size = new PizzaSize();
    size.id = id;
    size.name = name;
    return size;
  }

}
