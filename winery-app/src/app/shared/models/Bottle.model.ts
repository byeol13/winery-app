export class Bottle {
  bottleId?: number;
  fullName: string;
  label: string;
  volume: number;
  yearProduced: number;
  picture: string;
  alcoholPercentage: number;
  currentPrice: number;
  categoryDTO: { categoryId: number };
  producerDTO: { producerId: number };

  constructor(
    fullName: string,
    label: string,
    volume: number,
    yearProduced: number,
    picture: string,
    alcoholPercentage: number,
    currentPrice: number,
    categoryDTO: { categoryId: number },
    producerDTO: { producerId: number },
    bottleId?: number
  ) {
    this.fullName = fullName;
    this.label = label;
    this.volume = volume;
    this.yearProduced = yearProduced;
    this.picture = picture;
    this.alcoholPercentage = alcoholPercentage;
    this.currentPrice = currentPrice;
    this.categoryDTO = categoryDTO;
    this.producerDTO = producerDTO;
    if (bottleId) this.bottleId = bottleId;
  }
}
