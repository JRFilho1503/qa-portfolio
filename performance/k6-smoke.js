// Smoke/load test com k6 contra uma API pública.
// Rodar: k6 run k6-smoke.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '30s',
  thresholds: {
    http_req_failed: ['rate<0.01'],   // menos de 1% de erro
    http_req_duration: ['p(95)<800'], // 95% das respostas < 800ms
  },
};

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts/1');
  check(res, {
    'status é 200': (r) => r.status === 200,
    'corpo tem id=1': (r) => r.json('id') === 1,
  });
  sleep(1);
}
