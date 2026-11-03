export function ScrollMotionToggle() {
  return (
<label className="scroll-motion-toggle" htmlFor="disable-smooth-scroll">
  <input id="disable-smooth-scroll" type="checkbox" />
  <span>부드러운 스크롤 끄기</span>
</label>

  );
}

export function Header() {
  return (
<header className="header">
  <div className="header__inner">
    <a className="logo" href="/" aria-label="한미그룹 홈"><img src="./images/logo.svg" alt="Hanmi 한미그룹" width={182} height={31} /></a>
    <nav className="gnb" aria-label="주요 메뉴">
      <ul className="gnb__list" id="gnb-list">
        <li className="gnb__item">
          <a className="gnb__link" href="#jobs">직무소개</a>
        </li>
        <li className="gnb__item">
          <a className="gnb__link" href="#requirement">지원자격 및 접수방법</a>
        </li>
        <li className="gnb__item">
          <a className="gnb__link" href="#exposition">채용설명회 일정</a>
        </li>
        <li className="gnb__item gnb__item--cta">
          <a className="btn btn--sm" href="#apply">
            <span>지원하기</span>
            <svg viewBox="0 0 7 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 1l5 5-5 5" />
            </svg>
          </a>
        </li>
      </ul>
      <a className="btn btn--sm gnb__cta" href="#apply">
        <span>지원하기</span>
        <svg viewBox="0 0 7 12" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1 1l5 5-5 5" />
        </svg>
      </a>
      <button className="gnb__toggle" type="button" aria-label="메뉴 열기" aria-expanded="false" aria-controls="gnb-list">
        <svg className="icon-open" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path d="M0 3h20M0 10h20M0 17h20" />
        </svg>
        <svg className="icon-close" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path d="M3 3l14 14M17 3L3 17" />
        </svg>
      </button>
    </nav>
  </div>
</header>

  );
}

export function SiteFooter() {
  return (
<footer className="footer">
  <div className="footer__inner">
    <a className="footer__logo" href="/" aria-label="한미그룹 홈">
      <img src="./images/logo.svg" alt="Hanmi 한미그룹" width={182} height={31} />
    </a>
  </div>
</footer>

  );
}

export function HeroSection() {
  return (
<section className="mv" id="main-visual" aria-labelledby="mv-title">
  <div className="mv__inner">
    <div className="mv__text">
      <div className="mv__copy">
        <p className="mv__season">2026년 하반기</p>
        <h1 className="mv__title" id="mv-title">
          <span className="mv__brand">한미그룹</span>
          <span className="mv__job">공개채용</span>
        </h1>
        <p className="mv__period">
          모집기간 :
          <time dateTime="2026-09-28">2026.9.28(월)</time> ~
          <time dateTime="2026-10-18T23:59">2026.10.18(일) 23:59</time>까지
        </p>
      </div>
      <a className="btn btn--lg" href="#jobs"><span>모집직무 바로가기!</span></a>
    </div>
    <div className="mv__art" aria-hidden="true">
      <span className="ring ring--glow" />
      <span className="ring ring--line" />
      <img className="micro" src="./images/mv_micro.png" alt="" />
      <img className="char1" src="./images/mv_char1.png" alt="" />
      <img className="char2" src="./images/mv_char2.png" alt="" />
      <img className="char3" src="./images/mv_char3.png" alt="" />
      <img className="char4" src="./images/mv_char4.png" alt="" />
      <span className="star star--white"><svg viewBox="0 0 24 24">
          <path d="M12 0c.8 7 5 11.2 12 12-7 .8-11.2 5-12 12-.8-7-5-11.2-12-12 7-.8 11.2-5 12-12z" fill="#fff" opacity=".85" /></svg></span>
      <span className="star star--red"><svg viewBox="0 0 24 24">
          <path d="M12 0c.8 7 5 11.2 12 12-7 .8-11.2 5-12 12-.8-7-5-11.2-12-12 7-.8 11.2-5 12-12z" fill="#FF5D32" /></svg></span>
      <span className="star star--yellow-l"><svg viewBox="0 0 24 24">
          <path d="M12 0c.8 7 5 11.2 12 12-7 .8-11.2 5-12 12-.8-7-5-11.2-12-12 7-.8 11.2-5 12-12z" fill="#FFC21A" /></svg></span>
      <span className="star star--yellow-s"><svg viewBox="0 0 24 24">
          <path d="M12 0c.8 7 5 11.2 12 12-7 .8-11.2 5-12 12-.8-7-5-11.2-12-12 7-.8 11.2-5 12-12z" fill="#FFC21A" /></svg></span>
      <span className="star star--purple"><svg viewBox="0 0 24 24">
          <path d="M12 0c.8 7 5 11.2 12 12-7 .8-11.2 5-12 12-.8-7-5-11.2-12-12 7-.8 11.2-5 12-12z" fill="#8F5BF0" /></svg></span>
    </div>
  </div>
  <button className="scroll" type="button" aria-label="아래로 스크롤" data-scroll>
    <svg viewBox="0 0 40 40" fill="none" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 15l10 10 10-10" />
    </svg>
  </button>
</section>

  );
}

