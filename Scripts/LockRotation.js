function requestFullScreen(elem) {
    if (elem.requestFullScreen) {
        elem.requestFullScreen();
    }
    else if (elem.webkitRequestFullScreen) {
        elem.webkitRequestFullScreen();
    }
    else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    }
    else if (elem.msRequestFullScreen) {
        elem.msRequestFullScreen();
    }
}

function lockOrientation(mode) {
    if (screen.orientation.lock) {
        screen.orientation.lock(mode);
    }
    else if (screen.lockOrientation) {
        screen.lockOrientation(mode);
    }
    else if (screen.webkitLockOrientation) {
        screen.webkitLockOrientation(mode);
    }
    else if (screen.mozLockOrientation) {
        screen.mozLockOrientation(mode);
    }
    else if (screen.msLockOrientation) {
        screen.msLockOrientation(mode);
    }
}
function isSmartPhone() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
      return true;
    } else {
      return false;
    }
  }
