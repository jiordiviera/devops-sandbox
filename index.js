import { createServer } from 'http';

const PORT = process.env.PORT || 3000;
const VERSION = '1.0.0';

const server = createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok' }));
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Application en ligne ! Version : ${VERSION}\n`);
});

server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});