export function FutureSection() {
  return (
<section className="mirae" id="mirae" aria-labelledby="mirae-title">
  <h2 className="mirae__title" id="mirae-title">
    <span className="mirae__title-gradient">새로운 미래</span><span className="mirae__title-black">를 향해 나아갑니다</span>
  </h2>
  <img className="mirae__cloud mirae__cloud--left-blur" src="images/mirae_cloud1.png" alt="멀리 떠 있는 흐릿한 흰 구름" aria-hidden="true" />
  <img className="mirae__cloud mirae__cloud--left" src="images/mirae_cloud2.png" alt="화면 왼쪽 아래에 떠 있는 흰 구름" aria-hidden="true" />
  <img className="mirae__cloud mirae__cloud--right" src="images/mirae_cloud3.png" alt="화면 오른쪽에 크게 떠 있는 흰 구름" aria-hidden="true" />
  <img className="mirae__cloud mirae__cloud--right-blur" src="images/mirae_cloud4.png" alt="멀리 떠 있는 작은 흐릿한 구름" aria-hidden="true" />
  <img className="mirae__star mirae__star--top" src="images/mirae_star1.png" alt="미래를 향해 반짝이는 노란 별" aria-hidden="true" />
  <img className="mirae__star mirae__star--bottom" src="images/mirae_star2.png" alt="언덕 옆에서 반짝이는 노란 별" aria-hidden="true" />
  <div className="mirae__art hanmi-walker" data-hanmi-walker>
    <canvas width={1920} height={1080} role="img" aria-label="초록 언덕 위를 걸으며 새로운 미래를 향해 나아가는 파란 캐릭터" />
    <span data-status role="status">이미지 준비 중</span>
  </div>
</section>

  );
}

