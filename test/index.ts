import test from 'ava';
import { CopyWritingCorrectService } from "../src/CopyWritingCorrectService";

test('Character Test', t => {

  const service = new CopyWritingCorrectService();

  // 使用半角字符
  t.is(
    service.correct('这件蛋糕只卖１０００元。'),
    '这件蛋糕只卖 1000 元。'
  );

  // 使用中文省略号
  t.is(
    service.correct('不知所措...怎么办才好呢。。。'),
    '不知所措……怎么办才好呢……'
  );

  // 中文字符后使用中文点号
  t.is(
    service.correct('乔布斯那句话是怎么说的?「Stay hungry, stay foolish.」'),
    '乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」'
  );

  // 中文左右使用中文括号
  t.is(
    service.correct('这是一段(测试)文字'),
    '这是一段（测试）文字'
  );

  // 去除中文重复标点
  t.is(
    service.correct('乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」！！？？'),
    '乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」！'
  );

});

test('Space Test', t => {

  const service = new CopyWritingCorrectService();

  // 中文与英文
  t.is(
    service.correct('在LeanCloud上，数据存储是围绕AVObject进行的。每个AVObject都包含了与JSON兼容的key-value对应的数据。'),
    '在 LeanCloud 上，数据存储是围绕 AVObject 进行的。每个 AVObject 都包含了与 JSON 兼容的 key-value 对应的数据。'
  );

  // 中文与数字
  t.is(
    service.correct('今天出去买菜花了5000元。'),
    '今天出去买菜花了 5000 元。'
  );

  // 全角标点与其他字符之间不加空格
  t.is(
    service.correct('小明： 我刚刚买了一部 iPhone ，好开心 。 送给你吧！'),
    '小明：我刚刚买了一部 iPhone，好开心。送给你吧！'
  );

});

test('UnitOfMeasurement Test', t => {

  const service = new CopyWritingCorrectService();

  // 数字与单位之间加空格
  t.is(
    service.correct('我家的光纤入户宽带有 10Gbps，SSD 一共有 20TB。'),
    '我家的光纤入户宽带有 10 Gbps，SSD 一共有 20 TB。'
  );

  // 度与数字之间不加空格
  t.is(
    service.correct('今天是 233 ° 的高温。'),
    '今天是 233° 的高温。'
  );

  // 百分比与数字之间不加空格
  t.is(
    service.correct('新 MacBook Pro 有 15 % 的 CPU 性能提升。'),
    '新 MacBook Pro 有 15% 的 CPU 性能提升。'
  );

});

test('ProperNouns Test', t => {

  const service = new CopyWritingCorrectService();

  t.is(
    service.correct('数据是schema-free的，你不需要在每个AVObject上提前指定存在哪些键，只要直接设定对应的key-value即可。 gitHub是一个通过git进行版本控制的软件源代码托管服务，由GitHub公司（曾称Logical Awesome）的开发者Chris Wanstrath、PJ Hyett和Tom Preston-Werner使用Ruby on Rails编写而成。'),
    '数据是 schema-free 的，你不需要在每个 AVObject 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。GitHub 是一个通过 Git 进行版本控制的软件源代码托管服务，由 GitHub 公司（曾称 Logical Awesome）的开发者 Chris Wanstrath、PJ Hyett 和 Tom Preston-Werner 使用 Ruby on Rails 编写而成。'
  );

});
