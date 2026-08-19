import { marked } from 'marked';

const REPO_BLOB = 'https://github.com/legraphista/kids-tracking-watches-RO-market-analysis/blob/master';

// Render research markdown. Relative links between repo files would 404 on the
// site, so they are rewritten to the GitHub copy; watch-doc links become site links.
export function renderMd(md, { lang = 'en', base = '' } = {}) {
  const renderer = new marked.Renderer();
  const origLink = renderer.link.bind(renderer);
  renderer.link = (token) => {
    let href = token.href || '';
    if (!/^(https?:|mailto:|#)/.test(href)) {
      const clean = href.replace(/^(\.\/)+/, '').replace(/^(\.\.\/)+/, '');
      const wm = clean.match(/(?:^|\/)?(?:watches\/)?([a-z0-9-]+)\.md(#.*)?$/);
      const KNOWN = /^(angel-watch-series-r|anio-6|canyon-sunny-kw48|canyon-zefir-kw49|carneo-guardkid-4g-platinum|carneo-guardkid-4g-ultra|elari-kidphone-4gr|garett-kids-4g|garmin-bounce-2|imoo-x10|imoo-z3|imoo-z7|lamax-watchy4-play|savefamily-iconic-plus-2|tcl-movetime-mt48|white-label-setracker-class|wingereich-4g|wirsen-4g)$/;
      if (wm && KNOWN.test(wm[1])) {
        href = `${base}${lang === 'en' ? '/en' : ''}/watches/${wm[1]}/`;
      } else {
        href = `${REPO_BLOB}/research/${clean}`;
      }
      token.href = href;
    }
    return origLink(token);
  };
  return marked.parse(md, { gfm: true, renderer });
}
