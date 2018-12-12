<p align="center">
copywriting-correct
</a>

<p align="center">中英文文案排版纠正器。</p>

> 项目地址 https://github.com/rikakomoe/copywriting-correct
演示地址 https://copywriting-correct.js.org

## 相关项目

本项目是 [ricoa/copywriting-correct](https://github.com/ricoa/copywriting-correct) 的 JavaScript 实现。

## 描述

> 统一中文文案、排版的相关用法，降低团队成员之间的沟通成本，增强网站气质。
 
比较以下排版：
* 排版1
>LeanCloud数据存储是围绕AVObject进行的.每个AVObject都包含了与JSON兼容的key-value对应的数据。数据是schema-free的，你不需要在每个AVObject上提前指定存在哪些键，只要直接设定对应的key-value即可。
gitHub是一个通过git进行版本控制的软件源代码托管服务，由GitHub公司（曾称Logical Awesome）的开发者Chris Wanstrath、PJ Hyett和Tom Preston-Werner使用Ruby on Rails编写而成。

* 排版2
>LeanCloud 数据存储是围绕 AVObject 进行的。每个 AVObject 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 AVObject 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。
GitHub 是一个通过 Git 进行版本控制的软件源代码托管服务，由 GitHub 公司（曾称 Logical Awesome）的开发者 Chris Wanstrath、PJ Hyett 和 Tom Preston-Werner 使用 Ruby on Rails 编写而成。

很明显，第二种排版中英文有空格，标点符号也使用正确，专有名词使用正确，会让人看起来更舒服，也更专业。
本系统正是基于 [中文文案排版指北（简体中文版）](https://github.com/mzlogin/chinese-copywriting-guidelines) 进行纠正，帮助解决中英文混排的排版问题，提高文案可阅读性。

## 浏览器

```html
<script src="https://unpkg.com/copywriting-correct/dist/copywriting-correct.min.js"></script>
```

```javascript
const service = new window.CopyWritingCorrectService();

const text = service.correct('在LeanCloud上，数据存储是围绕AVObject进行的。');
```

## Node.js 或 Webpack

```bash
npm install copywriting-correct --save
```

```javascript
// const CopyWritingCorrectService = require('copywriting-correct').default;
import CopyWritingCorrectService from 'copywriting-correct';

const service = new CopyWritingCorrectService();

const text = service.correct('在LeanCloud上，数据存储是围绕AVObject进行的。');
```

## 注入自己的纠正器

定义一个对象，实现接口 [ICorrector](https://github.com/rikakomoe/copywriting-correct/tree/master/@types/correctors/Interfaces/ICorrector.d.ts)：

```javascript
class MyAwesomeCorrector {
  static rules = ['awesome'];

  static handle(text, rules) {
    if (rules) console.log(rules['awesome']);
    
    return text;
  }
}
```

使用：

```javascript
import CopyWritingCorrectService from 'copywriting-correct';

const service = new CopyWritingCorrectService();

service.addCorrectors([MyAwesomeCorrector]); // 注入纠正器
service.resetCorrectors([MyAwesomeCorrector]); //重置纠正器，也即废弃默认的纠正器

const text = service.correct('在LeanCloud上，数据存储是围绕AVObject进行的。');

```

向纠正器传入配置：

```javascript
// 输出：{ someOption: true }
const text = service.correct('在LeanCloud上，数据存储是围绕AVObject进行的。', { awesome: { someOption: true } });
```


## 默认纠正器

**注意：纠正器的顺序会影响输出结果。**

1. CharacterCorrector
2. SpaceCorrector
3. UnitOfMeasurementCorrector
4. ProperNounsCorrector

要引用这些纠正器：

浏览器：

```javascript
service.resetCorrectors([
  window.CopyWritingCorrectors.CharacterCorrector
]);
```

Node.js:

```javascript
// const CharacterCorrector = require('copywriting-correct').CharacterCorrector;
import { CharacterCorrector } from 'copywriting-correct';
service.resetCorrectors([
  CharacterCorrector
]);
```

## 已实现

### 空格

1. 中文字符与[半角字符](http://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2)（例如英文字符，数字，英文标点符号）间添加空格。
2. 数字后面跟着英文字符则在数字后添加空格（适用于数字+单位，例如 1 GB）。
3. 数字与度、百分号之间不加空格（例如 233°，100%）。
4. 全角标点与其他字符之间不加空格。
5. 半角标点 `·`、`/` 与其他字符之间不加空格（例如 一二·九运动、公里/小时）。

### 标点符号

1. 不重复使用中文标点符号（仅！和？），重复时只保留第一个。

### 全角和半角

1. 中文以及中文标点符号（```）》```）后使用全角中文标点符号（包括！？。，（）：；）。
2. 字母、数字和某些中文没有的标点（如 %，#）使用半角字符。

### 名词

1. 专有名词使用正确的大小写（部分名词达成，见 [词典](https://github.com/NauxLiu/auto-correct/blob/afb60f8685a205adfe33ee342c98cc3e20d33c9e/dicts.php)）

## 改进

有什么新的想法和建议，欢迎提交 [issue](https://github.com/rikakomoe/copywriting-correct/issues) 或者 [Pull Requests](https://github.com/rikakomoe/copywriting-correct/pulls)。

## License

基于 [AGPL-v3 license](https://www.gnu.org/licenses/agpl-3.0.zh-cn.html).
