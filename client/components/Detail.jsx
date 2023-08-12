import React, { useEffect, useState } from 'react';
import '../style/detail.css';

const Detail = ({ selectedTemplate }) => {
  const [ selectedTemplateId, setSelectedTemplateId ] = useState(0);

  useEffect(() => {
    if (selectedTemplate && selectedTemplate.id) {
      setSelectedTemplateId(selectedTemplate.id)
    }
  }, [ selectedTemplate ]);

  return (
    <div id="large">
      <div className="group">
        <span className="large-image" id={`large-${selectedTemplateId}`} />
        <div className="details">
          { selectedTemplate &&
            (
              <>
                <p><strong>Title</strong> { selectedTemplate.title || '' }</p>
                <p><strong>Description</strong> { selectedTemplate.description || '' }</p>
                <p><strong>Cost</strong> ${ selectedTemplate.cost || '' }</p>
                <p><strong>ID #</strong> { selectedTemplateId || '' }</p>
                <p><strong>Thumbnail File</strong> { selectedTemplate.thumbnail || '' }</p>
                <p><strong>Large Image File</strong> { selectedTemplate.image || '' }</p>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
}

export { Detail };
