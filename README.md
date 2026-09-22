# Лаб 03 — Чанарын сценарио, SLO, k6 threshold

М. Билгүүн-Эрдэнэ
B222270046

## Орчин

OS: Windows, PowerShell
Node.js: v25.5.0
npm: 11.8.0
Express: 5.2.1
k6.exe v2.2.0 (commit/00a9a1b7f5, go1.26.5, windows/amd64)
Сервер: http://localhost:3000

## Baseline хэмжилт

20 VU, 1 минутын турш локал API-ийн гурван endpoint-ийг шалгав.

| Хэмжүүр | Үр дүн |
|---|---:|
| Cart p95 | 1 ms |
| Cart p99 | 7.18 ms |
| Report p95 | 399 ms |
| Report p99 | 405.06 ms |
| Нийт хүсэлт | 2775 |
| Амжилттай хүсэлт | 2717 |
| Алдаатай хүсэлт | 58 |
| Нийт HTTP error rate | 2.09% |
| Payment error rate — тооцоолсон | 58 / 925 × 100 ≈ 6.27% |
| Availability — тооцоолсон | 2717 / 2775 × 100 ≈ 97.91% |

Cart latency-ийн SLO-г baseline p95 × 1.5 буюу
1 ms × 1.5 = 1.5 ms гэж сонгов.

[Бүтэн гаралт](results/baseline.txt)

![Baseline terminal screenshot](docs/screenshots/baseline.png)