export function HistorySection() {
  return (
<section className="history" id="history" aria-labelledby="history-title">
  <div className="history__clip" id="history-clip">
    <div className="history__content">
      <div className="history__deco" aria-hidden="true">
        <img className="history__obj history__obj--star" src="images/obj_star_big.png" alt="반짝이는 노란 별 세 개" aria-hidden="true" loading="lazy" />
        <img className="history__obj history__obj--beaker" src="images/obj_beaker.png" alt="분홍빛 용액이 담긴 실험용 비커" aria-hidden="true" loading="lazy" />
        <img className="history__obj history__obj--mol-blur1" src="images/obj_mol_blur1.png" alt="흐릿하게 처리된 푸른 분자 구조" aria-hidden="true" loading="lazy" />
        <img className="history__obj history__obj--microscope" src="images/obj_microscope.png" alt="파란색 현미경" aria-hidden="true" loading="lazy" />
        <img className="history__obj history__obj--mol-blur2" src="images/obj_mol_blur2.png" alt="흐릿하게 처리된 회색 분자 구조" aria-hidden="true" loading="lazy" />
        <img className="history__obj history__obj--mol" src="images/obj_mol_big.png" alt="투명하게 빛나는 분자 구조 모형" aria-hidden="true" loading="lazy" />
        <img className="history__obj history__obj--cloud" src="images/cloud_blur_medium.png" alt="캐릭터 아래에 깔린 흐릿한 구름 그림자" aria-hidden="true" loading="lazy" />
        <img className="history__obj history__obj--char" src="images/con2_char.png" alt="사원증을 걸고 걸어가는 파란 알약 캐릭터" aria-hidden="true" loading="lazy" />
      </div>
      <div className="history__inner">
        <h2 className="history__title" id="history-title">
          한미의 도전은 작은 가능성에서<br />시작되었습니다.
        </h2>
        <div className="history__timeline">
          <p className="history__count history__count--start">
            <span className="history__count-num">53</span><span className="history__count-unit">th</span>
          </p>
          <div className="history__flow">
            <div className="history__row">
              <h3 className="history__period">1973~2001</h3>
              <p className="history__heading">한계를 하나씩 넘을 때마다,</p>
              <ul className="history__list">
                <li className="history__item">
                  <span className="history__year">1973</span>
                  <span className="history__desc">한미약품공업주식회사 설립</span>
                </li>
                <li className="history__item">
                  <span className="history__year">1984</span>
                  <span className="history__desc">팔탄 GMP 공장 신축</span>
                </li>
                <li className="history__item">
                  <span className="history__year">1989</span>
                  <span className="history__desc">세프트리악손 제조방법 Roche사 기술 수출</span>
                </li>
                <li className="history__item">
                  <span className="history__year">1997</span>
                  <span className="history__desc">마이크로에멀젼 제제기술 Novartis사 기술 수출</span>
                </li>
              </ul>
              <figure className="history__figure">
                <img src="images/his1.png" alt="한미약품 초기 대표 제품인 텐텐과 쎄쎄 패키지" width={375} height={202} loading="lazy" />
              </figure>
            </div>
            <div className="history__row history__row--reverse">
              <h3 className="history__period">2002~2010</h3>
              <ul className="history__list">
                <li className="history__item">
                  <span className="history__year">2004</span>
                  <span className="history__desc">국내 최초 고혈압치료제 ‘아모디핀’ 미국특허 획득</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2006</span>
                  <span className="history__desc">세계 최초 유소아 해열 시럽제 개량신약 ‘맥시부펜’ 개발
                    성공</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2008</span>
                  <span className="history__desc">국내 최초 주사용항생제 세프트리악손 美 FDA 승인</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2009</span>
                  <span className="history__desc">세계최초 암로디핀+로살탄 복합제 ‘아모잘탄’ 발매</span>
                </li>
              </ul>
              <figure className="history__figure">
                <img src="images/his2.png" alt="노을 지는 해변에서 함께 점프하는 사람들의 실루엣" width={415} height={300} loading="lazy" />
              </figure>
            </div>
            <div className="history__row">
              <h3 className="history__period">2011~2015</h3>
              <p className="history__heading">
                새로운 가능성이 현실이 되었어요.
              </p>
              <ul className="history__list">
                <li className="history__item">
                  <span className="history__year">2011</span>
                  <span className="history__desc">MSD와 ‘아모잘탄’ 50여개국 수출 계약 체결</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2012</span>
                  <span className="history__desc">‘LAPS-GCSF’ 美 스펙트럼사와 공동개발 및 상업화
                    계약</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2013</span>
                  <span className="history__desc">국내 개량신약 최초 미국 FDA 승인 및 미국 출시
                    ‘에소메졸’</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2014</span>
                  <span className="history__desc">‘트리약손’ 국내 최초 유럽 4개국 시판 허가</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2015</span>
                  <span className="history__desc">한국 사상 최대규모 릴레이 기술수출</span>
                </li>
              </ul>
              <figure className="history__figure">
                <img src="images/his3.png" alt="에소메졸 20mg·40mg 제품과 美 스펙트럼 파마슈티컬스 로고" width={500} height={254} loading="lazy" />
              </figure>
            </div>
            <div className="history__row history__row--reverse">
              <h3 className="history__period">2016~2020</h3>
              <ul className="history__list">
                <li className="history__item">
                  <span className="history__year">2016</span>
                  <span className="history__desc">차세대 RAF 저해제, Roche 제넨텍 기술수출</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2017</span>
                  <span className="history__desc">‘에소메졸’ 국내 제약회사 최초 미국약전(USP)
                    등재</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2018</span>
                  <span className="history__desc">‘Glucagon Analog’, ‘오락솔’ 차세대 AML 치료제 美
                    희귀의약품 지정</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2019</span>
                  <span className="history__desc">최근 10년간 처방실적 최다 4조 4,176억원</span>
                </li>
              </ul>
              <figure className="history__figure">
                <img src="images/his4.png" alt="로수젯 제품군과 ASCO, USP 로고" width={467} height={226} loading="lazy" />
              </figure>
            </div>
            <div className="history__row">
              <h3 className="history__period">2021~2026</h3>
              <p className="history__heading">
                하지만 아직, 가야 할 길이 더 남아 있습니다.
              </p>
              <ul className="history__list">
                <li className="history__item">
                  <span className="history__year">2021</span>
                  <span className="history__desc">‘로수젯’, 국내사 개발 처방의약품 매출 1위 달성</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2022</span>
                  <span className="history__desc">‘롤론티스’ 한국 최초 FDA 허가 받은 바이오신약 등재<br />‘로수젯
                    RACING 연구’ 세계 최고 권위 의학저널 ‘LANCET’
                    등재</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2023</span>
                  <span className="history__desc">비만 프로젝트 ‘H.O.P’ 프로젝트 가동</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2024</span>
                  <span className="history__desc">근손실 한계 뛰어넘은 신개념 비만 신약 ‘HM17321’
                    발표</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2025</span>
                  <span className="history__desc">‘로수젯’ 한국 전문의약품 시장 1위 품목 등록<br />한미약품
                    8년 연속 원외처방 1위<br />미국암연구학회(AACR)서 국내
                    최다 11개 연구 성과 발표<br />한미사이언스 약국화장품
                    ‘EGF크림’ 27만개 완판</span>
                </li>
                <li className="history__item">
                  <span className="history__year">2026</span>
                  <span className="history__desc">희귀질환치료제 ‘LAPS-GLP2’ 릴리 기술수출<br />한미
                    ‘완전두유·케어미’ 국제 우수 미각상 수상</span>
                </li>
              </ul>
              <figure className="history__figure">
                <img src="images/his5.png" alt="THE LANCET 200주년 표지와 롤론티스 제품, 작용 원리 도식" width={373} height={269} loading="lazy" />
              </figure>
            </div>
          </div>
          <p className="history__count history__count--end">
            <span className="history__count-num">100</span><span className="history__count-unit">th</span>
          </p>
        </div>
        <div className="history__closing">
          <p className="history__closing-text">
            한계를 넘을 때마다, 건강한 미래는 가까워졌습니다. 한계를 넘는
            일, 우리에게는 꽤 익숙하니까.
          </p>
          <p className="history__closing-title">
            수많은 도전이 오늘의 한미를 만들었습니다.<br />이제 또 다른
            가능성을 향해 당신과 함께 나아갑니다.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* JS 가 동작할 때만 노출(hidden 해제) */}
  <button className="history__toggle" type="button" aria-expanded="false" aria-controls="history-clip" hidden>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 10l6 6 6-6" />
      <path d="M6 5l6 6 6-6" />
    </svg>
    <span className="history__toggle-label">펼치기</span>
  </button>
</section>

  );
}

