export interface AvengerInterface {
  name: string;
  superPower: string;
  readonly universe: string;

  getProperty(): number;
  superHero(): void;
}
