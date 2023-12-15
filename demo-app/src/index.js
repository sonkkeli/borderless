/* WINDOW-MANAGEMENT PERMISSION THINGS */
function setWindowPlacementPermissionButton() {
  document
    .getElementById("window-placement-btn")
    .addEventListener("click", async (event) => {
      await window.getScreenDetails();
    });
}
document.addEventListener("DOMContentLoaded", () => {
  navigator.permissions.query({ name: "window-placement" }).then((status) => {
    const isGranted = status.state == "granted";
    if (!isGranted) setWindowPlacementPermissionButton();
    document.getElementById("window-placement").style.display = isGranted
      ? "none"
      : "inline";
  });
});

/* WINDOW CONTROLS THINGS */
document
  .getElementById("min-button")
  .addEventListener("click", async (event) => {
    await window.minimize();
  });
document
  .getElementById("max-button")
  .addEventListener("click", async (event) => {
    await window.maximize();
  });
document
  .getElementById("restore-button")
  .addEventListener("click", async (event) => {
    await window.restore();
  });
document.getElementById("close-button").addEventListener("click", (event) => {
  window.close();
});

/* DISPLAY-STATE THINGS */
for (const displayState of ["minimized", "maximized", "normal", "fullscreen"]) {
  document
    .getElementById(`${displayState}-match-media-btn`)
    .addEventListener("click", async (event) => {
      const result = window.matchMedia(
        `(display-state: ${displayState})`
      ).matches;
      alert(`Matches ${displayState}: ${result}`);
    });
}
for (const value of ["maximized", "fullscreen", "normal"]) {
  const mql = window.matchMedia(`(display-state: ${value})`);
  mql.onchange = (e) => {
    if (e.matches) {
      console.log(
        `This is a ${value} window of size ${window.innerHeight} * ${window.innerWidth} px`
      );
    }
  };
}

/* RESIZABLE THINGS */
async function toggleResizable() {
  const isResizable = window.matchMedia(`(resizable: true)`).matches;

  try {
    await window.setResizable(!isResizable);
  } catch (error) {
    console.log("Setting a fixed size window failed: ", error);
  }
}
document
  .getElementById("toggle-resizable-btn")
  .addEventListener("click", (event) => {
    toggleResizable();
  });
document
  .getElementById("resizable-match-media-btn")
  .addEventListener("click", async (event) => {
    const result = window.matchMedia(`(resizable: true)`).matches;
    alert(`IsTrue resizable: ${result}`);
  });

/* WINDOW MOVE THINGS */
window.addEventListener("move", (event) => {
  document.getElementById("screenx").innerText = window.screenX;
  document.getElementById("screeny").innerText = window.screenY;
});
window.addEventListener("resize", (event) => {
  document.getElementById("height").innerText = window.innerHeight;
  document.getElementById("width").innerText = window.innerWidth;
});
addEventListener("load", (event) => {
  document.getElementById("height").innerText = window.innerHeight;
  document.getElementById("width").innerText = window.innerWidth;
  document.getElementById("screenx").innerText = window.screenX;
  document.getElementById("screeny").innerText = window.screenY;
});

/* FULLSCREEN POPUP THINGS */
// Note that this API requires fullscreen permission policy and a chrome flag to be enabled.
document
  .getElementById("fullscreen-popup-btn")
  .addEventListener("click", (event) => {
    window.open("/", "_blank", "popup,fullscreen");
  });
