document.getElementById('hello-btn').addEventListener('click', event => {
  alert("Hello there!");
});

document.addEventListener("DOMContentLoaded", () => {
  navigator.permissions.query({name: "window-placement"}).then((status) => {
    const isGranted = status.state == 'granted';
    if (!isGranted) setWindowPlacementPermissionButton();
    document.getElementById("window-placement").style.display = isGranted ? 'none' : 'inline';
  })
})

function setWindowPlacementPermissionButton() {
  document.getElementById("window-placement-btn").addEventListener('click', async (event) => {
    await window.getScreenDetails();
  });
}