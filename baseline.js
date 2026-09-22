import http from 'k6/http';
import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';

const cartLatency = new Trend('cart_latency', true);
const reportLatency = new Trend('report_latency', true);

export const options = {
  vus: 20,
  duration: '1m',
  summaryTrendStats: [
    'avg', 'min', 'med', 'max', 'p(95)', 'p(99)',
  ],
};

export default function () {
  const base = 'http://localhost:3000';

  const cart = http.post(`${base}/cart/add`, null, {
    tags: { name: 'cart' },
  });
  cartLatency.add(cart.timings.duration);
  check(cart, {
    'cart 200': (response) => response.status === 200,
  });

  const report = http.get(`${base}/report`, {
    tags: { name: 'report' },
  });
  reportLatency.add(report.timings.duration);
  check(report, {
    'report 200': (response) => response.status === 200,
  });

  const pay = http.post(`${base}/pay`, null, {
    tags: { name: 'pay' },
  });
  check(pay, {
    'pay 200': (response) => response.status === 200,
  });

  sleep(1);
}