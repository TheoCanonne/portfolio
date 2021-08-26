import * as express from 'express';
import * as nodemailer from 'nodemailer';
import * as properties from './properties.json';

const app = express();
const transport = nodemailer.createTransport(
  properties
);

app.post('/sendMail', (req, res) => {
  const content = req.body;
  transport.sendMail(content);
});

app.listen(3000);
