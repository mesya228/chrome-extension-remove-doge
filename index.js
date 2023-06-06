const loadingDoge = document.getElementById('placeholder');

if (loadingDoge) {
  const svg = loadingDoge.getElementsByTagName('svg');

  if (svg && svg[0]) {
    loadingDoge.removeChild(svg[0]);
  }
}

window.onload = () => {
  let headerDogeRemoved = false;

  removeHeaderDoge();

  let timerId = setTimeout(
    (tick = () => {
      if (!headerDogeRemoved) {
        timerId = setTimeout(tick, 10);
      }
      
      removeHeaderDoge();
    }),
    10,
  );

  function removeHeaderDoge() {
    const headerDoge = document.querySelectorAll('h1[role="heading"] a[href="/home"] div');

    if (headerDoge && headerDoge[0]) {
      const svg = headerDoge[0].getElementsByTagName('svg');

      if (svg && svg[0]) {
        headerDoge[0].removeChild(svg[0]);
        clearTimeout(timerId);
        headerDogeRemoved = true;
      }
    }
  }
};
