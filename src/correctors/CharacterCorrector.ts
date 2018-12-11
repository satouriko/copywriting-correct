// 修正字符

import { dotMarks, fullWidthChars, labelMarks, zhSymbols } from '../utils';

export class CharacterCorrector {
  public static rules = ['character'];

  public static handle(text: string): string {

    //  把数字和英文、部分标点符号等全角字符转换为半角字符
    text = text.replace(new RegExp(`[${Object.keys(fullWidthChars).join('')}]`, 'g'),
      $ =>
        fullWidthChars[$]
    );

    // 中文字符后面使用中文省略号
    text = text.replace(
      /([\u4e00-\u9fa5])[\.。]{2,}/g,
      '$1……'
    );

    // 中文字符后面全部使用中文点号
    text = text.replace(
      new RegExp(`([\u4e00-\u9fa5${zhSymbols.join('')}])([${Object.keys(dotMarks).join('')}])`, 'g'),
      ($, $1, $2) =>
        $1 + dotMarks[$2]
    );

    // 两侧有中文字符的标号使用中文标号
    text = text.replace(
      new RegExp(`([${Object.keys(labelMarks).join('')}])([\u4e00-\u9fa5])`, 'g'),
      ($, $1, $2) =>
        labelMarks[$1] + $2
    );
    text = text.replace(
      new RegExp(`([\u4e00-\u9fa5])([${Object.keys(labelMarks).join('')}])`, 'g'),
      ($, $1, $2) =>
        $1 + labelMarks[$2]
    );

    // 去除重复标点
    text = text.replace(/([！？])([！？]*)/g, '$1');

    return text;

  }
}

export default CharacterCorrector;
