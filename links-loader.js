// ================================================================
//  links-loader.js  —  JSONBin 연동 링크 저장/로드
//  어드민에서 저장 → JSONBin → index.html 즉시 반영
// ================================================================

const JSONBIN_API_KEY = '$2a$10$voerWcEY5FKhrzE.0zmGeeqZwD25ls6bejxyjK4nrPNIOAHW5ytVi';
const JSONBIN_BIN_ID  = '69c095e499b15f1d78364321';
const JSONBIN_URL     = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

const LinksStore = (() => {
  const LS_KEY = 'wollim_links_v2';
  let _data = {};
  let _syncing = false;

  // ── 초기 로드 ─────────────────────────────────────────────────
  // 우선순위: JSONBin → localStorage → 빈 객체
  async function init() {
    // 1) JSONBin에서 최신 데이터 로드
    try {
      const res = await fetch(JSONBIN_URL + '/latest', {
        headers: {
          'X-Master-Key': JSONBIN_API_KEY,
          'X-Bin-Meta': 'false',
        }
      });
      if (res.ok) {
        const json = await res.json();
        _data = json || {};
        // 로컬에도 캐시
        localStorage.setItem(LS_KEY, JSON.stringify(_data));
        console.log('[LinksStore] JSONBin 로드 완료:', Object.keys(_data).length + '개');
        return;
      }
    } catch (e) {
      console.warn('[LinksStore] JSONBin 로드 실패, 로컬 캐시 사용:', e.message);
    }

    // 2) JSONBin 실패 시 localStorage 캐시 사용
    try {
      const ls = localStorage.getItem(LS_KEY);
      if (ls) {
        _data = JSON.parse(ls);
        console.log('[LinksStore] 로컬 캐시 로드:', Object.keys(_data).length + '개');
        return;
      }
    } catch {}

    // 3) 둘 다 없으면 빈 객체
    _data = {};
  }

  // ── JSONBin에 저장 ────────────────────────────────────────────
  async function _pushToCloud() {
    if (_syncing) return;
    _syncing = true;
    try {
      const res = await fetch(JSONBIN_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': JSONBIN_API_KEY,
        },
        body: JSON.stringify(_data),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      console.log('[LinksStore] JSONBin 저장 완료');
    } catch (e) {
      console.error('[LinksStore] JSONBin 저장 실패:', e.message);
    } finally {
      _syncing = false;
    }
  }

  // ── 로컬 저장 + 클라우드 동기화 ──────────────────────────────
  function _persist() {
    localStorage.setItem(LS_KEY, JSON.stringify(_data));
    _pushToCloud(); // 비동기로 클라우드에 저장
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

  // ── JSON 파일 다운로드 ────────────────────────────────────────
  function exportJSON() {
    const blob = new Blob([JSON.stringify(_data, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'links.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // ── 클립보드 복사 ─────────────────────────────────────────────
  function copyToClipboard() {
    return navigator.clipboard?.writeText(JSON.stringify(_data, null, 2));
  }

  // ── Raw JSON 문자열 ───────────────────────────────────────────
  function rawJSON() {
    return JSON.stringify(_data, null, 2);
  }

  // ── 동기화 상태 확인 ──────────────────────────────────────────
  function isSyncing() {
    return _syncing;
  }

  return { init, get, has, set, clear, merge, stats, exportJSON, copyToClipboard, rawJSON, isSyncing };
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
    const isAudio = /\.(mp3|wav|ogg|m4a|aac)/i.test(url) || url.includes('cloudinary');
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
