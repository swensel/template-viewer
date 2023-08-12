import cors from 'cors';

export default function middleware(app) {
  app.use(cors());
}
