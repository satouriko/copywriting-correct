import CharacterCorrector from './correctors/CharacterCorrector';
import ICorrector from './correctors/Interfaces/ICorrector';
import ProperNounsCorrector from './correctors/ProperNounsCorrector';
import SpaceCorrector from './correctors/SpaceCorrector';
import UnitOfMeasurementCorrector from './correctors/UnitOfMeasurementCorrector';

export { CopyWritingCorrectService as default } from './CopyWritingCorrectService';
export {
  CharacterCorrector,
  SpaceCorrector,
  ProperNounsCorrector,
  UnitOfMeasurementCorrector
};
export { ICorrector };
