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
      input: '',
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
    });
  }

  private rowsModel(e: FormEvent<HTMLInputElement>) {
    this.setState({
      rows: +e.currentTarget.value,
    });
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
            <div className="col-md-12">
              <button type="button" className="btn btn-block btn-default btn-lg" id="correct"
                      onClick={this.correct}
              >纠正排版
              </button>
            </div>
            <div className="col-md-12">
              <div className="col-md-6 mt20">
                <input type="number" className="form-control" value={this.state.rows} id="height"
                       onInput={this.rowsModel} onChange={this.rowsModel}
                />
              </div>
              <div className="col-md-6 mt10">
                <button type="button" className="btn btn-block btn-default btn-lg" id="height-c" disabled={true}>
                  修改左侧数值调整文本框高度
                </button>
              </div>
            </div>
            <div className="col-md-6 mt10">
              <p>原文：</p>
              <div className="form-group">
                <textarea className="form-control" rows={this.state.rows} id="from"
                          value={this.state.input} onInput={this.inputModel} onChange={this.inputModel}
                />
              </div>
            </div>
            <div className="col-md-6 mt10">
              <p>纠正后：</p>
              <div className="form-group">
                <textarea id="to" className="form-control" rows={this.state.rows} readOnly={true}
                          value={this.state.output}
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