export function JobsSection() {
  return (
<section className="jobs" id="jobs" aria-labelledby="jobs-title">
  <div className="jobs__inner">
    <header className="jobs__head">
      <div className="jobs__heading">
        <img className="jobs__logo" src="./images/con3_logo.png" alt="Hanmi 한미 로고" width={216} height={193} loading="lazy" />
        <h2 className="jobs__title" id="jobs-title">
          한미에서는 어떤 일을 할까요?
        </h2>
      </div>
      <p className="jobs__lead">
        일의 보람부터 성장의 순간까지, 먼저 경험한 현직자들이 솔직하게
        들려드립니다.
      </p>
    </header>
    <ul className="jobs__list">
      <li className="jobs__item">
        <a className="jobs__card" href="#">
          <div className="jobs__media">
            <img src="./images/con3_int1.png" alt="의약품 시험 장비가 놓인 실험실에서 주먹을 쥐어 보이며 미소 짓는 이건호 사원" width={1100} height={706} loading="lazy" />
          </div>
          <p className="jobs__desc">
            정밀한 시험과 분석으로 의약품의 품질을 확인해<br className="jobs__br" />
            안전하고 신뢰할 수 있는 의약품을 만들어갑니다.
          </p>
          <div className="jobs__foot">
            <p className="jobs__meta">
              <span className="jobs__dept">한미약품 품질관리</span>
              <span className="jobs__name">이건호 사원</span>
            </p>
            <span className="jobs__arrow" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </span>
          </div>
        </a>
      </li>
      <li className="jobs__item">
        <a className="jobs__card" href="#">
          <div className="jobs__media">
            <img src="./images/con3_int2.png" alt="밝은 사무 공간의 소파에 앉아 두 손을 모으고 미소 짓는 박진하 연구원" width={1100} height={706} loading="lazy" />
          </div>
          <p className="jobs__desc">
            신약 후보물질의 가능성을 과학적으로 검증해<br className="jobs__br" />
            새로운 치료제가 환자에게 향하는 첫걸음을 만듭니다.
          </p>
          <div className="jobs__foot">
            <p className="jobs__meta">
              <span className="jobs__dept">한미약품 전임상연구</span>
              <span className="jobs__name">박진하 연구원</span>
            </p>
            <span className="jobs__arrow" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10h12M11 5l5 5-5 5" />
              </svg>
            </span>
          </div>
        </a>
      </li>
    </ul>
    <a className="btn btn--lg jobs__more" href="#"><span>모든 현직자 알아가기!</span></a>
    {/* 장식(데스크탑/태블릿 시안에만 존재) */}
    <img className="jobs__obj jobs__obj--char" src="./images/con3_char.png" alt="사원증을 목에 걸고 서류가방을 든 채 걸어가는 보라색 캐릭터" aria-hidden="true" width={560} height={458} loading="lazy" />
    <img className="jobs__obj jobs__obj--bottle" src="./images/con3_bottle.png.png" alt="한미 로고가 새겨진 파란 뚜껑의 흰색 약병" aria-hidden="true" width={600} height={692} loading="lazy" />
  </div>
</section>

  );
}

