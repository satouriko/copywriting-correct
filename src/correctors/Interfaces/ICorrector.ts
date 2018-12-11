export interface ICorrector {
  rules: string[];
  handle(text: string, rules?: {
    [key: string]: {
      [key: string]: any,
    },
  }): string;
}

export default ICorrector;
