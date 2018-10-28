import express from 'express';
import path from 'path';
let router = express.Router();

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'));
});

router.get('/health', (req, res) => {
  res.send({ ok: true });
});

router.get('/result', (req, res) => {
  const items = JSON.parse(req.query.items);
  const length = items.length;
  const index = getRandomInt(1, length + 1);
  res.json({ items: items, result: items[index-1]});
});

router.post('/result', (req, res) => {
  const items = req.body.items;
  const length = items.length;
  const index = getRandomInt(1, length + 1);
  res.json({ items: items, result: items[index-1]});
});

export default router;