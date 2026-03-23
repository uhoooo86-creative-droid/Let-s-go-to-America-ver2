// ================================================================
//  data.js  —  울림티쳐 공통 데이터
//  이 파일 하나만 수정하면 index.html + admin.html 양쪽 반영
// ================================================================

const SUBJECTS = [
  { id: "english",  name: "영어",  icon: "🅰", category: "main" },
  { id: "coding",   name: "코딩",  icon: "⌨", category: "main" },
  { id: "music",    name: "음악",  icon: "♪", category: "arts" },
  { id: "senses",   name: "오감",  icon: "✋", category: "arts" },
  { id: "piano",    name: "피아노",icon: "🎹", category: "arts" },
  { id: "science",  name: "과학",  icon: "⚗", category: "etc"  },
  { id: "art",      name: "미술",  icon: "🖌", category: "etc"  },
  { id: "reading",  name: "독서",  icon: "📖", category: "etc"  },
  { id: "math",     name: "수학",  icon: "∑",  category: "etc"  },
  { id: "hangul",   name: "한글",  icon: "ㄱ", category: "etc"  },
];

const PROGRAMS = {
  english: [
    { id: "readyset",    name: "레디셋",       icon: "🚀" },
    { id: "tikitogi",    name: "티키토기",     icon: "🐣" },
  ],
  coding: [
    { id: "jemplay",     name: "잼플레이",     icon: "🎮" },
    { id: "ai-enter",    name: "AI엔터코딩",   icon: "🤖" },
    { id: "metakinder",  name: "메타킨더",     icon: "🌐" },
    { id: "ai-thinking", name: "AI 씽킹메이커",icon: "🧠" },
  ],
  music: [
    { id: "play-melody", name: "플레이 멜로디",    icon: "🎵" },
    { id: "world-music", name: "세상의 모든음악",  icon: "🌍" },
    { id: "with-muse",   name: "위드뮤즈",         icon: "🎼" },
  ],
  senses: [{ id: "scandi",    name: "스칸디오감", icon: "🧩" }],
  piano:  [
    { id: "fianse",      name: "피앙세", icon: "🎹" },
    { id: "singfiang",   name: "씽피앙", icon: "🎶" },
  ],
  science: [
    { id: "dodaeche",    name: "도대체과학연구소", icon: "🔬" },
    { id: "anda",        name: "안다과학",         icon: "🧪" },
    { id: "magic",       name: "매직사이언스",     icon: "✨" },
    { id: "tamgu",       name: "탐구교실",         icon: "🔎" },
    { id: "norience",    name: "놀이언스",         icon: "🎈" },
  ],
};

const STEPS = [
  { id: "step2", label: "STEP 2", age: "만2세" },
  { id: "step3", label: "STEP 3", age: "만3세" },
  { id: "step4", label: "STEP 4", age: "만4세" },
  { id: "step5", label: "STEP 5", age: "만5세" },
];

const ISSUES = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1, label: `${i + 1}호`,
}));

