import React from 'react';
import PropTypes from 'prop-types';

function Quotes({ quotes }) {
  return quotes.map(quote => {
    return (
      <p key={`${quote.character}-${quote.quote}`}>{quote.quote}</p>
    );
  });
}

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Quotes;
