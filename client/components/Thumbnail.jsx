import React from 'react';

const Thumbnail = ({ id, selectedTemplateIndex, setSelectedTemplateIndex, thumbnailIndex }) => (
  <a
    className={ selectedTemplateIndex === thumbnailIndex ? 'active' : '' }
    onClick={() => setSelectedTemplateIndex(thumbnailIndex)}
    title={id}
  >
    <span className="thumbnail" id={`thumbnail-${id}`} />
    <span className="id">{id}</span>
  </a>
);

export { Thumbnail };
