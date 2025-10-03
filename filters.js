/**
 * Declarative filter rules for list views.
 * Currently used implicitly via inline logic; exposed for unit tests and future wiring.
 */
export const rulesHomebound = [
  {
    id: "bus-17-any-dest-from-giessen-bahnhof",
    test: (d) => String(d.line?.name||d.line?.id||'').match(/\b17\b/) && /Gießen Bahnhof/i.test(d.originLabel||d.origin||d.stop||d.stopName||'')
  },
  {
    id: "bus-1-to-roedgen-or-sss",
    test: (d) => /\b(1|Bus\s*1)\b/i.test(String(d.line?.name||d.line?.id||'')) && ( /r(?:ö|oe)dgen/i.test(String(d.direction||'')) || /sophie[\s-]*scholl[\s-]*schule/i.test(String(d.direction||'')) )
  }
];
