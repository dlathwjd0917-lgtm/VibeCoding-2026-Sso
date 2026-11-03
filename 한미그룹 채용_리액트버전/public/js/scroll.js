      if (
        "IntersectionObserver" in window &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        document.documentElement.classList.add("has-scroll-reveal");
      }
      (function () {
        var toggle = document.getElementById("disable-smooth-scroll");
        var reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        );
        var targetY = window.scrollY;
        var animationFrame = 0;
        var previousFrameTime = 0;

        function smoothingEnabled() {
          return !toggle.checked && !reducedMotion.matches;
        }

        function stopAnimation() {
          if (animationFrame) {
            window.cancelAnimationFrame(animationFrame);
            animationFrame = 0;
          }
          previousFrameTime = 0;
          targetY = window.scrollY;
        }

        function animateScroll(timestamp) {
          animationFrame = 0;
          var elapsed = previousFrameTime
            ? Math.min((timestamp - previousFrameTime) / 1000, 0.05)
            : 1 / 60;
          previousFrameTime = timestamp;

          var maxY =
            document.documentElement.scrollHeight - window.innerHeight;
          targetY = Math.max(0, Math.min(targetY, maxY));
          var currentY = window.scrollY;
          var progress = 1 - Math.exp(-2 * elapsed);
          var nextY = currentY + (targetY - currentY) * progress;

          if (Math.abs(targetY - nextY) < 0.75) {
            window.scrollTo(0, targetY);
            previousFrameTime = 0;
            return;
          }

          window.scrollTo(0, nextY);
          animationFrame = window.requestAnimationFrame(animateScroll);
        }

        function scrollPageTo(top) {
          if (!smoothingEnabled()) {
            stopAnimation();
            window.scrollTo(0, top);
            targetY = window.scrollY;
            return;
          }

          targetY = top;
          if (!animationFrame) {
            animationFrame = window.requestAnimationFrame(animateScroll);
          }
        }

        function hasScrollableParent(target, deltaY) {
          var element = target instanceof Element ? target : null;
          while (element && element !== document.body) {
            var style = window.getComputedStyle(element);
            var maxScroll = element.scrollHeight - element.clientHeight;
            if (
              maxScroll > 1 &&
              (style.overflowY === "auto" || style.overflowY === "scroll")
            ) {
              if (
                (deltaY < 0 && element.scrollTop > 0) ||
                (deltaY > 0 && element.scrollTop < maxScroll - 1)
              ) {
                return true;
              }
            }
            element = element.parentElement;
          }
          return false;
        }

        window.scrollPageTo = scrollPageTo;

        window.addEventListener(
          "wheel",
          function (event) {
            if (
              !smoothingEnabled() ||
              event.defaultPrevented ||
              event.ctrlKey ||
              Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
              event.deltaY === 0 ||
              !(event.target instanceof Element) ||
              event.target.closest(
                "dialog[open], .gnb__list, input, textarea, select, [contenteditable]:not([contenteditable='false'])",
              ) ||
              hasScrollableParent(event.target, event.deltaY)
            ) {
              return;
            }

            event.preventDefault();
            var delta = event.deltaY;
            if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) {
              delta *= 16;
            } else if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) {
              delta *= window.innerHeight;
            }

            var maxY =
              document.documentElement.scrollHeight - window.innerHeight;
            targetY = Math.max(
              0,
              Math.min((animationFrame ? targetY : window.scrollY) + delta, maxY),
            );
            if (!animationFrame) {
              animationFrame = window.requestAnimationFrame(animateScroll);
            }
          },
          { passive: false },
        );

        window.addEventListener(
          "scroll",
          function () {
            if (!animationFrame) targetY = window.scrollY;
          },
          { passive: true },
        );

        toggle.addEventListener("change", stopAnimation);
        reducedMotion.addEventListener("change", function (event) {
          if (event.matches) stopAnimation();
        });

        document.addEventListener("click", function (event) {
          if (
            event.defaultPrevented ||
            event.button !== 0 ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey
          ) {
            return;
          }

          var targetElement =
            event.target instanceof Element ? event.target : null;
          var link = targetElement && targetElement.closest("a[href^='#']");
          if (!link || link.target === "_blank") return;
          var target = document.getElementById(
            link.hash.slice(1),
          );
          if (!target) return;

          event.preventDefault();
          scrollPageTo(target.getBoundingClientRect().top + window.scrollY);
          history.pushState(null, "", link.hash);
        });
      })();