export function TasksSection() {
  return (
<section className="tasks" id="tasks" aria-labelledby="tasks-title">
  <div className="tasks__hero">
    <img className="tasks__title-art" src="./images/tasks_bg_title.png" alt="" width={2000} height={474} loading="lazy" />
    <iframe className="tasks__character" src="./hanmi-reading-eye-tracking/embed.html" title="돋보기 캐릭터 애니메이션" width={1920} height={1080} loading="lazy" />
  </div>
  <div className="tasks__content">
    <header className="tasks__head">
      <h2 className="tasks__title" id="tasks-title">
        알약이를 따라<br />
        나에게 맞는 직무를 찾아봐요!
      </h2>
      <p className="tasks__lead">
        연구부터 생산, 영업, 경영지원까지 당신의 가능성이 빛날 자리를
        안내해 드릴게요.
      </p>
    </header>
    <div className="tasks__tabs" role="tablist" aria-label="직무 분야">
      <button className="tasks__tab" type="button" role="tab" id="tasks-tab-rnd" aria-controls="tasks-locations" aria-selected="false" tabIndex={-1} data-category="rnd">
        R&amp;D
      </button>
      <button className="tasks__tab" type="button" role="tab" id="tasks-tab-production" aria-controls="tasks-locations" aria-selected="false" tabIndex={-1} data-category="production">
        생산/품질
      </button>
      <button className="tasks__tab" type="button" role="tab" id="tasks-tab-sales" aria-controls="tasks-locations" aria-selected="false" tabIndex={-1} data-category="sales">
        영업
      </button>
      <button className="tasks__tab" type="button" role="tab" id="tasks-tab-management" aria-controls="tasks-locations" aria-selected="false" tabIndex={-1} data-category="management">
        경영관리
      </button>
      <button className="tasks__tab" type="button" role="tab" id="tasks-tab-clinical" aria-controls="tasks-locations" aria-selected="false" tabIndex={-1} data-category="clinical">
        임상
      </button>
      <button className="tasks__tab" type="button" role="tab" id="tasks-tab-global" aria-controls="tasks-locations" aria-selected="false" tabIndex={-1} data-category="global">
        글로벌
      </button>
      <button className="tasks__tab" type="button" role="tab" id="tasks-tab-healthcare" aria-controls="tasks-locations" aria-selected="true" tabIndex={0} data-category="healthcare">
        헬스케어
      </button>
    </div>
    <div className="tasks__locations" id="tasks-locations" role="tabpanel" aria-labelledby="tasks-tab-healthcare" aria-live="polite" />
  </div>
  <dialog className="tasks__modal" aria-labelledby="tasks-modal-title">
    <div className="tasks__modal-banner">
      <img src="./images/tasks_rnd_bg.jpg" alt="" width={1600} height={320} />
      <button className="tasks__modal-close" type="button" aria-label="직무 상세 닫기">
        ×
      </button>
    </div>
    <div className="tasks__modal-body">
      <h3 className="tasks__modal-title" id="tasks-modal-title" />
      <p className="tasks__modal-meta" />
      <p className="tasks__modal-career" />
      <section className="tasks__modal-block" aria-labelledby="tasks-modal-duties-title">
        <h4 id="tasks-modal-duties-title">직무 내용</h4>
        <ul className="tasks__modal-duties" />
      </section>
      <section className="tasks__modal-block" aria-labelledby="tasks-modal-qualifications-title">
        <h4 id="tasks-modal-qualifications-title">자격요건</h4>
        <ul className="tasks__modal-qualifications" />
      </section>
    </div>
  </dialog>
</section>

  );
}

