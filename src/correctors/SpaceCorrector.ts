import * as pangu from 'pangu';

import { zhSymbols } from '../utils';

// 修正空格
export class SpaceCorrector {
  public static rules = ['space'];

  public static handle(text: string): string {

    // 盘古空格（中文与英文、中文与数字）
    text = pangu.spacing(text);

    // 全角符号前后去空格
    text = text.replace(
      new RegExp(`([ ]*)([${zhSymbols.join('')}])([ ]*)`, 'g'),
      '$2'
    );

    return text.trim();
  }
}

export default SpaceCorrector;
