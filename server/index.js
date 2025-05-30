import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const cardsFile = path.join(process.cwd(), 'cards.json');

// Endpoint para obtener las cards
app.get('/api/cards', async (req, res) => {
  try {
    const data = await fs.readFile(cardsFile, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'No se pudo leer el archivo cards.json' });
  }
});

// Endpoint para guardar las cards
app.post('/api/cards', async (req, res) => {
  try {
    await fs.writeFile(cardsFile, JSON.stringify(req.body, null, 2));
    res.json({ message: 'Cards guardadas correctamente' });
  } catch (err) {
    res.status(500).json({ error: 'No se pudo guardar el archivo cards.json' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});