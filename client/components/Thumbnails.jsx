import React, { useState } from 'react';
import { Arrows } from './Arrows';
import { Thumbnail } from './Thumbnail';
import '../style/thumbnails.css';

const Thumbnails = ({ selectedTemplateIndex, setSelectedTemplateIndex, templatesData }) => {
  const [ selectedTemplateId, setSelectedTemplateId ] = useState();

  const scrollToElement = (next) => {
    const selectedTemplateIndexToUse = next ? selectedTemplateIndex + 1 : selectedTemplateIndex -1;
    const selectedTemplate = selectedTemplateIndexToUse !== undefined && templatesData[selectedTemplateIndexToUse];
    if (selectedTemplate && selectedTemplate.id) {
      // Could use a ref instead
      document.getElementById(`thumbnail-${selectedTemplate.id}`).scrollIntoView();
    }
  };

  return (
    <div className="thumbnails">
      <div className="group">
        { templatesData.map((template, index) => (
          <Thumbnail
            id={template.id}
            key={template.id}
            selectedTemplateIndex={selectedTemplateIndex}
            setSelectedTemplateIndex={setSelectedTemplateIndex}
            thumbnailIndex={index}
          />
        ))}
      </div>
      <Arrows
        scrollToElement={scrollToElement}
        selectedTemplateIndex={selectedTemplateIndex}
        setSelectedTemplateIndex={setSelectedTemplateIndex}
        templatesData={templatesData}
      />
    </div>
  );
}

export { Thumbnails };
