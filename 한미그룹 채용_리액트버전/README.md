# 한미그룹 채용 사이트 (React)

Vite와 React 기반의 독립 실행 프로젝트입니다. Node.js 20.19 이상 또는 22.12 이상이 필요합니다.

## 개발 및 배포

프로젝트 폴더에서 아래 명령을 실행합니다.

```bash
npm install
npm run dev
npm run build
npm run preview
```

`npm run dev`는 로컬 개발 서버를 실행하고, `npm run build`는 배포 파일을 `dist/`에 생성합니다. 빌드 결과는 `npm run preview`로 배포 전에 확인할 수 있습니다.
빌드 경로는 상대경로(`./`)로 설정되어 있어 `dist/`를 도메인 루트 외의 하위 경로에 배포해도 정적 리소스와 JSON을 불러옵니다.

## 프로젝트 구조

- `src/App.jsx`: 페이지 섹션 구성 및 기존 브라우저 인터랙션 초기화
- `src/components/SiteSections.jsx`: 페이지의 주요 React 섹션 컴포넌트
- `src/components/WelfareSection.jsx`: JSON 데이터를 사용하는 복지 컴포넌트
- `src/data/benefits_data.json`: 복지 항목 데이터
- `public/css/`, `public/images/`: 스타일 및 이미지 에셋
- `public/js/`: 스크롤, 탭, 일정, 모달 인터랙션
- `public/hanmi-eye-tracking/`: Canvas 애니메이션 데이터와 플레이어
- `public/data/campus_schedule.json`: 캠퍼스 방문 일정

정적 리소스와 Canvas 에셋은 `public/`에서 관리하며, 페이지 코드 수정 후 `npm run build`로 배포 산출물을 갱신합니다.