export function RequirementsSection() {
  return (
<section className="requirement" id="requirement" aria-labelledby="requirement-title">
  <div className="requirement__inner">
    <header className="requirement__head">
      <h2 className="requirement__title" id="requirement-title">
        한미그룹과 함께하는 문은<br />활짝 열려 있습니다
      </h2>
      <img className="requirement__bulb" src="./images/require_bulb.png" alt="" width={104} height={104} loading="lazy" />
    </header>
    <div className="requirement__tabs" role="tablist" aria-label="지원 안내">
      <button className="requirement__tab" type="button" role="tab" id="requirement-tab-eligibility" aria-controls="requirement-panel-eligibility" aria-selected="true">
        지원자격
      </button>
      <button className="requirement__tab" type="button" role="tab" id="requirement-tab-process" aria-controls="requirement-panel-process" aria-selected="false" tabIndex={-1}>
        <span className="requirement__tab-symbol" aria-hidden="true">👆</span>
        전형절차 및 접수방법
      </button>
    </div>
    <div className="requirement__eligibility" id="requirement-panel-eligibility" role="tabpanel" aria-labelledby="requirement-tab-eligibility">
      <div className="requirement__criteria">
        <article className="requirement__criterion">
          <img className="requirement__criterion-icon" src="./images/require_ico_calendar_3d.png" alt="" width={64} height={64} loading="lazy" />
          <h3 className="requirement__criterion-title">
            27년 1월 입사가 가능한 자
          </h3>
        </article>
        <article className="requirement__criterion">
          <img className="requirement__criterion-icon" src="./images/require_ico_gradcap_3d.png" alt="" width={64} height={64} loading="lazy" />
          <h3 className="requirement__criterion-title">
            기졸업자 또는 27년 2월 졸업 예정자
          </h3>
        </article>
      </div>
      <ul className="requirement__notes">
        <li>남성의 경우 병역을 마쳤거나 면제인 분</li>
        <li>해외여행 (또는 해외 출장)에 결격사유가 없는 분</li>
        <li>취업보호대상자는 관련 법령에 의거하여 우대</li>
      </ul>
      <p className="requirement__notice">
        모집 직무별로 지원자격이 상이하오니 반드시
        <strong>채용 공고</strong>를 확인해 주시기 바랍니다.
      </p>
    </div>
    <div className="requirement__process" id="requirement-panel-process" role="tabpanel" aria-labelledby="requirement-tab-process" hidden>
      <section className="requirement__process-group" aria-labelledby="requirement-sales-title">
        <h3 className="requirement__process-title" id="requirement-sales-title">
          영업직군
        </h3>
        <div className="requirement__steps">
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">🗓️</span><span className="requirement__step-name">지원접수</span><span className="requirement__step-date">9.28~10.18</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">📄</span><span className="requirement__step-name">서류전형</span><span className="requirement__step-date">10.19~10.20</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">🔍</span><span className="requirement__step-name">AI역량검사</span><span className="requirement__step-date">10.21~10.25</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">🪪</span><span className="requirement__step-name">1차면접</span><span className="requirement__step-date">11월 중</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">📍</span><span className="requirement__step-name">현장체험</span><span className="requirement__step-date">12월 초</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">💬</span><span className="requirement__step-name">2차면접</span><span className="requirement__step-date">12월 중</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">📚</span><span className="requirement__step-name">교육전형</span><span className="requirement__step-date">27.1.4~</span>
          </div>
        </div>
      </section>
      <section className="requirement__process-group" aria-labelledby="requirement-other-title">
        <h3 className="requirement__process-title" id="requirement-other-title">
          영업 외 전직군
        </h3>
        <div className="requirement__steps requirement__steps--six">
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">🗓️</span><span className="requirement__step-name">지원접수</span><span className="requirement__step-date">9.28~10.18</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">📄</span><span className="requirement__step-name">서류전형</span><span className="requirement__step-date">10.19~10.20</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">🔍</span><span className="requirement__step-name">AI역량검사</span><span className="requirement__step-date">10.21~10.25</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">🪪</span><span className="requirement__step-name">1차면접</span><span className="requirement__step-date">11월 중</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">💬</span><span className="requirement__step-name">2차면접</span><span className="requirement__step-date">12월 중</span>
          </div>
          <span className="requirement__step-arrow" aria-hidden="true">›</span>
          <div className="requirement__step">
            <span className="requirement__step-icon" aria-hidden="true">🏢</span><span className="requirement__step-name">입사</span><span className="requirement__step-date">27.1.4<br />(경력직 협의 가능)</span>
          </div>
        </div>
      </section>
      <ul className="requirement__process-notes">
        <li>
          상기 일정은 상황에 따라 변경될 수 있으며 각 전형별 상세 일정은
          대상자에 한해 개별 안내 예정입니다
        </li>
        <li>
          입사지원서에 허위 기재가 있거나 제출서류가 허위로 판명되는 경우,
          또는 입사 이후 자격 미확보 및 상실하는 경우는 입사가 취소될 수
          있습니다.
        </li>
        <li>
          지원서 제출 후에는 수정이 절대 불가하오니, 주의하시기 바랍니다.
        </li>
        <li>
          전형단계별 결과는 E-Mail 및 SMS를 통하여 안내하오니 E-Mail 주소
          및 휴대전화 번호를 정확히 기재해주시기 바랍니다.
        </li>
        <li>
          입사 후 3개월간 수습기간이 적용되며, 수습 기간 중 성적이
          불량하거나 직무 수행 능력이 부족하다고 판단되는 경우 입사가
          취소될 수 있습니다.
        </li>
      </ul>
    </div>
  </div>
</section>

  );
}

