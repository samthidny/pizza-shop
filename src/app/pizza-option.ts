export class PizzaOption {

  public option: string;
  public name: string;
  public id: number;

  constructor() {
    this.id = 0;
    this.name = '';
  }

  static create(option: string, id: number, name: string): PizzaOption {
    const pizzaOption = new PizzaOption();
    pizzaOption.option = option;
    pizzaOption.id = id;
    pizzaOption.name = name;
    return pizzaOption;
  }
}
