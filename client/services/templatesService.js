import axios from 'axios';

class TemplatesService {
  getTemplates() {
    return axios.get(`http://localhost/templates`);
  }
}

export default new TemplatesService();
