import React, {Component} from 'react';
import {render} from 'react-dom';
import marked from 'marked';

require('../public/main.scss');

class App extends Component{
  constructor() {
    super();
    this.state = {
      markdown: '# Hola'
    };
    this.convertMarkdown = this.convertMarkdown.bind(this);
  }

  convertMarkdown(e) {
    this.setState({markdown: e.target.value});
  }

  render(){
    var parsedMarkdown = marked(this.state.markdown);
    return (
      <div className="container">
        <textarea
          onChange={this.convertMarkdown}
          className="textBox"
          defaultValue="# Hola"
          autoFocus></textarea>
        <div 
          dangerouslySetInnerHTML={{__html: parsedMarkdown}}
           className="resultBox"/>
      </div>
    )
  }
};

render(<App/>, document.getElementById('main'));