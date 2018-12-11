import CharacterCorrector from './correctors/CharacterCorrector';
import ICorrector from './correctors/Interfaces/ICorrector';
import ProperNounsCorrector from './correctors/ProperNounsCorrector';
import SpaceCorrector from './correctors/SpaceCorrector';
import UnitOfMeasurementCorrector from './correctors/UnitOfMeasurementCorrector';

export class CopyWritingCorrectService {
  protected corrects: ICorrector[] = [
    CharacterCorrector,
    SpaceCorrector,
    UnitOfMeasurementCorrector,
    ProperNounsCorrector,
  ];

  public addCorrectors(correctors: ICorrector | ICorrector[]) {
    this.corrects = this.corrects.concat(correctors);
  }

  public resetCorrectors(correctors: ICorrector[]) {
    this.corrects = correctors;
  }

  public correct(text: string, rules?: {
    [key: string]: {
      [key: string]: any,
    },
  }): string {
    for (const corrector of this.corrects) {
      const correctorRules: {
        [key: string]: {
          [key: string]: any,
        },
      } = {};
      if (typeof rules === 'object') {
        for (const rule in corrector.rules) {
          if (rules[rule]) {
            correctorRules[rule] = rules[rule];
          }
        }
      }
      text = corrector.handle(text, correctorRules);
    }
    return text;
  }
}
