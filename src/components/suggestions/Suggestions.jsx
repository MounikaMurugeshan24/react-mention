import React from 'react';
import './Suggestions.css';

const Suggestions = ({ suggestions, handleSelectSuggestion }) => {

  const suggestion = suggestions.map(({name, id}) => 
    <div key={id}
      onClick={() => handleSelectSuggestion(name)}
      className="suggestion-item">
      {name}
    </div>
  );

  return (
    <div className="custom-input-suggestions">
      {suggestion}
    </div>
  );
};

export default React.memo(Suggestions);