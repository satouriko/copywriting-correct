import ICorrector from './correctors/Interfaces/ICorrector';
export declare class CopyWritingCorrectService {
    protected corrects: ICorrector[];
    addCorrectors(correctors: ICorrector | ICorrector[]): void;
    resetCorrectors(correctors: ICorrector[]): void;
    correct(text: string, rules?: {
        [key: string]: {
            [key: string]: any;
        };
    }): string;
}
