import { rulesHomebound } from '../filters.js';

function apply(list){ return list.filter(d => rulesHomebound.some(r => r.test(d))); }

test('Linie 17: alle ab Gießen Bahnhof', ()=>{
  const list = [
    { line:{name:'17'}, originLabel:'Gießen Bahnhof', direction:'Irgendwo' },
    { line:{name:'17'}, originLabel:'Nicht Gießen Bahnhof', direction:'Irgendwo' },
  ];
  const r = apply(list);
  expect(r).toHaveLength(1);
  expect(r[0].originLabel).toMatch(/Gießen Bahnhof/i);
});
