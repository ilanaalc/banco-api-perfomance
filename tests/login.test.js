//importar http do k6 para m[odulo de execução de requisições
import http from 'k6/http';
//função que faz parte do k6 que faz aguadar por alguns segundos
import { sleep, check } from 'k6';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

//criar já exportando a constante options - k6 vai entender onde estão as opções que estão relacionados ao teste
export const options = {
    stages: [
      { duration: '10s', target: 10 }, //durante 10s coloque 10 uv para executar os testes
      { duration: '20s', target: 10 },
      { duration: '10s', target: 30 },
      { duration: '20s', target: 30 },
      { duration: '20s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'],
        http_req_failed: ['rate<0.01']
    }
}


export default function () {
  const url = 'http://localhost:3000/login';

  const payload = JSON.stringify(postLogin);

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Validar que o Status é 200': (r) => r.status === 200,
    'Validar que o Token é string': (r) => typeof(r.json().token) == 'string'
  })

  sleep(1);
  
}

//