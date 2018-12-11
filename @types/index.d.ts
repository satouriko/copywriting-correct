import { CopyWritingCorrectService } from './CopyWritingCorrectService';
import CharacterCorrector from './correctors/CharacterCorrector';
import ICorrector from './correctors/Interfaces/ICorrector';
import ProperNounsCorrector from './correctors/ProperNounsCorrector';
import SpaceCorrector from './correctors/SpaceCorrector';
import UnitOfMeasurementCorrector from './correctors/UnitOfMeasurementCorrector';
export default CopyWritingCorrectService;
export { CharacterCorrector, SpaceCorrector, ProperNounsCorrector, UnitOfMeasurementCorrector };
export { ICorrector };