// ── 콘텐츠 목록 ─────────────────────────────────────────────────
// 구조: 프로그램있는 과목 → { program: { issue: { step: { tracks[], videos[], plans[] } } } }
//       프로그램없는 과목 → { issue: { step: { tracks[], videos[], plans[] } } }
const CONTENT = {
  english: {
    readyset: {
      1: {
        step2: {
          tracks: [{ id:"rs-1-2a", title:"Ready Set Hello" }, { id:"rs-1-2b", title:"Ready Set Greeting" }],
          videos: [{ id:"rsv-1-2a", title:"Ready Set Hello 영상" }],
          plans:  [{ id:"rsp-m-1-2", title:"레디셋 1호 월간계획안 (STEP2)" }],
        },
        step3: {
          tracks: [{ id:"rs-1-3a", title:"Ready Set Hello" }, { id:"rs-1-3b", title:"Ready Set ABC" }],
          videos: [{ id:"rsv-1-3a", title:"Ready Set Phonics Guide" }],
          plans:  [{ id:"rsp-m-1-3", title:"레디셋 1호 월간계획안 (STEP3)" }],
        },
        step4: {
          tracks: [{ id:"rs-1-4a", title:"Ready Set Hello" }, { id:"rs-1-4b", title:"Ready Set Phonics" }],
          videos: [{ id:"rsv-1-4a", title:"Ready Set Lesson Demo" }],
          plans:  [{ id:"rsp-m-1-4", title:"레디셋 1호 월간계획안 (STEP4)" }],
        },
        step5: {
          tracks: [{ id:"rs-1-5a", title:"Ready Set Hello" }, { id:"rs-1-5b", title:"Ready Set Story" }],
          videos: [],
          plans:  [{ id:"rsp-m-1-5", title:"레디셋 1호 월간계획안 (STEP5)" }],
        },
      },
      2: {
        step3: { tracks:[{ id:"rs-2-3a", title:"Ready Set Weather" }], videos:[], plans:[{ id:"rsp-m-2-3", title:"레디셋 2호 STEP3" }] },
        step4: { tracks:[{ id:"rs-2-4a", title:"Ready Set Weather" },{ id:"rs-2-4b", title:"Ready Set Days" }], videos:[], plans:[{ id:"rsp-m-2-4", title:"레디셋 2호 STEP4" }] },
      },
    },
    tikitogi: {
      1: {
        step2: { tracks:[{ id:"tt-1-2a", title:"Tiki Hello Song" },{ id:"tt-1-2b", title:"Tiki Dance" }], videos:[{ id:"ttv-1-2a", title:"Tiki Togi 수업 시연" }], plans:[{ id:"ttp-m-1-2", title:"티키토기 1호 STEP2" }] },
        step3: { tracks:[{ id:"tt-1-3a", title:"Tiki Hello Song" },{ id:"tt-1-3b", title:"Togi Phonics" }], videos:[{ id:"ttv-1-3a", title:"Tiki Togi 수업 시연 STEP3" }], plans:[{ id:"ttp-m-1-3", title:"티키토기 1호 STEP3" }] },
        step4: { tracks:[{ id:"tt-1-4a", title:"Tiki Colors" },{ id:"tt-1-4b", title:"Togi Shapes" }], videos:[], plans:[{ id:"ttp-m-1-4", title:"티키토기 1호 STEP4" }] },
      },
      2: {
        step2: { tracks:[{ id:"tt-2-2a", title:"Tiki Animals" }], videos:[], plans:[{ id:"ttp-m-2-2", title:"티키토기 2호 STEP2" }] },
        step3: { tracks:[{ id:"tt-2-3a", title:"Tiki Animals" },{ id:"tt-2-3b", title:"Togi Zoo" }], videos:[], plans:[{ id:"ttp-m-2-3", title:"티키토기 2호 STEP3" }] },
      },
    },
  },
  coding: {
    jemplay: {
      1: { step3:{ tracks:[{ id:"jp-1-3a", title:"잼플레이 시작음악" }], videos:[{ id:"jpv-1-3a", title:"잼플레이 수업 시연" }], plans:[{ id:"jpp-m-1-3", title:"잼플레이 1호 STEP3" }] }, step4:{ tracks:[{ id:"jp-1-4a", title:"잼플레이 코딩송" }], videos:[], plans:[{ id:"jpp-m-1-4", title:"잼플레이 1호 STEP4" }] } },
    },
    "ai-enter": {
      1: { step4:{ tracks:[{ id:"ae-1-4a", title:"AI엔터 시작음악" },{ id:"ae-1-4b", title:"알고리즘 챈트" }], videos:[], plans:[{ id:"aep-m-1-4", title:"AI엔터 1호 STEP4" }] }, step5:{ tracks:[{ id:"ae-1-5a", title:"AI엔터 코딩송" }], videos:[{ id:"aev-1-5a", title:"AI엔터 시연 영상" }], plans:[{ id:"aep-m-1-5", title:"AI엔터 1호 STEP5" }] } },
    },
    metakinder: {
      1: { step3:{ tracks:[{ id:"mk-1-3a", title:"메타킨더 인트로" }], videos:[], plans:[{ id:"mkp-m-1-3", title:"메타킨더 1호 STEP3" }] }, step4:{ tracks:[{ id:"mk-1-4a", title:"메타킨더 코딩송" }], videos:[], plans:[{ id:"mkp-m-1-4", title:"메타킨더 1호 STEP4" }] } },
    },
    "ai-thinking": {
      1: { step4:{ tracks:[{ id:"at-1-4a", title:"씽킹메이커 시작" }], videos:[], plans:[{ id:"atp-m-1-4", title:"씽킹메이커 1호 STEP4" }] }, step5:{ tracks:[{ id:"at-1-5a", title:"씽킹메이커 챈트" }], videos:[], plans:[{ id:"atp-m-1-5", title:"씽킹메이커 1호 STEP5" }] } },
    },
  },
  music: {
    "play-melody": {
      1: {
        step2: { tracks:[{ id:"pm-1-2a", title:"봄바람" },{ id:"pm-1-2b", title:"리듬 놀이" }], videos:[{ id:"pmv-1-2a", title:"플레이멜로디 수업 시연" }], plans:[{ id:"pmp-m-1-2", title:"플레이멜로디 1호 STEP2" }] },
        step3: { tracks:[{ id:"pm-1-3a", title:"봄바람" },{ id:"pm-1-3b", title:"동물 소리" }], videos:[{ id:"pmv-1-3a", title:"플레이멜로디 시연 STEP3" }], plans:[{ id:"pmp-m-1-3", title:"플레이멜로디 1호 STEP3" }] },
        step4: { tracks:[{ id:"pm-1-4a", title:"봄바람" },{ id:"pm-1-4b", title:"악기 탐험" }], videos:[], plans:[{ id:"pmp-m-1-4", title:"플레이멜로디 1호 STEP4" }] },
      },
    },
    "world-music": {
      1: {
        step3: { tracks:[{ id:"wm-1-3a", title:"세계의 인사" }], videos:[{ id:"wmv-1-3a", title:"세상의모든음악 시연" }], plans:[{ id:"wmp-m-1-3", title:"세상의모든음악 1호 STEP3" }] },
        step4: { tracks:[{ id:"wm-1-4a", title:"아프리카 리듬" }], videos:[], plans:[{ id:"wmp-m-1-4", title:"세상의모든음악 1호 STEP4" }] },
        step5: { tracks:[{ id:"wm-1-5a", title:"오케스트라 탐험" }], videos:[], plans:[{ id:"wmp-m-1-5", title:"세상의모든음악 1호 STEP5" }] },
      },
    },
    "with-muse": {
      1: {
        step2: { tracks:[{ id:"wmu-1-2a", title:"뮤즈의 노래" }], videos:[], plans:[{ id:"wmup-m-1-2", title:"위드뮤즈 1호 STEP2" }] },
        step3: { tracks:[{ id:"wmu-1-3a", title:"뮤즈와 함께" }], videos:[], plans:[{ id:"wmup-m-1-3", title:"위드뮤즈 1호 STEP3" }] },
      },
    },
  },
  senses: {
    scandi: {
      1: {
        step2: { tracks:[{ id:"sc-1-2a", title:"오감 체조" },{ id:"sc-1-2b", title:"촉감 놀이 음악" }], videos:[], plans:[{ id:"scp-m-1-2", title:"스칸디오감 1호 STEP2" }] },
        step3: { tracks:[{ id:"sc-1-3a", title:"스칸디 오감놀이" }], videos:[], plans:[{ id:"scp-m-1-3", title:"스칸디오감 1호 STEP3" }] },
      },
    },
  },
  piano: {
    fianse: {
      1: {
        step3: { tracks:[{ id:"fi-1-3a", title:"피앙세 도레미" }], videos:[], plans:[{ id:"fip-m-1-3", title:"피앙세 1호 STEP3" }] },
        step4: { tracks:[{ id:"fi-1-4a", title:"피앙세 작은 별" }], videos:[], plans:[{ id:"fip-m-1-4", title:"피앙세 1호 STEP4" }] },
        step5: { tracks:[{ id:"fi-1-5a", title:"피앙세 워밍업" }], videos:[], plans:[{ id:"fip-m-1-5", title:"피앙세 1호 STEP5" }] },
      },
    },
    singfiang: {
      1: {
        step3: { tracks:[{ id:"sf-1-3a", title:"씽피앙 도레미송" }], videos:[], plans:[{ id:"sfp-m-1-3", title:"씽피앙 1호 STEP3" }] },
        step4: { tracks:[{ id:"sf-1-4a", title:"씽피앙 멜로디" }], videos:[], plans:[{ id:"sfp-m-1-4", title:"씽피앙 1호 STEP4" }] },
      },
    },
  },
  science: {
    dodaeche: { 1: { step4:{ tracks:[{ id:"dd-1-4a", title:"도대체 실험음악" }], videos:[{ id:"ddv-1-4a", title:"도대체 실험 영상" }], plans:[{ id:"ddp-m-1-4", title:"도대체 1호 STEP4" }] }, step5:{ tracks:[{ id:"dd-1-5a", title:"도대체 탐구송" }], videos:[], plans:[{ id:"ddp-m-1-5", title:"도대체 1호 STEP5" }] } } },
    anda:     { 1: { step4:{ tracks:[{ id:"an-1-4a", title:"안다과학 시작" }], videos:[], plans:[{ id:"anp-m-1-4", title:"안다과학 1호 STEP4" }] } } },
    magic:    { 1: { step3:{ tracks:[{ id:"mg-1-3a", title:"매직 실험음악" }], videos:[], plans:[{ id:"mgp-m-1-3", title:"매직사이언스 1호 STEP3" }] }, step4:{ tracks:[{ id:"mg-1-4a", title:"매직 사이언스송" }], videos:[], plans:[{ id:"mgp-m-1-4", title:"매직사이언스 1호 STEP4" }] } } },
    tamgu:    { 1: { step4:{ tracks:[{ id:"tg-1-4a", title:"탐구 시작음악" }], videos:[], plans:[{ id:"tgp-m-1-4", title:"탐구교실 1호 STEP4" }] }, step5:{ tracks:[{ id:"tg-1-5a", title:"탐구 실험송" }], videos:[], plans:[{ id:"tgp-m-1-5", title:"탐구교실 1호 STEP5" }] } } },
    norience: { 1: { step3:{ tracks:[{ id:"nr-1-3a", title:"놀이언스 시작" }], videos:[], plans:[{ id:"nrp-m-1-3", title:"놀이언스 1호 STEP3" }] }, step4:{ tracks:[{ id:"nr-1-4a", title:"놀이언스 챈트" }], videos:[], plans:[{ id:"nrp-m-1-4", title:"놀이언스 1호 STEP4" }] } } },
  },
  art: {
    1: { step2:{ tracks:[{ id:"a-1-2a", title:"그리기 시간 BGM" }], videos:[], plans:[{ id:"pa-m-1-2", title:"미술 1호 STEP2" }] }, step3:{ tracks:[{ id:"a-1-3a", title:"그리기 시간 BGM" }], videos:[], plans:[{ id:"pa-m-1-3", title:"미술 1호 STEP3" }] }, step4:{ tracks:[{ id:"a-1-4a", title:"그리기 시간 BGM" }], videos:[], plans:[{ id:"pa-m-1-4", title:"미술 1호 STEP4" }] } },
  },
  reading: {
    1: { step3:{ tracks:[{ id:"r-1-3a", title:"이야기 시간" }], videos:[], plans:[{ id:"pr-m-1-3", title:"독서 1호 STEP3" }] }, step4:{ tracks:[{ id:"r-1-4a", title:"이야기 시간" }], videos:[], plans:[{ id:"pr-m-1-4", title:"독서 1호 STEP4" }] } },
  },
  math: {
    1: { step3:{ tracks:[{ id:"mt-1-3a", title:"숫자 노래" }], videos:[], plans:[{ id:"pmt-m-1-3", title:"수학 1호 STEP3" }] }, step4:{ tracks:[{ id:"mt-1-4a", title:"숫자 노래" }], videos:[], plans:[{ id:"pmt-m-1-4", title:"수학 1호 STEP4" }] } },
  },
  hangul: {
    1: { step3:{ tracks:[{ id:"h-1-3a", title:"한글 놀이" }], videos:[], plans:[{ id:"ph-m-1-3", title:"한글 1호 STEP3" }] }, step4:{ tracks:[{ id:"h-1-4a", title:"자음 노래" }], videos:[], plans:[{ id:"ph-m-1-4", title:"한글 1호 STEP4" }] }, step5:{ tracks:[{ id:"h-1-5a", title:"받침 노래" }], videos:[], plans:[{ id:"ph-m-1-5", title:"한글 1호 STEP5" }] } },
  },
};

