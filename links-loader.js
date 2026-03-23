// ================================================================
//  links-loader.js  —  링크 데이터 로드/저장 공통 유틸
//
//  우선순위: data/links.json → localStorage 순서로 로드
//  저장: localStorage (즉시) + 내보내기(JSON 다운로드)
// ================================================================

const LinksStore = (() => {
  const LS_KEY = 'wollim_links_v2';
  let _data = {};

  // ── 초기 로드 ─────────────────────────────────────────────────
  async function init() {
    // 1) 먼저 localStorage 확인
    try {
      const ls = localStorage.getItem(LS_KEY);
      if (ls) { _data = JSON.parse(ls); return; }
    } catch {}

    // 2) data/links.json fetch 시도
    try {
      const res = await fetch('./data/links.json');
      if (res.ok) {
        _data = await res.json();
        localStorage.setItem(LS_KEY, JSON.stringify(_data));
        return;
      }
    } catch {}

    // 3) 둘 다 없으면 빈 객체 + 스켈레톤 생성 (data.js의 generateLinksTemplate 사용)
    if (typeof generateLinksTemplate === 'function') {
      _data = generateLinksTemplate();
    } else {
      _data = {};
    }
    _persist();
  }

  function _persist() {
    localStorage.setItem(LS_KEY, JSON.stringify(_data));
  }

  // ── CRUD ──────────────────────────────────────────────────────
  function get(itemId, typeKey) {
    return _data[itemId]?.[typeKey] || '';
  }

  function has(itemId, typeKey) {
    return !!(_data[itemId]?.[typeKey]);
  }

  function set(itemId, typeKey, url) {
    if (!_data[itemId]) _data[itemId] = {};
    _data[itemId][typeKey] = (url || '').trim();
    _persist();
  }

  function clear(itemId, typeKey) {
    if (_data[itemId]) {
      delete _data[itemId][typeKey];
      if (Object.keys(_data[itemId]).length === 0) delete _data[itemId];
    }
    _persist();
  }

  function merge(obj) {
    _data = Object.assign(_data, obj);
    _persist();
  }

  // ── 통계 ─────────────────────────────────────────────────────
  function stats() {
    let totalLinks = 0, filledItems = 0;
    Object.values(_data).forEach(v => {
      const filled = Object.values(v).filter(Boolean).length;
      if (filled) { filledItems++; totalLinks += filled; }
    });
    return { totalLinks, filledItems, raw: _data };
  }

  // ── 내보내기: JSON 파일 다운로드 ─────────────────────────────
  function exportJSON() {
    const blob = new Blob([JSON.stringify(_data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'links.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ── 내보내기: 클립보드 ────────────────────────────────────────
  function copyToClipboard() {
    return navigator.clipboard?.writeText(JSON.stringify(_data, null, 2));
  }

  // ── Raw 읽기 (어드민 JSON 뷰어용) ────────────────────────────
  function rawJSON() {
    return JSON.stringify(_data, null, 2);
  }

  return { init, get, has, set, clear, merge, stats, exportJSON, copyToClipboard, rawJSON };
})();

// ── 미리보기 헬퍼 ────────────────────────────────────────────────
function extractYouTubeId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

function getPreviewHTML(url, typeKey, title) {
  if (!url) return `<div style="padding:20px;text-align:center;color:#888;font-size:12px">URL을 먼저 등록해주세요</div>`;

  if (typeKey === 'videoUrl') {
    const ytId = extractYouTubeId(url);
    if (ytId) {
      return `<div style="position:relative;padding-top:56.25%">
        <iframe src="https://www.youtube.com/embed/${ytId}" style="position:absolute;inset:0;width:100%;height:100%;border:none" allowfullscreen></iframe>
      </div>`;
    }
    return linkFallback(url, '영상 열기');
  }

  if (typeKey === 'trackUrl') {
    const isAudio = /\.(mp3|wav|ogg|m4a|aac)/i.test(url) || url.includes('cloudinary') || url.includes('res.cloudinary');
    if (isAudio) {
      return `<div style="padding:16px"><audio controls src="${url}" style="width:100%"></audio></div>`;
    }
    return linkFallback(url, '음원 열기');
  }

  if (typeKey === 'planUrl') {
    if (url.includes('docs.google.com') || url.includes('drive.google.com')) {
      const embedUrl = url.replace(/\/(view|edit)(\?.*)?$/, '/preview');
      return `<iframe src="${embedUrl}" style="width:100%;height:400px;border:none"></iframe>`;
    }
    if (/\.pdf/i.test(url)) {
      return `<iframe src="${url}" style="width:100%;height:400px;border:none"></iframe>`;
    }
    return linkFallback(url, '계획안 열기');
  }

  return linkFallback(url, '링크 열기');
}

function linkFallback(url, label) {
  return `<div style="padding:16px;text-align:center">
    <a href="${url}" target="_blank" rel="noopener"
       style="color:#3b82f6;font-size:13px;text-decoration:none;border-bottom:1px solid #3b82f6">
      ${label} →
    </a>
  </div>`;
}
