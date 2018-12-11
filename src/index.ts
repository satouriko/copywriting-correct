import { CopyWritingCorrectService } from './CopyWritingCorrectService';
import CharacterCorrector from './correctors/CharacterCorrector';
import ICorrector from './correctors/Interfaces/ICorrector';
import ProperNounsCorrector from './correctors/ProperNounsCorrector';
import SpaceCorrector from './correctors/SpaceCorrector';
import UnitOfMeasurementCorrector from './correctors/UnitOfMeasurementCorrector';

export default CopyWritingCorrectService;
export {
  CharacterCorrector,
  SpaceCorrector,
  ProperNounsCorrector,
  UnitOfMeasurementCorrector
};
export { ICorrector };

if (typeof window === 'object') {
  (window as any).CopyWritingCorrectService = CopyWritingCorrectService;
  (window as any).CopyWritingCorrectors = {
    CharacterCorrector,
    SpaceCorrector,
    ProperNounsCorrector,
    UnitOfMeasurementCorrector,
  };
}
