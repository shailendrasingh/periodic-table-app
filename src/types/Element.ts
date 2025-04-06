export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  atomicMass: number;
  category: string;
  block: string;
  group: number | null;
  period: number;
  electronConfiguration: string;
  electronegativity: number | null;
  atomicRadius: number | null;
  ionizationEnergy: number | null;
  density: number | null;
  meltingPoint: number | null;
  boilingPoint: number | null;
  oxidationStates: string[];
  discoveryYear: number | null;
  discoveredBy: string | null;
}