export function ExpositionSection() {
  return (
<section className="exposition" id="exposition" aria-labelledby="exposition-title">
  <div className="exposition__inner">
    <header className="exposition__head">
      <img className="exposition__character" src="./images/expo_con7_char.png" alt="" width={700} height={700} loading="lazy" />
      <h2 className="exposition__title" id="exposition-title">
        Hanmi 박람회/캠퍼스로 출발!
      </h2>
      <p className="exposition__lead">
        한미그룹이 여러분을 만나러 박람회와 캠퍼스로 찾아갑니다.<br />
        우리가 어디서 만날지 궁금하다면 아래 지역에서 찾아보세요!
      </p>
    </header>
    <p className="exposition__hint">
      학교명/장소를 클릭하거나 터치하면 세부장소를 확인하실 수 있습니다.
    </p>
    <div className="exposition__tabs" role="tablist" aria-label="방문 일정 종류">
      <button className="exposition__tab" type="button" role="tab" id="exposition-tab-fair" aria-controls="exposition-calendar" aria-selected="true">
        박람회
      </button>
      <button className="exposition__tab" type="button" role="tab" id="exposition-tab-campus" aria-controls="exposition-calendar" aria-selected="false" tabIndex={-1}>
        캠퍼스
      </button>
    </div>
    <div className="exposition__regions" role="group" aria-label="캠퍼스 방문 지역" hidden>
      <button className="exposition__region" type="button" aria-pressed="true" data-region="seoul">
        서울
      </button>
      <button className="exposition__region" type="button" aria-pressed="false" data-region="gyeonggi">
        경기
      </button>
      <button className="exposition__region" type="button" aria-pressed="false" data-region="gangwon">
        강원
      </button>
      <button className="exposition__region" type="button" aria-pressed="false" data-region="gyeongsang">
        경상
      </button>
      <button className="exposition__region" type="button" aria-pressed="false" data-region="chungcheong">
        충청
      </button>
      <button className="exposition__region" type="button" aria-pressed="false" data-region="jeolla">
        전라
      </button>
    </div>
    <div className="exposition__calendar" id="exposition-calendar" role="tabpanel" aria-labelledby="exposition-tab-fair" aria-live="polite" />
  </div>
</section>

  );
}

