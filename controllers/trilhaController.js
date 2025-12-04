
const { readData, writeData } = require('../config/database');

function list(req, res) {
  const { available, q } = req.query;
  const data = readData();
  let items = data.trails || [];
  if (available !== undefined) items = items.filter(t => t.available === (available === '1' || available === 'true' || available === true));
  if (q) {
    const ql = q.toLowerCase();
    items = items.filter(t => (t.name||'').toLowerCase().includes(ql) || (t.description||'').toLowerCase().includes(ql));
  }
  return res.json(items);
}

function getOne(req, res) {
  const id = String(req.params.id);
  const data = readData();
  const t = (data.trails || []).find(x => String(x.id) === id);
  if (!t) return res.status(404).json({ error: 'Trilha não encontrada' });
  return res.json(t);
}

function create(req, res) {
  const { name, description, rules, season_start, season_end, available } = req.body;
  if (!name) return res.status(400).json({ error: 'Nome obrigatório' });
  const data = readData();
  const id = Date.now();
  const t = { id, name, description: description||'', rules: rules||'', season_start: season_start||'', season_end: season_end||'', available: !!available };
  data.trails = data.trails || [];
  data.trails.push(t);
  writeData(data);
  return res.status(201).json({ created: true, id });
}

function update(req, res) {
  const id = String(req.params.id);
  const data = readData();
  data.trails = data.trails || [];
  const idx = data.trails.findIndex(x => String(x.id) === id);
  if (idx === -1) return res.status(404).json({ error: 'Trilha não encontrada' });
  const body = req.body;
  data.trails[idx] = { ...data.trails[idx], ...body, available: body.available === undefined ? data.trails[idx].available : !!body.available };
  writeData(data);
  return res.json({ updated: true });
}

function remove(req, res) {
  const id = String(req.params.id);
  const data = readData();
  const before = data.trails ? data.trails.length : 0;
  data.trails = (data.trails || []).filter(x => String(x.id) !== id);
  writeData(data);
  if ((data.trails || []).length === before) return res.status(404).json({ error: 'Trilha não encontrada' });
  return res.json({ deleted: true });
}

module.exports = { list, getOne, create, update, remove };
