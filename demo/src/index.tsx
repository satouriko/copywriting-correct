import * as React from 'react';
import { Component, FormEvent } from 'react';
import { render } from 'react-dom';

import CopyWritingCorrectService from '../../';

import './style.styl';

interface AppState {
  input: string;
  output: string;
  rows: number;
}

class App extends Component<{}, AppState> {

  public corrector = new CopyWritingCorrectService();

  constructor(props: {}) {
    super(props);
    this.state = {
      input: 'LeanCloud数据存储是围绕AVObject进行的.每个AVObject都包含了与JSON兼容的key-value对应的数据。数据是schema-free的，你不需要在每个AVObject上提前指定存在哪些键，只要直接设定对应的key-value即可。 gitHub是一个通过git进行版本控制的软件源代码托管服务，由GitHub公司（曾称Logical Awesome）的开发者Chris Wanstrath、PJ Hyett和Tom Preston-Werner使用Ruby on Rails编写而成。',
      output: '',
      rows: 18,
    };
    this.correct = this.correct.bind(this);
    this.inputModel = this.inputModel.bind(this);
    this.rowsModel = this.rowsModel.bind(this);
  }

  private correct() {
    this.setState({
      output: this.corrector.correct(this.state.input),
    });
  }

  private inputModel(e: FormEvent<HTMLTextAreaElement>) {
    this.setState({
      input: e.currentTarget.value,
    }, () => this.correct());
  }

  private rowsModel(e: FormEvent<HTMLInputElement>) {
    this.setState({
      rows: +e.currentTarget.value,
    });
  }

  public componentDidMount() {
    this.correct();
  }

  public render() {

    return (
      <div className="landing">
        <section className="content-header">
          <h1>
            中英文文案排版纠正器
          </h1>
        </section>

        <div className="pad margin no-print">
          <div className="callout callout-success mb0">
            <h4><i className="fa fa-info"/> 说明:</h4>
            <p>本系统基于
              <a href="https://github.com/mzlogin/chinese-copywriting-guidelines"
                 target="_blank" rel="noreferrer">
                中文文案排版指北（简体中文版）
              </a>
              进行纠正，帮助解决中英文混排的排版问题，增强文章可读性。
            </p>
            <p>具体纠正规则见 {' '}
              <a target="_blank" rel="noreferrer"
                 href="https://github.com/rikakomoe/copywriting-correct">
                https://github.com/rikakomoe/copywriting-correct
              </a>
            </p>
            <p>有任何改进的意见请戳 <a target="_blank" rel="noreferrer"
              href="https://github.com/rikakomoe/copywriting-correct/issues/new">
              GitHub Issues
            </a>
            </p>
          </div>
        </div>

        <section className="invoice">
          <div className="row">
            <div className="col-md-6 mt10">
              <p>原文：</p>
              <div className="form-group">
                <textarea className="form-control textarea" rows={this.state.rows} id="from"
                          value={this.state.input} onInput={this.inputModel} onChange={this.inputModel}
                          spellCheck={false}
                />
              </div>
            </div>
            <div className="col-md-6 mt10">
              <p>纠正后：</p>
              <div className="form-group">
                <textarea id="to" className="form-control textarea" rows={this.state.rows} readOnly={true}
                          value={this.state.output} spellCheck={false}
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

render(<App/>, document.getElementById('root'));
