import React, { PureComponent } from 'react';
import { getQuotes } from '../../service/getQuotes';
import Quotes from '../../components/Quotes';

export default class TopQuotes extends PureComponent {
  state = {
    quotes: [],
  };

  componentDidMount() {
    getQuotes()
      .then(quotes => {
        console.log(quotes);
        this.setState({ quotes });
      });
  }

  fetchQuotes = () => {
    getQuotes()
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}
