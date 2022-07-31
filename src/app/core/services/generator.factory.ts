import { GeneratorService } from "./generator.service";

export function GeneratorFactory(n: number): (gs: GeneratorService) => string {
    return (gs: GeneratorService): string =>
      gs.generate(n);
  }