// ── 행사 데이터 ─────────────────────────────────────────────────
const EVENTS = {
  english: [
    {
      id: "ev1", title: "Let's Go America", date: "2026-04-01 ~ 06-30",
      icon: "🇺🇸", themeColor: "#3b82f6",
      subEvents: [
        { id:"ev1-ca", title:"California", emoji:"🌴", tracks:[{ id:"evt-ca-1",title:"California Dreamin'" },{ id:"evt-ca-2",title:"Beach Song" }], videos:[{ id:"evv-ca-1",title:"California 체험 가이드" }], plans:[{ id:"evp-ca-1",title:"California 수업 계획안" }] },
        { id:"ev1-ny", title:"New York",   emoji:"🗽", tracks:[{ id:"evt-ny-1",title:"New York New York" }], videos:[{ id:"evv-ny-1",title:"New York 체험 가이드" }], plans:[{ id:"evp-ny-1",title:"New York 수업 계획안" }] },
        { id:"ev1-tx", title:"Texas",      emoji:"🤠", tracks:[{ id:"evt-tx-1",title:"Cowboy Song" }], videos:[], plans:[{ id:"evp-tx-1",title:"Texas 수업 계획안" }] },
        { id:"ev1-hi", title:"Hawaii",     emoji:"🌺", tracks:[{ id:"evt-hi-1",title:"Aloha Song" },{ id:"evt-hi-2",title:"Hula Dance" }], videos:[{ id:"evv-hi-1",title:"Hawaii 체험 가이드" }], plans:[{ id:"evp-hi-1",title:"Hawaii 수업 계획안" }] },
        { id:"ev1-fl", title:"Florida",    emoji:"🐊", tracks:[{ id:"evt-fl-1",title:"Florida Fun" }], videos:[], plans:[{ id:"evp-fl-1",title:"Florida 수업 계획안" }] },
        { id:"ev1-ak", title:"Alaska",     emoji:"🏔", tracks:[{ id:"evt-ak-1",title:"Northern Lights" }], videos:[{ id:"evv-ak-1",title:"Alaska 체험 가이드" }], plans:[{ id:"evp-ak-1",title:"Alaska 수업 계획안" }] },
        { id:"ev1-il", title:"Illinois",   emoji:"🏙", tracks:[{ id:"evt-il-1",title:"Chicago Jazz" }], videos:[], plans:[{ id:"evp-il-1",title:"Illinois 수업 계획안" }] },
        { id:"ev1-co", title:"Colorado",   emoji:"⛰", tracks:[{ id:"evt-co-1",title:"Mountain Song" }], videos:[], plans:[{ id:"evp-co-1",title:"Colorado 수업 계획안" }] },
        { id:"ev1-la", title:"Louisiana",  emoji:"🎺", tracks:[{ id:"evt-la-1",title:"Jazz Parade" }], videos:[{ id:"evv-la-1",title:"Louisiana 체험 가이드" }], plans:[{ id:"evp-la-1",title:"Louisiana 수업 계획안" }] },
        { id:"ev1-dc", title:"Washington", emoji:"🏛", tracks:[{ id:"evt-dc-1",title:"Capital March" }], videos:[], plans:[{ id:"evp-dc-1",title:"Washington 수업 계획안" }] },
        { id:"ev1-az", title:"Arizona",    emoji:"🏜", tracks:[{ id:"evt-az-1",title:"Canyon Echo" }], videos:[], plans:[{ id:"evp-az-1",title:"Arizona 수업 계획안" }] },
        { id:"ev1-ma", title:"Massachusetts",emoji:"📚",tracks:[{ id:"evt-ma-1",title:"Study Song" }], videos:[], plans:[{ id:"evp-ma-1",title:"Massachusetts 수업 계획안" }] },
      ],
    },
    {
      id: "ev2", title: "Phonics Day", date: "2026-05-10",
      icon: "🔤", themeColor: "#8b5cf6",
      tracks:[{ id:"evt-ph-1",title:"Phonics Chant" }],
      videos:[{ id:"evv-ph-1",title:"파닉스 데이 시연 영상" }],
      plans: [{ id:"evp-ph-1",title:"Phonics Day 계획안" }],
    },
  ],
  coding: [
    {
      id:"ev3", title:"코딩 로봇 체험", date:"2026-04-20",
      icon:"🤖", themeColor:"#10b981",
      tracks:[{ id:"evt-rb-1",title:"로봇 댄스 음악" }],
      videos:[{ id:"evv-rb-1",title:"로봇 코딩 체험 가이드" }],
      plans: [{ id:"evp-rb-1",title:"코딩 로봇 체험 계획안" }],
    },
  ],
  music: [
    {
      id:"ev4", title:"봄 음악회", date:"2026-04-25",
      icon:"🌸", themeColor:"#ec4899",
      tracks:[{ id:"evt-bm-1",title:"음악회 오프닝" },{ id:"evt-bm-2",title:"봄의 왈츠" },{ id:"evt-bm-3",title:"음악회 피날레" }],
      videos:[{ id:"evv-bm-1",title:"음악회 무대 세팅 가이드" }],
      plans: [{ id:"evp-bm-1",title:"봄 음악회 운영 계획안" },{ id:"evp-bm-2",title:"봄 음악회 프로그램 순서" }],
    },
  ],
  piano: [
    {
      id:"ev5", title:"피아노 미니 콘서트", date:"2026-05-20",
      icon:"🎹", themeColor:"#f59e0b",
      tracks:[{ id:"evt-pn-1",title:"콘서트 인트로" }],
      videos:[],
      plans: [{ id:"evp-pn-1",title:"미니 콘서트 계획안" }],
    },
  ],
  senses: [],
  science: [
    {
      id:"ev6", title:"과학의 날 행사", date:"2026-04-21",
      icon:"🔬", themeColor:"#06b6d4",
      tracks:[{ id:"evt-sc-1",title:"실험 시작 음악" }],
      videos:[{ id:"evv-sc-1",title:"과학 실험 시연" }],
      plans: [{ id:"evp-sc-1",title:"과학의 날 운영 계획안" }],
    },
  ],
  art:[], reading:[], math:[], hangul:[],
};

