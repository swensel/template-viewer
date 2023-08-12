import React from 'react';
import '../style/arrows.css';

const Arrows = ({ scrollToElement, selectedTemplateIndex, setSelectedTemplateIndex, templatesData }) => {
  const handlePreviousClick = () => {
    if (selectedTemplateIndex > 0) {
      setSelectedTemplateIndex(selectedTemplateIndex - 1);
      scrollToElement(false);
    }
  };

  const handleNextClick = () => {
    if (selectedTemplateIndex < templatesData.length - 1 ) {
      setSelectedTemplateIndex(selectedTemplateIndex + 1);
      scrollToElement(true);
    }
  };

  return (
    <div className="arrows">
      <a
        className={ `previous${ selectedTemplateIndex === 0 ? ' disabled' : ''} `}
        onClick={handlePreviousClick}
        title="Previous"
      >
        Previous
      </a>
      <a
        className={ `next${ selectedTemplateIndex === templatesData.length - 1 ? ' disabled' : ''} `}
        onClick={handleNextClick}
        title="Next"
      >
        Next
      </a>
    </div>
  );
}

export { Arrows };
