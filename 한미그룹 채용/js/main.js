      (function () {
        var btn = document.querySelector("[data-scroll]");
        if (!btn) return;
        btn.addEventListener("click", function () {
          var hero = document.getElementById("main-visual");
          var next = hero.nextElementSibling;
          var top = next
            ? next.getBoundingClientRect().top + window.scrollY
            : hero.offsetHeight;
          window.scrollPageTo(top);
        });
      })();

      /* 화면에 진입하는 콘텐츠 단위마다 등장 효과를 반복 적용 */
      (function () {
        var root = document.documentElement;
        if (!root.classList.contains("has-scroll-reveal")) return;

        var targetSelector = [
          "#mirae > .mirae__title",
          "#mirae > .mirae__art",
          "#history .history__inner > .history__title",
          "#history .history__row",
          "#jobs .jobs__head",
          "#jobs .jobs__item",
          "#jobs .jobs__more",
          "#welfare .welfare__head",
          "#welfare .welfare__section-intro",
          "#welfare .welfare__card",
          "#tasks .tasks__head",
          "#tasks .tasks__tabs",
          "#tasks .tasks__location",
          "#requirement .requirement__head",
          "#requirement .requirement__tabs",
          "#requirement .requirement__criterion",
          "#requirement .requirement__notes",
          "#requirement .requirement__notice",
          "#requirement .requirement__process-group",
          "#requirement .requirement__process-notes",
          "#exposition .exposition__head",
          "#exposition .exposition__hint",
          "#exposition .exposition__tabs",
          "#exposition .exposition__regions",
          "#exposition .exposition__day",
          "#con8 .con8__item",
        ].join(", ");

        var observer = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              entry.target.classList.toggle(
                "scroll-reveal--visible",
                entry.isIntersecting,
              );
            });
          },
          {
            rootMargin: "0px 0px -45% 0px",
            threshold: 0,
          },
        );

        function observeTarget(target) {
          if (target.classList.contains("scroll-reveal-item")) return;
          target.classList.add("scroll-reveal-item");
          observer.observe(target);
        }

        function observeTargetsWithin(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          var element = node;
          if (element.matches(targetSelector)) observeTarget(element);
          element.querySelectorAll(targetSelector).forEach(observeTarget);
        }

        function unobserveTargetsWithin(node) {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          var element = node;
          if (element.matches(targetSelector)) {
            observer.unobserve(element);
            element.classList.remove(
              "scroll-reveal-item",
              "scroll-reveal--visible",
            );
          }
          element.querySelectorAll(targetSelector).forEach(function (target) {
            observer.unobserve(target);
            target.classList.remove(
              "scroll-reveal-item",
              "scroll-reveal--visible",
            );
          });
        }

        document.querySelectorAll(targetSelector).forEach(observeTarget);

        ["#tasks-locations", "#exposition-calendar"].forEach(function (id) {
          var container = document.querySelector(id);
          if (!container) return;

          new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
              mutation.removedNodes.forEach(unobserveTargetsWithin);
              mutation.addedNodes.forEach(observeTargetsWithin);
            });
          }).observe(container, { childList: true, subtree: true });
        });
      })();

      /* 스크롤 방향에 따라 고정 헤더 표시 */
      (function () {
        var header = document.querySelector(".header");
        if (!header) return;

        var previousScrollY = window.scrollY;
        var ticking = false;
        var scrollThreshold = 6;
        var hideAfter = 100;

        function updateHeader() {
          var currentScrollY = Math.max(0, window.scrollY);
          var scrollDelta = currentScrollY - previousScrollY;

          if (document.body.classList.contains("is-menu-open")) {
            header.classList.remove("header--hidden");
            previousScrollY = currentScrollY;
            ticking = false;
            return;
          }

          if (currentScrollY <= hideAfter || scrollDelta < -scrollThreshold) {
            header.classList.remove("header--hidden");
          } else if (scrollDelta > scrollThreshold) {
            header.classList.add("header--hidden");
          }

          if (Math.abs(scrollDelta) > scrollThreshold) {
            previousScrollY = currentScrollY;
          }
          ticking = false;
        }

        window.addEventListener(
          "scroll",
          function () {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateHeader);
          },
          { passive: true },
        );
      })();

      /* 모바일 전체 메뉴 */
      (function () {
        var body = document.body;
        var toggle = document.querySelector(".gnb__toggle");
        var list = document.getElementById("gnb-list");
        if (!toggle || !list) return;

        function setMenu(open) {
          body.classList.toggle("is-menu-open", open);
          if (open) {
            document.querySelector(".header").classList.remove("header--hidden");
          }
          toggle.setAttribute("aria-expanded", String(open));
          toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
        }

        toggle.addEventListener("click", function () {
          setMenu(!body.classList.contains("is-menu-open"));
        });
        list.addEventListener("click", function (e) {
          if (e.target.closest("a")) setMenu(false);
        });
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && body.classList.contains("is-menu-open")) {
            setMenu(false);
            toggle.focus();
          }
        });
        /* 모바일 구간을 벗어나면(회전/리사이즈) 열린 메뉴 상태를 초기화 */
        window
          .matchMedia("(min-width: 601px)")
          .addEventListener("change", function (e) {
            if (e.matches) setMenu(false);
          });
      })();

      /* 연혁 섹션: 펼치기 / 접기 */
      (function () {
        var section = document.getElementById("history");
        if (!section) return;
        var clip = section.querySelector(".history__clip");
        var content = section.querySelector(".history__content");
        var toggle = section.querySelector(".history__toggle");
        var label = section.querySelector(".history__toggle-label");
        if (!clip || !content || !toggle || !label) return;

        var VISIBLE_RATIO = 2 / 3; /* 접힌 상태에서 보이는 비율 */
        /* 콘텐츠 실제 높이를 px 로 계산해 CSS 변수로 전달 (height 트랜지션용) */
        function measure() {
          var full = content.offsetHeight;
          clip.style.setProperty("--history-full", full + "px");
          clip.style.setProperty(
            "--history-collapsed",
            Math.round(full * VISIBLE_RATIO) + "px",
          );
        }

        function setExpanded(expanded) {
          section.classList.toggle("is-expanded", expanded);
          toggle.setAttribute("aria-expanded", String(expanded));
          label.textContent = expanded ? "접기" : "펼치기";
        }

        toggle.addEventListener("click", function () {
          var willExpand = !section.classList.contains("is-expanded");
          setExpanded(willExpand);
          if (willExpand) return;
          /* 접을 때: 섹션 상단이 화면 위로 지나간 경우에만 상단으로 복귀 */
          var top = section.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY > top) {
            window.scrollPageTo(top);
          }
        });

        measure();
        section.classList.add("is-collapsible");
        toggle.hidden = false;

        /* 이미지 로딩·리사이즈로 높이가 바뀌면 재측정 */
        if ("ResizeObserver" in window) {
          new ResizeObserver(measure).observe(content);
        } else {
          window.addEventListener("resize", measure);
          window.addEventListener("load", measure);
        }
      })();

      /* 지원자격 및 전형절차 탭 */
      (function () {
        var tabs = Array.from(document.querySelectorAll(".requirement__tab"));
        if (!tabs.length) return;

        function selectTab(tab) {
          tabs.forEach(function (item) {
            var selected = item === tab;
            item.setAttribute("aria-selected", String(selected));
            item.tabIndex = selected ? 0 : -1;
            document.getElementById(item.getAttribute("aria-controls")).hidden =
              !selected;
          });
        }

        tabs.forEach(function (tab, index) {
          tab.addEventListener("click", function () {
            selectTab(tab);
          });
          tab.addEventListener("keydown", function (event) {
            var nextIndex = index;
            if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
            else if (event.key === "ArrowLeft") {
              nextIndex = (index - 1 + tabs.length) % tabs.length;
            } else {
              return;
            }
            event.preventDefault();
            tabs[nextIndex].focus();
            selectTab(tabs[nextIndex]);
          });
        });
      })();

      /* 박람회 및 캠퍼스 방문 일정 */
      (function () {
        var section = document.getElementById("exposition");
        if (!section) return;
        var tabs = Array.from(section.querySelectorAll(".exposition__tab"));
        var regions = section.querySelector(".exposition__regions");
        var regionButtons = Array.from(section.querySelectorAll(".exposition__region"));
        var calendar = section.querySelector(".exposition__calendar");
        var mode = "fair";
        var selectedRegion = "seoul";

        var fairWeeks = [
          [
            { date: "8월 31일 (월)", events: ["KAIST"] },
            { date: "9월 1일 (화)", events: ["서울대학교", "서강대학교", "연세대학교"] },
            { date: "9월 2일 (수)", events: ["UNIST", "한양대학교"] },
            { date: "9월 3일 (목)", events: ["GIST"] },
            { date: "9월 4일 (금)", events: ["고려대학교", "성균관대학교(자연)"] },
          ],
          [
            { date: "9월 7일 (월)", events: ["KIST", "동국대학교"] },
            { date: "9월 8일 (화)", events: ["이화여자대학교", "중견기업박람회(대전)"] },
            { date: "9월 9일 (수)", events: ["POSTECH"] },
            { date: "" , events: [] },
            { date: "10월 7일 (수)", events: ["서울고용센터"] },
          ],
        ];
        var campusSchedule = null;
        var campusScheduleError = null;
        var regionNames = {
          seoul: "서울",
          gyeonggi: "경기",
          gangwon: "강원",
          gyeongsang: "경상",
          chungcheong: "충청",
          jeolla: "전라",
        };
        fetch("../data/campus_schedule.json")
          .then(function (response) {
            if (!response.ok) {
              throw new Error("캠퍼스 일정 JSON을 불러오지 못했습니다: " + response.status);
            }
            return response.json();
          })
          .then(function (data) {
            if (
              !Array.isArray(data) ||
              data.some(function (item) {
                return (
                  !item ||
                  typeof item.region !== "string" ||
                  typeof item.date !== "string" ||
                  typeof item.university !== "string" ||
                  typeof item.location !== "string" ||
                  typeof item.time !== "string"
                );
              })
            ) {
              throw new Error("캠퍼스 일정 JSON의 형식이 올바르지 않습니다.");
            }
            data.forEach(function (item) {
              parseCampusDate(item.date);
            });
            campusSchedule = data;
            renderCalendar();
          })
          .catch(function (error) {
            campusScheduleError = error;
            console.error(error);
            if (mode === "campus") renderCalendar();
          });

        function createElement(tag, className, text) {
          var element = document.createElement(tag);
          if (className) element.className = className;
          if (text) element.textContent = text;
          return element;
        }

        function parseCampusDate(value) {
          var match = /^(\d{1,2})월\s*(\d{1,2})일\s*\(([일월화수목금토])\)$/.exec(value);
          if (!match) {
            throw new Error("캠퍼스 일정 날짜 형식이 올바르지 않습니다: " + value);
          }
          var month = Number(match[1]);
          var day = Number(match[2]);
          var date = new Date(Date.UTC(2026, month - 1, day));
          var weekdays = ["일", "월", "화", "수", "목", "금", "토"];
          if (
            date.getUTCMonth() !== month - 1 ||
            date.getUTCDate() !== day ||
            weekdays[date.getUTCDay()] !== match[3]
          ) {
            throw new Error("캠퍼스 일정 날짜가 올바르지 않습니다: " + value);
          }
          return date;
        }

        function getCampusWeeks(region) {
          var entries = campusSchedule.filter(function (item) {
            return item.region === regionNames[region];
          });
          if (!entries.length) return [];

          var lastRegionDate = Math.max.apply(
            null,
            entries.map(function (item) {
              return parseCampusDate(item.date).getTime();
            }),
          );
          var weeksByStart = new Map();
          entries.forEach(function (item) {
            var date = parseCampusDate(item.date);
            var weekday = date.getUTCDay();
            var monday = new Date(date);
            monday.setUTCDate(date.getUTCDate() - (weekday === 0 ? 6 : weekday - 1));
            var weekKey = monday.toISOString().slice(0, 10);
            var dateKey = date.toISOString().slice(0, 10);
            if (!weeksByStart.has(weekKey)) {
              weeksByStart.set(weekKey, { monday: monday, days: new Map() });
            }
            var week = weeksByStart.get(weekKey);
            if (!week.days.has(dateKey)) {
              week.days.set(dateKey, {
                date: item.date,
                events: [],
              });
            }
            week.days.get(dateKey).events.push({
              name: item.university,
              place: item.location,
              time: item.time,
            });
          });

          return Array.from(weeksByStart.values())
            .sort(function (a, b) {
              return a.monday - b.monday;
            })
            .map(function (week) {
              var weekDays = [];
              for (var offset = 0; offset < 5; offset += 1) {
                var date = new Date(week.monday);
                date.setUTCDate(date.getUTCDate() + offset);
                if (date.getTime() > lastRegionDate) break;
                var dateKey = date.toISOString().slice(0, 10);
                var day = week.days.get(dateKey);
                weekDays.push(
                  day || {
                    date:
                      (date.getUTCMonth() + 1) +
                      "월 " +
                      date.getUTCDate() +
                      "일 (" +
                      ["일", "월", "화", "수", "목", "금", "토"][date.getUTCDay()] +
                      ")",
                    events: [],
                  },
                );
              }
              return weekDays;
            });
        }

        function renderCalendar() {
          var weeks = mode === "fair" ? fairWeeks : null;
          calendar.replaceChildren();
          calendar.setAttribute(
            "aria-labelledby",
            mode === "fair" ? "exposition-tab-fair" : "exposition-tab-campus",
          );
          if (mode === "campus") {
            if (campusScheduleError) {
              calendar.appendChild(
                createElement(
                  "p",
                  "exposition__empty",
                  "캠퍼스 일정을 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.",
                ),
              );
              calendar.lastElementChild.setAttribute("role", "alert");
              return;
            }
            if (!campusSchedule) {
              calendar.appendChild(
                createElement("p", "exposition__empty", "캠퍼스 일정을 불러오는 중입니다."),
              );
              return;
            }
            weeks = getCampusWeeks(selectedRegion);
            if (!weeks.length) {
              calendar.appendChild(
                createElement("p", "exposition__empty", "해당 지역의 일정이 없습니다."),
              );
              return;
            }
          }
          weeks.forEach(function (week) {
            var weekElement = createElement("div", "exposition__week");
            week.forEach(function (day) {
              var dayElement = createElement("article", "exposition__day");
              dayElement.appendChild(createElement("h3", "exposition__date", day.date));
              var eventList = createElement("div", "exposition__events");
              (day.events || []).forEach(function (event) {
                var name = typeof event === "string" ? event : event.name;
                var eventElement = createElement(
                  event.place ? "button" : "span",
                  "exposition__event",
                  name,
                );
                if (event.place) {
                  eventElement.type = "button";
                  eventElement.setAttribute("aria-expanded", "false");
                  eventElement.addEventListener("blur", function () {
                    closeEventDetail(eventElement);
                  });
                  eventElement.addEventListener("click", function () {
                    var existingDetail = eventElement.nextElementSibling;
                    if (existingDetail && existingDetail.classList.contains("exposition__event-detail")) {
                      if (existingDetail.closeTimer) {
                        window.clearTimeout(existingDetail.closeTimer);
                        existingDetail.closeTimer = null;
                        existingDetail.classList.add("exposition__event-detail--visible");
                        eventElement.setAttribute("aria-expanded", "true");
                      } else {
                        closeEventDetail(eventElement);
                      }
                      return;
                    }
                    var detail = createElement("div", "exposition__event-detail");
                    var place = createElement("p");
                    var placeLabel = createElement("strong", "", "장소");
                    place.append(placeLabel, document.createTextNode(event.place));
                    var time = createElement("p");
                    var timeLabel = createElement("strong", "", "시간");
                    time.append(timeLabel, document.createTextNode(event.time));
                    detail.append(place, time);
                    eventElement.after(detail);
                    eventElement.setAttribute("aria-expanded", "true");
                    detail.openTimer = window.setTimeout(function () {
                      detail.openTimer = null;
                      if (detail.parentNode && !detail.closeTimer) {
                        detail.classList.add("exposition__event-detail--visible");
                      }
                    }, 20);
                  });
                }
                eventList.appendChild(eventElement);
              });
              dayElement.appendChild(eventList);
              weekElement.appendChild(dayElement);
            });
            calendar.appendChild(weekElement);
          });
        }

        function closeEventDetail(eventElement) {
          var detail = eventElement.nextElementSibling;
          if (!detail || !detail.classList.contains("exposition__event-detail")) return;
          if (detail.openTimer) {
            window.clearTimeout(detail.openTimer);
            detail.openTimer = null;
          }
          detail.classList.remove("exposition__event-detail--visible");
          eventElement.setAttribute("aria-expanded", "false");
          if (detail.closeTimer) return;
          detail.closeTimer = window.setTimeout(function () {
            if (detail.parentNode) detail.remove();
          }, 500);
        }

        tabs.forEach(function (tab) {
          tab.addEventListener("click", function () {
            mode = tab.id === "exposition-tab-fair" ? "fair" : "campus";
            tabs.forEach(function (item) {
              var selected = item === tab;
              item.setAttribute("aria-selected", String(selected));
              item.tabIndex = selected ? 0 : -1;
            });
            regions.hidden = mode !== "campus";
            renderCalendar();
          });
        });
        regionButtons.forEach(function (button) {
          button.addEventListener("click", function () {
            selectedRegion = button.dataset.region;
            regionButtons.forEach(function (item) {
              item.setAttribute("aria-pressed", String(item === button));
            });
            renderCalendar();
          });
        });
        renderCalendar();
      })();

      /* 지원 마감 카운트다운 */
      (function () {
        var countdown = document.getElementById("con9-countdown");
        var status = document.getElementById("con9-status");
        if (!countdown || !status) return;

        var deadline = new Date(countdown.dataset.deadline).getTime();
        if (!Number.isFinite(deadline)) {
          console.error("지원 마감 일정을 확인할 수 없습니다.");
          status.textContent = "지원 마감 일정을 확인할 수 없습니다.";
          return;
        }

        var remainingText = countdown.querySelector(".con9__remaining");
        var units = {
          days: countdown.querySelector('[data-countdown="days"]'),
          hours: countdown.querySelector('[data-countdown="hours"]'),
          minutes: countdown.querySelector('[data-countdown="minutes"]'),
          seconds: countdown.querySelector('[data-countdown="seconds"]'),
        };
        var timer;

        function updateCountdown() {
          var totalSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
          var days = Math.floor(totalSeconds / 86400);
          var hours = Math.floor((totalSeconds % 86400) / 3600);
          var minutes = Math.floor((totalSeconds % 3600) / 60);
          var seconds = totalSeconds % 60;

          units.days.textContent = String(days).padStart(2, "0");
          units.hours.textContent = String(hours).padStart(2, "0");
          units.minutes.textContent = String(minutes).padStart(2, "0");
          units.seconds.textContent = String(seconds).padStart(2, "0");

          if (totalSeconds === 0) {
            remainingText.hidden = true;
            status.textContent = "지원 기간이 종료되었습니다.";
            if (timer) window.clearInterval(timer);
          }
        }

        updateCountdown();
        if (deadline > Date.now()) {
          timer = window.setInterval(updateCountdown, 1000);
        }
      })();

      /* 직무 탐색: 분야 탭, 근무지 아코디언, 상세 모달 */
      (function () {
        var section = document.querySelector(".tasks");
        if (!section) return;

        var categories = {
          rnd: {
            locations: [
              {
                name: "본사 (서울시 송파구)",
                count: 9,
                jobs: [
                  {
                    title: "신약 연구",
                    location: "본사 (서울시 송파구)",
                    category: "R&D",
                    duties: ["신규 의약품 후보물질 탐색 및 연구", "연구 데이터 분석과 실험 결과 정리", "유관 부서와 연구 과제 협업"],
                    qualifications: ["생명과학·약학 등 관련 전공자", "연구 분야에 대한 관심과 기초 지식 보유자"],
                  },
                  {
                    title: "바이오 연구",
                    location: "본사 (서울시 송파구)",
                    category: "R&D",
                    duties: ["바이오 의약품 연구 및 개발", "실험 계획 수립과 결과 검토", "연구 문서 및 데이터 관리"],
                    qualifications: ["바이오·생명과학 관련 전공자", "실험 및 분석 업무에 관심이 있는 분"],
                  },
                  {
                    title: "분석 연구",
                    location: "본사 (서울시 송파구)",
                    category: "R&D",
                    duties: ["의약품 분석법 개발 및 검증", "분석 장비 운용과 결과 보고", "연구 품질 향상을 위한 개선 활동"],
                    qualifications: ["화학·약학 등 관련 전공자", "분석 실험에 대한 이해가 있는 분"],
                  },
                ],
              },
              {
                name: "서울/수도권/영남",
                count: 1,
                jobs: [
                  {
                    title: "연구 지원",
                    location: "서울/수도권/영남",
                    category: "R&D",
                    duties: ["연구 과제 운영 및 자료 관리", "실험실 운영과 연구 일정 지원"],
                    qualifications: ["관련 업무 경험 또는 전공자 우대"],
                  },
                ],
              },
            ],
          },
          production: {
            locations: [
              {
                name: "본사 (서울시 송파구)",
                count: 9,
                jobs: [
                  {
                    title: "제조",
                    location: "본사 (서울시 송파구)",
                    category: "생산/품질",
                    duties: ["내용고형제(칭량, 과립, 타정, 코팅, 인쇄·선별) 제조공정 수행", "제조설비 운전 및 공정 중 점검", "제조기록서 작성 및 GMP 문서관리", "공정 개선활동 및 생산성 향상 업무"],
                    qualifications: ["고등학교 졸업 이상 학력 소지자 (전공무관)", "교대 근무 가능자"],
                  },
                  {
                    title: "품질관리",
                    location: "본사 (서울시 송파구)",
                    category: "생산/품질",
                    duties: ["원료 및 제품의 품질 시험", "시험 결과 기록과 관련 문서 관리", "분석 장비 점검 및 유지관리"],
                    qualifications: ["화학·생명과학 등 관련 전공자 우대", "꼼꼼하고 책임감 있게 업무를 수행하는 분"],
                  },
                  {
                    title: "생산기술지원",
                    location: "본사 (서울시 송파구)",
                    category: "생산/품질",
                    duties: ["생산 공정과 설비 개선 지원", "생산성 및 품질 지표 분석", "현장 개선 과제 운영"],
                    qualifications: ["기계·화학공학 등 관련 전공자 우대"],
                  },
                ],
              },
              {
                name: "서울/수도권/영남",
                count: 1,
                jobs: [
                  {
                    title: "제조",
                    location: "팔탄제조센터 (경기도 화성)",
                    category: "생산/품질",
                    duties: ["내용고형제(칭량, 과립, 타정, 코팅, 인쇄·선별) 제조공정 수행", "제조설비 운전 및 공정 중 점검", "제조기록서 작성 및 GMP 문서관리", "공정 개선활동 및 생산성 향상 업무"],
                    qualifications: ["고등학교 졸업 이상 학력 소지자 (전공무관)", "교대 근무 가능자"],
                  },
                ],
              },
            ],
          },
          sales: {
            locations: [
              {
                name: "본사 (서울시 송파구)",
                count: 9,
                jobs: [
                  {
                    title: "전문의약품 영업",
                    location: "본사 (서울시 송파구)",
                    category: "영업",
                    duties: ["의료기관 대상 제품 정보 및 학술 정보 전달", "거래처 관계 관리와 영업 계획 수립", "시장 동향 및 고객 의견 분석"],
                    qualifications: ["원활한 커뮤니케이션 역량을 갖춘 분", "운전 가능자 우대"],
                  },
                  {
                    title: "영업기획",
                    location: "본사 (서울시 송파구)",
                    category: "영업",
                    duties: ["영업 전략 및 목표 수립 지원", "실적 데이터 분석과 보고", "영업 현장 지원 프로그램 운영"],
                    qualifications: ["데이터 분석 및 문서 작성 역량 보유자"],
                  },
                ],
              },
              {
                name: "서울/수도권/영남",
                count: 1,
                jobs: [
                  {
                    title: "지역 영업",
                    location: "서울/수도권/영남",
                    category: "영업",
                    duties: ["담당 지역 거래처 관리", "제품 정보 전달 및 고객 문의 대응"],
                    qualifications: ["지역 근무 가능자", "고객 중심의 소통 역량을 갖춘 분"],
                  },
                ],
              },
            ],
          },
          management: {
            locations: [
              {
                name: "본사 (서울시 송파구)",
                count: 9,
                jobs: [
                  {
                    title: "인사",
                    location: "본사 (서울시 송파구)",
                    category: "경영관리",
                    duties: ["인사 제도 및 인력 운영 지원", "채용·교육 프로그램 기획과 운영", "인사 데이터 및 관련 문서 관리"],
                    qualifications: ["인사 업무에 대한 관심과 이해가 있는 분", "협업과 소통에 능숙한 분"],
                  },
                  {
                    title: "재무회계",
                    location: "본사 (서울시 송파구)",
                    category: "경영관리",
                    duties: ["회계 결산 및 재무 자료 작성", "비용 관리와 회계 관련 업무 지원", "내부 기준 및 관련 법규 준수"],
                    qualifications: ["회계·경영 관련 전공자 우대"],
                  },
                ],
              },
              {
                name: "서울/수도권/영남",
                count: 1,
                jobs: [
                  {
                    title: "총무",
                    location: "서울/수도권/영남",
                    category: "경영관리",
                    duties: ["사업장 운영 및 자산 관리", "구성원 업무 환경 지원"],
                    qualifications: ["총무·행정 업무 경험자 우대"],
                  },
                ],
              },
            ],
          },
          clinical: {
            locations: [
              {
                name: "본사 (서울시 송파구)",
                count: 9,
                jobs: [
                  {
                    title: "임상시험 운영",
                    location: "본사 (서울시 송파구)",
                    category: "임상",
                    duties: ["임상시험 계획 및 운영 관리", "시험기관·협력사 커뮤니케이션", "임상시험 관련 문서와 일정 관리"],
                    qualifications: ["약학·간호학·생명과학 등 관련 전공자", "임상시험 관련 기준에 대한 이해 보유자 우대"],
                  },
                  {
                    title: "임상 데이터 관리",
                    location: "본사 (서울시 송파구)",
                    category: "임상",
                    duties: ["임상 데이터 검토 및 품질 관리", "데이터 이슈 확인과 해결 지원"],
                    qualifications: ["데이터 관리 및 분석에 관심이 있는 분"],
                  },
                ],
              },
              {
                name: "서울/수도권/영남",
                count: 1,
                jobs: [
                  {
                    title: "임상 모니터링",
                    location: "서울/수도권/영남",
                    category: "임상",
                    duties: ["임상시험 기관 방문 및 진행 현황 점검", "시험 관련 자료와 필수 문서 확인"],
                    qualifications: ["관련 전공자 또는 임상시험 업무 경험자 우대"],
                  },
                ],
              },
            ],
          },
          global: {
            locations: [
              {
                name: "본사 (서울시 송파구)",
                count: 9,
                jobs: [
                  {
                    title: "해외사업 개발",
                    location: "본사 (서울시 송파구)",
                    category: "글로벌",
                    duties: ["해외 시장 및 사업 기회 조사", "글로벌 파트너 발굴과 협업", "해외 사업 전략 및 실행 지원"],
                    qualifications: ["외국어 커뮤니케이션 역량 보유자", "글로벌 사업에 대한 관심이 있는 분"],
                  },
                  {
                    title: "해외 제품 등록",
                    location: "본사 (서울시 송파구)",
                    category: "글로벌",
                    duties: ["해외 의약품 인허가 자료 준비", "국가별 등록 일정 및 자료 관리"],
                    qualifications: ["약학·생명과학 등 관련 전공자 우대"],
                  },
                ],
              },
              {
                name: "서울/수도권/영남",
                count: 1,
                jobs: [
                  {
                    title: "글로벌 마케팅",
                    location: "서울/수도권/영남",
                    category: "글로벌",
                    duties: ["글로벌 마케팅 자료 제작 지원", "해외 시장 및 경쟁 제품 동향 조사"],
                    qualifications: ["외국어 및 문서 작성 역량 보유자"],
                  },
                ],
              },
            ],
          },
          healthcare: {
            locations: [
              {
                name: "본사 (서울시 송파구)",
                count: 9,
                jobs: [
                  {
                    title: "헬스케어 서비스 기획",
                    location: "본사 (서울시 송파구)",
                    category: "헬스케어",
                    duties: ["건강관리 서비스 기획과 운영", "사용자 요구 및 서비스 데이터 분석", "서비스 개선 과제 발굴"],
                    qualifications: ["헬스케어 서비스에 관심이 있는 분", "기획 및 커뮤니케이션 역량 보유자"],
                  },
                  {
                    title: "디지털 헬스케어",
                    location: "본사 (서울시 송파구)",
                    category: "헬스케어",
                    duties: ["디지털 기반 건강관리 프로그램 운영", "서비스 사용 현황 분석과 개선 지원"],
                    qualifications: ["디지털 서비스 또는 건강관리 분야 경험자 우대"],
                  },
                  {
                    title: "건강 상담",
                    location: "본사 (서울시 송파구)",
                    category: "헬스케어",
                    duties: ["고객 건강 관련 문의와 상담 지원", "상담 내용 정리 및 서비스 연계"],
                    qualifications: ["보건·간호 관련 자격 또는 전공자 우대"],
                  },
                ],
              },
              {
                name: "서울/수도권/영남",
                count: 1,
                jobs: [
                  {
                    title: "헬스케어 운영",
                    location: "서울/수도권/영남",
                    category: "헬스케어",
                    duties: ["지역 건강관리 서비스 운영 지원", "이용자 문의 대응 및 현장 운영"],
                    qualifications: ["지역 근무 가능자", "고객 응대 경험자 우대"],
                  },
                ],
              },
            ],
          },
        };

        var tabs = Array.prototype.slice.call(
          section.querySelectorAll(".tasks__tab"),
        );
        var locations = section.querySelector(".tasks__locations");
        var dialog = section.querySelector(".tasks__modal");
        var closeButton = section.querySelector(".tasks__modal-close");
        var lastTrigger = null;
        if (!tabs.length || !locations || !dialog || !closeButton) return;

        function createJobButton(job, locationIndex, jobIndex) {
          var button = document.createElement("button");
          button.className = "tasks__job";
          button.type = "button";
          button.setAttribute("data-location-index", String(locationIndex));
          button.setAttribute("data-job-index", String(jobIndex));

          var title = document.createElement("span");
          title.textContent = job.title;
          var arrow = document.createElement("span");
          arrow.className = "tasks__job-arrow";
          arrow.setAttribute("aria-hidden", "true");
          arrow.textContent = "→";
          button.appendChild(title);
          button.appendChild(arrow);
          return button;
        }

        function renderCategory(categoryKey) {
          var category = categories[categoryKey];
          if (!category) return;

          locations.replaceChildren();
          locations.setAttribute(
            "aria-labelledby",
            "tasks-tab-" + categoryKey,
          );
          category.locations.forEach(function (location, locationIndex) {
            var item = document.createElement("section");
            item.className = "tasks__location";
            var toggle = document.createElement("button");
            var panelId = "tasks-panel-" + categoryKey + "-" + locationIndex;
            toggle.className = "tasks__location-toggle";
            toggle.type = "button";
            toggle.setAttribute("aria-expanded", String(locationIndex === 0));
            toggle.setAttribute("aria-controls", panelId);

            var label = document.createElement("span");
            label.textContent = location.name;
            var count = document.createElement("span");
            count.className = "tasks__count";
            count.textContent = String(location.count);
            count.setAttribute("aria-label", location.count + "개 직무");
            var chevron = document.createElement("span");
            chevron.className = "tasks__chevron";
            chevron.setAttribute("aria-hidden", "true");
            toggle.appendChild(label);
            toggle.appendChild(count);
            toggle.appendChild(chevron);

            var panel = document.createElement("div");
            panel.className = "tasks__panel";
            panel.id = panelId;
            panel.hidden = locationIndex !== 0;
            var jobs = document.createElement("div");
            jobs.className = "tasks__jobs";
            if (location.jobs.length) {
              location.jobs.forEach(function (job, jobIndex) {
                jobs.appendChild(
                  createJobButton(job, locationIndex, jobIndex),
                );
              });
            } else {
              var empty = document.createElement("p");
              empty.className = "tasks__empty";
              empty.textContent = "현재 안내할 직무가 없습니다.";
              jobs.appendChild(empty);
            }
            panel.appendChild(jobs);
            item.appendChild(toggle);
            item.appendChild(panel);
            if (locationIndex === 0) item.classList.add("is-open");
            locations.appendChild(item);
          });
        }

        function setActiveTab(tab) {
          tabs.forEach(function (item) {
            var active = item === tab;
            item.setAttribute("aria-selected", String(active));
            item.tabIndex = active ? 0 : -1;
          });
          renderCategory(tab.getAttribute("data-category"));
        }

        function appendListItems(list, entries) {
          list.replaceChildren();
          entries.forEach(function (entry) {
            var item = document.createElement("li");
            item.textContent = entry;
            list.appendChild(item);
          });
        }

        function openJob(job) {
          section.querySelector(".tasks__modal-title").textContent = job.title;
          var meta = section.querySelector(".tasks__modal-meta");
          meta.replaceChildren();
          var category = document.createElement("strong");
          category.textContent = job.category;
          meta.appendChild(category);
          meta.appendChild(document.createTextNode("  |  " + job.location));
          section.querySelector(".tasks__modal-career").textContent =
            "*신입/경력";
          appendListItems(
            section.querySelector(".tasks__modal-duties"),
            job.duties,
          );
          appendListItems(
            section.querySelector(".tasks__modal-qualifications"),
            job.qualifications,
          );
          lastTrigger = document.activeElement;
          dialog.showModal();
          document.body.classList.add("has-tasks-modal");
        }

        tabs.forEach(function (tab, tabIndex) {
          tab.addEventListener("click", function () {
            setActiveTab(tab);
          });
          tab.addEventListener("keydown", function (event) {
            var nextIndex = tabIndex;
            if (event.key === "ArrowRight") {
              nextIndex = (tabIndex + 1) % tabs.length;
            } else if (event.key === "ArrowLeft") {
              nextIndex = (tabIndex - 1 + tabs.length) % tabs.length;
            } else if (event.key === "Home") {
              nextIndex = 0;
            } else if (event.key === "End") {
              nextIndex = tabs.length - 1;
            } else {
              return;
            }
            event.preventDefault();
            tabs[nextIndex].focus();
            setActiveTab(tabs[nextIndex]);
          });
        });

        locations.addEventListener("click", function (event) {
          var toggle = event.target.closest(".tasks__location-toggle");
          if (toggle) {
            var currentItem = toggle.parentElement;
            var shouldOpen = toggle.getAttribute("aria-expanded") !== "true";
            Array.prototype.forEach.call(
              locations.querySelectorAll(".tasks__location"),
              function (item) {
                var button = item.querySelector(".tasks__location-toggle");
                var panel = item.querySelector(".tasks__panel");
                var active = item === currentItem && shouldOpen;
                item.classList.toggle("is-open", active);
                button.setAttribute("aria-expanded", String(active));
                panel.hidden = !active;
              },
            );
            return;
          }

          var jobButton = event.target.closest(".tasks__job");
          if (!jobButton) return;
          var categoryKey = locations
            .getAttribute("aria-labelledby")
            .replace("tasks-tab-", "");
          var location = categories[categoryKey].locations[
            Number(jobButton.getAttribute("data-location-index"))
          ];
          var job = location.jobs[
            Number(jobButton.getAttribute("data-job-index"))
          ];
          if (job) openJob(job);
        });

        closeButton.addEventListener("click", function () {
          dialog.close();
        });
        dialog.addEventListener("click", function (event) {
          if (event.target === dialog) {
            dialog.close();
          }
        });
        document.addEventListener("keydown", function (event) {
          if (event.key === "Escape" && dialog.open) {
            dialog.close();
          }
        });
        dialog.addEventListener("close", function () {
          document.body.classList.remove("has-tasks-modal");
          if (lastTrigger && document.contains(lastTrigger)) {
            lastTrigger.focus();
          }
        });

        renderCategory("healthcare");
      })();
