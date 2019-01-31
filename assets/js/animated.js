var i = 0,
  prevJob = document.getElementById("prevJob"),
  nextJob = document.getElementById("nextJob"),
  expSets = document.querySelectorAll(".experience-set"),
  WEB_MODE = "WEB_MODE",
  MOBILE_MODE = "MOBILE_MODE";

function movePrev(mode) {
  if (mode === WEB_MODE) {
    if (i > 0) {
      i--;
      expSets[i].className = expSets[i].className.replace(
        " d-none",
        " animated fadeIn"
      );
      expSets[i + 1].className = expSets[i].className.replace(
        " animated fadeIn",
        ""
      );
      expSets[i + 1].className = expSets[i + 1].className + " d-none";
    }
  }
}

function moveNext(mode) {
  if (mode === WEB_MODE) {
    if (i < expSets.length - 1) {
      i++;
      expSets[i - 1].className = expSets[i - 1].className + " d-none";
      expSets[i - 1].className = expSets[i].className.replace(
        " animated fadeIn",
        ""
      );
      expSets[i].className = expSets[i].className.replace(
        " d-none",
        " animated fadeIn"
      );
    }
  }
}

prevJob.onclick = function() {
  movePrev(WEB_MODE);
};

nextJob.onclick = function() {
  moveNext(WEB_MODE);
};
