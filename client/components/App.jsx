import React from 'react';
import { useEffect, useState } from 'react';
import { Detail } from './Detail';
import { Thumbnails } from './Thumbnails';
import templatesService from 'services/templatesService';
import '../style/app.css';

const App = () => {
  const [ templatesData, setTemplatesData ] = useState([]);
  const [ selectedTemplateIndex, setSelectedTemplateIndex ] = useState(0);

  useEffect(() => {
    async function fetchTemplates() {
      const templates = await templatesService.getTemplates();
      const { data } = templates;
      setTemplatesData(data);
      setSelectedTemplateIndex(0);
    }
    fetchTemplates();
  }, []);

  return (
    <div id="container">
      <header>
        Code Development Project
      </header>
      <div role="main">
        <Detail
          selectedTemplate={templatesData[selectedTemplateIndex]}
        />
        <Thumbnails
          selectedTemplateIndex={selectedTemplateIndex}
          setSelectedTemplateIndex={setSelectedTemplateIndex}
          templatesData={templatesData}
        />
      </div>
    </div>
  );
}

export { App };
