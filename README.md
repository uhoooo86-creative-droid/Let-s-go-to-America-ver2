# 울림티쳐 링크 관리 시스템

## 📁 파일 구조

```
wollim-admin/
├── index.html          ← 메인 앱 (선생님들이 보는 화면)
├── admin.html          ← 어드민 패널 (링크 입력 화면)
├── data/
│   └── links.json      ← URL 저장소 (이 파일이 핵심!)
└── js/
    ├── data.js         ← 공통 데이터 (과목/프로그램/콘텐츠/행사)
    └── links-loader.js ← 링크 로드/저장 유틸
```

---

## 🚀 사용 방법

### 1. GitHub Pages 배포
```
GitHub repo → Settings → Pages → Source: main branch / (root)
```
그러면 `https://your-id.github.io/repo-name/` 으로 접근 가능

### 2. 어드민에서 링크 등록
1. `admin.html` 접속
2. 비밀번호: `wollim2026`
3. 과목 → 프로그램 → 호수 → 연령 순서로 드릴다운
4. 각 아이템의 음원/영상/계획안 URL 입력 후 **저장**
5. **내보내기 → JSON 다운로드** 클릭
6. 다운받은 `links.json` 파일을 이 폴더의 `data/links.json` 으로 교체
7. GitHub에 push

### 3. 링크 우선순위
```
data/links.json → localStorage (로컬 캐시)
```
- `links.json` 이 있으면 그걸 읽음
- 없으면 localStorage에 저장된 데이터 사용
- 둘 다 없으면 빈 템플릿 자동 생성

---

## 🔗 URL 형식별 미리보기

| 타입 | URL 예시 | 미리보기 방식 |
|------|----------|--------------|
| 음원 | `https://res.cloudinary.com/.../song.mp3` | 오디오 플레이어 |
| 음원 | `https://example.com/song.mp3` | 오디오 플레이어 |
| 영상 | `https://youtube.com/watch?v=xxx` | YouTube 임베드 |
| 영상 | `https://youtu.be/xxx` | YouTube 임베드 |
| 계획안 | `https://drive.google.com/file/d/.../view` | Drive 미리보기 |
| 계획안 | `https://docs.google.com/document/d/.../edit` | Docs 미리보기 |
| 계획안 | `https://example.com/plan.pdf` | PDF 뷰어 |

---

## ✏️ 콘텐츠 추가하기

`js/data.js` 파일에서 수정:

```js
// 새 과목 추가
const SUBJECTS = [
  ...
  { id: "new-subject", name: "새과목", icon: "🆕" },
];

// 새 콘텐츠 추가
const CONTENT = {
  "new-subject": {
    1: {
      step3: {
        tracks: [{ id: "ns-1-3a", title: "새 음원 제목" }],
        videos: [],
        plans:  [{ id: "nsp-m-1-3", title: "새 계획안 제목" }],
      }
    }
  }
};
```

아이템 `id` 추가 후 → `data/links.json` 에도 같은 id 추가:
```json
"ns-1-3a": { "trackUrl": "", "videoUrl": "", "planUrl": "" }
```

---

## 🔐 어드민 비밀번호 변경

`admin.html` 상단:
```js
const ADMIN_PW = 'wollim2026'; // ← 여기 변경
```

---

## 📱 로컬 테스트

```bash
# Python 내장 서버 (data/links.json fetch를 위해 서버 필요)
python3 -m http.server 8080

# 그 다음 브라우저에서
http://localhost:8080/index.html
http://localhost:8080/admin.html
```

> ⚠️ `file://` 프로토콜로 직접 열면 fetch가 안 됩니다. 반드시 서버를 통해 열어야 합니다.