// ── 헬퍼: 모든 아이템을 플랫하게 순회 ─────────────────────────
function forEachItem(callback) {
  Object.entries(CONTENT).forEach(([subj, subjData]) => {
    const hasProg = !!PROGRAMS[subj];
    if (hasProg) {
      Object.entries(subjData).forEach(([prog, issues]) => {
        Object.entries(issues).forEach(([issue, steps]) => {
          Object.entries(steps).forEach(([step, data]) => {
            ['tracks','videos','plans'].forEach(type => {
              (data[type]||[]).forEach(item => callback(item, {subj, prog, issue:Number(issue), step, type}));
            });
          });
        });
      });
    } else {
      Object.entries(subjData).forEach(([issue, steps]) => {
        Object.entries(steps).forEach(([step, data]) => {
          ['tracks','videos','plans'].forEach(type => {
            (data[type]||[]).forEach(item => callback(item, {subj, issue:Number(issue), step, type}));
          });
        });
      });
    }
  });
  // 행사 아이템도 순회
  Object.values(EVENTS).forEach(evList => {
    (evList||[]).forEach(ev => {
      const src = ev.subEvents || [ev];
      src.forEach(s => {
        ['tracks','videos','plans'].forEach(type => {
          (s[type]||[]).forEach(item => callback(item, {evId: ev.id, subEvId: s.id, type, isEvent: true}));
        });
      });
    });
  });
}

// ── JSON 스켈레톤 생성 (links.json 자동 생성용) ────────────────
function generateLinksTemplate() {
  const obj = {};
  forEachItem((item) => {
    obj[item.id] = { trackUrl: "", videoUrl: "", planUrl: "" };
  });
  return obj;
}
