const MESSAGE_TYPE =
  "VITE_AUTO_HEIGHT";

function getContentHeight() {
  const root =
    document.getElementById(
      "root",
    );

  const page =
    document.querySelector(
      ".womens-hockey-page",
    );

  const heights = [];

  /*
    Measure the actual React content
    rather than relying primarily on
    body/html.

    This allows the Wix iframe to both
    grow and shrink accurately.
  */
  if (page) {
    const rect =
      page.getBoundingClientRect();

    heights.push(
      page.scrollHeight,
      page.offsetHeight,
      rect.height,
      rect.bottom + window.scrollY,
    );
  }

  if (root) {
    const rect =
      root.getBoundingClientRect();

    heights.push(
      root.scrollHeight,
      root.offsetHeight,
      rect.height,
    );
  }

  /*
    Fallback only if the expected
    elements cannot be found.
  */
  if (!heights.length) {
    heights.push(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement
        .scrollHeight,
      document.documentElement
        .offsetHeight,
    );
  }

  return Math.ceil(
    Math.max(...heights),
  );
}

export function initWixAutoHeight() {
  if (
    typeof window === "undefined" ||
    window.parent === window
  ) {
    return;
  }

  let lastHeight = 0;
  let animationFrame = null;

  const timeoutIds = [];
  const trackedImages = [];

  const sendHeight = (
    force = false,
  ) => {
    if (
      animationFrame !== null
    ) {
      cancelAnimationFrame(
        animationFrame,
      );
    }

    animationFrame =
      requestAnimationFrame(() => {
        animationFrame = null;

        const height =
          getContentHeight();

        if (
          !Number.isFinite(height) ||
          height < 100
        ) {
          return;
        }

        if (
          !force &&
          height === lastHeight
        ) {
          return;
        }

        lastHeight = height;

        window.parent.postMessage(
          {
            type: MESSAGE_TYPE,
            height,
            pathname:
              window.location.pathname,
          },
          "*",
        );
      });
  };

  const scheduleMeasurements =
    () => {
      [
        0,
        50,
        100,
        250,
        500,
        750,
        1000,
        1500,
        2500,
      ].forEach((delay) => {
        if (delay === 0) {
          sendHeight(true);
          return;
        }

        const timeoutId =
          window.setTimeout(
            () => {
              sendHeight(true);
            },
            delay,
          );

        timeoutIds.push(
          timeoutId,
        );
      });
    };

  /*
    Measure several times during
    initial rendering.

    This page has a large hero image,
    Lucide icons, responsive grids and
    multiple layout changes.
  */
  scheduleMeasurements();

  const root =
    document.getElementById(
      "root",
    );

  const page =
    document.querySelector(
      ".womens-hockey-page",
    );

  /*
    ResizeObserver catches:
    - desktop/tablet/mobile reflow
    - hero changes
    - benefit cards stacking
    - How To Join section stacking
    - waiver section stacking
    - text wrapping changes
  */
  const resizeObserver =
    new ResizeObserver(() => {
      sendHeight();
    });

  if (root) {
    resizeObserver.observe(
      root,
    );
  }

  if (
    page &&
    page !== root
  ) {
    resizeObserver.observe(
      page,
    );
  }

  /*
    Also watch for any DOM changes.
  */
  const mutationObserver =
    new MutationObserver(() => {
      sendHeight();
    });

  if (root) {
    mutationObserver.observe(
      root,
      {
        childList: true,
        subtree: true,
        characterData: true,
      },
    );
  }

  /*
    Important for this page because
    several major layout changes occur
    as the viewport gets narrower.
  */
  const handleResize = () => {
    sendHeight(true);

    [
      50,
      100,
      200,
      350,
      500,
      750,
      1000,
    ].forEach((delay) => {
      const timeoutId =
        window.setTimeout(
          () => {
            sendHeight(true);
          },
          delay,
        );

      timeoutIds.push(
        timeoutId,
      );
    });
  };

  const handleWindowLoad =
    () => {
      scheduleMeasurements();
    };

  window.addEventListener(
    "resize",
    handleResize,
  );

  window.addEventListener(
    "orientationchange",
    handleResize,
  );

  window.addEventListener(
    "load",
    handleWindowLoad,
  );

  /*
    The hero contains an external image.
    Re-measure after it loads or fails.
  */
  document
    .querySelectorAll("img")
    .forEach((image) => {
      if (!image.complete) {
        trackedImages.push(
          image,
        );

        image.addEventListener(
          "load",
          sendHeight,
        );

        image.addEventListener(
          "error",
          sendHeight,
        );
      }
    });

  /*
    Re-measure once fonts settle,
    because Barlow Condensed / DM Sans
    can alter wrapping and section height.
  */
  if (document.fonts?.ready) {
    document.fonts.ready
      .then(() => {
        sendHeight(true);
      })
      .catch(() => {});
  }

  return () => {
    resizeObserver.disconnect();
    mutationObserver.disconnect();

    window.removeEventListener(
      "resize",
      handleResize,
    );

    window.removeEventListener(
      "orientationchange",
      handleResize,
    );

    window.removeEventListener(
      "load",
      handleWindowLoad,
    );

    trackedImages.forEach(
      (image) => {
        image.removeEventListener(
          "load",
          sendHeight,
        );

        image.removeEventListener(
          "error",
          sendHeight,
        );
      },
    );

    timeoutIds.forEach(
      (timeoutId) => {
        window.clearTimeout(
          timeoutId,
        );
      },
    );

    if (
      animationFrame !== null
    ) {
      cancelAnimationFrame(
        animationFrame,
      );
    }
  };
}