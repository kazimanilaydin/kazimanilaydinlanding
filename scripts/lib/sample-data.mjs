// Offline stand-in for fetchProfile(), used by `npm run preview` to iterate on
// the design without a token. The numbers are made up; the Action never uses them.
import { rng } from './theme.mjs';

export function sampleProfile(now = new Date()) {
  const r = rng(42);
  const calendar = [];
  for (let i = 370; i >= 0; i--) {
    const d = new Date(now - i * 864e5);
    const busy = r() < 0.45;
    calendar.push({ date: d.toISOString().slice(0, 10), count: busy ? Math.floor(1 + r() * r() * 14) : 0 });
  }
  for (let i = 1; i <= 9; i++) calendar[calendar.length - 1 - i].count ||= 2;

  return {
    login: 'kazimanilaydin',
    name: 'Kazım Anıl AYDIN',
    createdAt: '2016-02-28T15:34:01Z',
    followers: 185,
    pullRequests: 24,
    issues: 11,
    publicRepos: 48,
    stars: 14,
    forks: 3,
    commitsYear: 512,
    contributionsYear: calendar.reduce((n, d) => n + d.count, 0),
    calendar,
    languages: [
      { name: 'JavaScript', color: '#f1e05a', size: 820000 },
      { name: 'Vue', color: '#41b883', size: 260000 },
      { name: 'Python', color: '#3572A5', size: 240000 },
      { name: 'TypeScript', color: '#3178c6', size: 150000 },
      { name: 'CSS', color: '#663399', size: 120000 },
      { name: 'HTML', color: '#e34c26', size: 90000 },
    ],
    featured: [
      { name: '_cheatsheets_and_notes', description: 'Cheatsheets', stars: 9, forks: 0, pushedAt: '2022-03-28T00:00:00Z', language: null },
      { name: 'ttable.js', description: 'T distribution table calculations / T dağılımı tablosu hesaplamaları', stars: 0, forks: 0, pushedAt: '2022-01-29T00:00:00Z', language: { name: 'JavaScript', color: '#f1e05a' } },
      { name: 'python2021course_logparser', description: 'Apache Log Parser', stars: 1, forks: 0, pushedAt: '2021-05-31T00:00:00Z', language: { name: 'Python', color: '#3572A5' } },
      { name: 'basic_twitter_trends_scrape', description: 'Using by Axios, JSdom, Node.js', stars: 1, forks: 0, pushedAt: '2022-02-26T00:00:00Z', language: { name: 'JavaScript', color: '#f1e05a' } },
      { name: 'xOx', description: 'xOx | Simple Game with HTML, CSS, JS and Vue.js', stars: 0, forks: 0, pushedAt: '2018-01-31T00:00:00Z', language: { name: 'CSS', color: '#663399' } },
      { name: 'mateMatik', description: 'MateMatik ~ Application of simple mathematical operations for mental development', stars: 0, forks: 0, pushedAt: '2018-01-31T00:00:00Z', language: { name: 'JavaScript', color: '#f1e05a' } },
    ],
  };
}
