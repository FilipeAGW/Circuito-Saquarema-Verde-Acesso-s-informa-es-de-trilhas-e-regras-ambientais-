require('dotenv').config();
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { readData, writeData } = require('./config/database');

const trilhaRoutes = require('./routes/trilhaRoutes');
const lugarRoutes = require('./routes/lugarRoutes');
const recomendacaoRoutes = require('./routes/recomendacaoRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'troque_por_uma_chave_local';

app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/trilhas', trilhaRoutes);
app.use('/api/lugares', lugarRoutes);
app.use('/api/recomendacoes', recomendacaoRoutes);


app.post('/api/auth/create-admin', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: 'username e password necessários' });
  const data = readData();
  data.admins = data.admins || [];
  if (data.admins.find(a => a.username === username)) return res.status(400).json({ error: 'admin já existe' });
  const hash = await bcrypt.hash(password, 10);
  const id = Date.now();
  data.admins.push({ id, username, password_hash: hash });
  writeData(data);
  return res.status(201).json({ id, username });
});

app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const data = readData();
  const admin = (data.admins || []).find(a => a.username === username);
  if (!admin) return res.status(401).json({ error: 'credenciais inválidas' });
  const ok = await bcrypt.compare(password, admin.password_hash);
  if (!ok) return res.status(401).json({ error: 'credenciais inválidas' });
  const token = jwt.sign({ id: admin.id, username: admin.username }, JWT_SECRET, { expiresIn: '8h' });
  return res.json({ token, user: { id: admin.id, username: admin.username } });
});


function authMiddleware(req, res, next) {
  const h = req.headers.authorization;
  if (!h) return res.status(401).json({ error: 'token ausente' });
  const parts = h.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') return res.status(401).json({ error: 'token inválido' });
  try {
    const payload = jwt.verify(parts[1], JWT_SECRET);
    req.user = payload;
    return next();
  } catch (e) {
    return res.status(401).json({ error: 'token inválido ou expirado' });
  }
}


app.post('/api/admin/trilhas', authMiddleware, (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'nome obrigatório' });
  const data = readData();
  data.trails = data.trails || [];
  const id = Date.now();
  data.trails.push({ id, name });
  writeData(data);
  res.status(201).json({ created: true, id });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