export function LinksSection() {
  return (
<section className="con8" id="con8" aria-label="한미그룹 지원 링크">
  <img className="con8__character" src="./images/관련 채널/con8_char.png" alt="" width={281} height={357} loading="lazy" />
  <div className="con8__inner">
    <ul className="con8__links">
      <li className="con8__item">
        <a className="con8__link" href="https://www.youtube.com/@Hanmi.recruiter" target="_blank" rel="noopener noreferrer" aria-label="한미그룹 YouTube: 문화와 복지 알아보기">
          <div className="con8__image">
            <img src="./images/관련 채널/con8_img1.jpg.png" alt="" width={400} height={518} loading="lazy" />
            <div className="con8__overlay">
              <span className="con8__prompt">한미그룹의 문화와 복지가 궁금하다면?</span>
              <span className="con8__name">한미그룹 YouTube</span>
              <span className="con8__arrow" aria-hidden="true">›</span>
            </div>
          </div>
          <p className="con8__caption">
            한미그룹의 문화와 복지가 궁금하다면?
            <span className="con8__sign con8__sign--arrow" aria-hidden="true" />
            <span className="con8__sign con8__sign--underline" aria-hidden="true" />
            <span className="con8__sign con8__sign--star" aria-hidden="true" />
          </p>
        </a>
      </li>
      <li className="con8__item">
        <a className="con8__link" href="https://hanmi.recruiter.co.kr/career/career_intro_1" target="_blank" rel="noopener noreferrer" aria-label="한미그룹 직무 소개 페이지">
          <div className="con8__image">
            <img src="./images/관련 채널/con8_img2.jpg.png" alt="" width={400} height={518} loading="lazy" />
            <div className="con8__overlay">
              <span className="con8__prompt">한미그룹의 직무가 궁금하다면?</span>
              <span className="con8__name">한미그룹 직무 소개 페이지</span>
              <span className="con8__arrow" aria-hidden="true">›</span>
            </div>
          </div>
          <p className="con8__caption">
            한미그룹의 직무가 궁금하다면?
            <span className="con8__sign con8__sign--circle" aria-hidden="true" />
            <span className="con8__sign con8__sign--arrow-up" aria-hidden="true" />
          </p>
        </a>
      </li>
      <li className="con8__item">
        <a className="con8__link" href="https://hanmi.recruiter.co.kr/career/apply" target="_blank" rel="noopener noreferrer" aria-label="한미그룹 채용 홈페이지">
          <div className="con8__image">
            <img src="./images/관련 채널/con8_img3.jpg.png" alt="" width={400} height={518} loading="lazy" />
            <div className="con8__overlay">
              <span className="con8__prompt">한미그룹의 채용소식을 빠르게 받고 싶다면?</span>
              <span className="con8__name">한미그룹 채용 홈페이지</span>
              <span className="con8__arrow" aria-hidden="true">›</span>
            </div>
          </div>
          <p className="con8__caption">
            한미그룹의 채용소식을 빠르게 받고 싶다면?
            <span className="con8__sign con8__sign--wave" aria-hidden="true" />
          </p>
        </a>
      </li>
    </ul>
  </div>
</section>

  );
}

export function ApplySection() {
  return (
<section className="con9" id="con9" aria-labelledby="con9-title">
  <img className="con9__cloud con9__cloud--left" src="./images/관련 채널/con9_cloud_l.png.png" alt="" width={1120} height={501} loading="lazy" />
  <img className="con9__cloud con9__cloud--right" src="./images/관련 채널/con9_cloud_r.png.png" alt="" width={740} height={635} loading="lazy" />
  <div className="con9__inner" id="apply">
    <h2 className="con9__title" id="con9-title">
      당신에게 딱 맞는 자리를 찾으러 출발!
    </h2>
    <div className="con9__countdown" id="con9-countdown" data-deadline="2026-10-18T23:59:59+09:00" aria-label="지원 마감까지 남은 시간">
      <span className="con9__unit"><strong className="con9__number" data-countdown="days">00</strong><span className="con9__label">일</span></span>
      <span className="con9__unit"><strong className="con9__number" data-countdown="hours">00</strong><span className="con9__label">시간</span></span>
      <span className="con9__unit"><strong className="con9__number" data-countdown="minutes">00</strong><span className="con9__label">분</span></span>
      <span className="con9__unit"><strong className="con9__number" data-countdown="seconds">00</strong><span className="con9__label">초</span></span>
      <span className="con9__remaining">남았어요</span>
    </div>
    <p className="con9__status" id="con9-status" aria-live="polite" />
    <div className="con9__visual">
      <img className="con9__earth" src="./css/2026년 한미그룹 하반기 공개채용_files/con9_earth.png" alt="" width={444} height={444} loading="lazy" />
      <a className="con9__apply" href="https://hanmi.recruiter.co.kr/career/apply" target="_blank" rel="noopener noreferrer" aria-label="한미그룹 채용 지원 페이지 열기">
        지원하기
        <span className="con9__apply-arrow" aria-hidden="true">›</span>
      </a>
    </div>
    <p className="con9__guide">
      지구 아이콘을 클릭해 지원 페이지로 이동하세요.
    </p>
  </div>
</section>

  );
}
