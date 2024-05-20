import React, { useCallback, useState, useEffect } from 'react';
import './CustomInput.css';
import Suggestions from '../suggestions/Suggestions';


const filterSuggestion = (substring, list) => {
  return list.filter(
    (item) => item.name.includes(substring));
}


const CustomInput = ({postComment, suggestionsConfig}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);


  useEffect(() => {
    setSuggestions(suggestionsConfig.namesList);
  }, [suggestionsConfig.namesList]);


  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setInputValue(value);

    const regex = new RegExp(`${suggestionsConfig.triggerChar}[^ ]*$`);
    const match = value.match(regex);

    if (match) {
      setShowSuggestions(true);
      const name = match[0].substring(1);
      setSuggestions( name === '' ? suggestionsConfig.namesList : filterSuggestion(name, suggestionsConfig.namesList));
    } else {
      setShowSuggestions(false);
    }
  },[suggestionsConfig])


  const handleSelectSuggestion = useCallback((value) => {
    const newStr = inputValue.replace(new RegExp(`${suggestionsConfig.triggerChar}\\S*$`), `${suggestionsConfig.triggerChar}${value}`);
    setInputValue(newStr);
    setShowSuggestions(false);
  },[inputValue]);



  const handlePostSumbit = () => {
    if(inputValue === '') return;
    postComment(inputValue);
    setInputValue('');
  }

  return (
    <div className="custom-input-container">
      <textarea
        className='custom-input-box border-0 rounded-sm p-1'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className='btn-wrapper mt-2 text-end'>
        <button className='post-btn bg-pink-500 text-white p-1 border-0 text-xs rounded-sm px-2' onClick={handlePostSumbit}>POST</button>
      </div>
    
      {showSuggestions && (
        <Suggestions
          suggestions={suggestions}
          handleSelectSuggestion={handleSelectSuggestion}
        />
      )}
    </div>
  );
};

export default React.memo(CustomInput);
