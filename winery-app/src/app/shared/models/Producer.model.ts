export class Producer {
  producerId?: number;
  producerName: string;
  details: string;
  regionDTO: {regionId: number};

  constructor(
    producerName: string,
    details: string,
    regionDTO: {regionId: number},
    producerId?: number
  ) {
    this.producerName = producerName;
    this.details = details;
    this.regionDTO = regionDTO;
    if (producerId) this.producerId = producerId;
  }
}
