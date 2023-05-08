const consentCnt = document.querySelector(".consent-dis");
if (consentCnt) {
  const consentClsBtn = document.querySelector(".consentBtnClsJs");
  const agreeConsentBtn = document.querySelector('.consentAgreeBtn');
  const disagreeConsentBtn = document.querySelector('.consentDisagreeBtn');
  setTimeout(() => {
    let discStatus = localStorage.getItem("consent");
    if (discStatus === null) {
      consentCnt.classList.remove("hide");
      localStorage.setItem("consent", "none");
      setTimeout(() => {
        consentCnt.classList.add("show-trans");
      }, 300);
    } else if (discStatus === "none") {
      consentCnt.classList.remove("hide");
      setTimeout(() => {
      consentCnt.classList.add("show-trans");
    }, 300);
    }
  }, 1000);
  function agree(){
    consentCnt.classList.add("hide");
    localStorage.setItem("consent", "agree");
  }
  function disagree(){
    consentCnt.classList.add("hide");
    localStorage.setItem("consent", "disagree");
  }
  function closeDis() {
    consentCnt.classList.add("hide");
  }
  agreeConsentBtn.addEventListener("click", agree);
  disagreeConsentBtn.addEventListener("click", disagree)
  consentClsBtn.addEventListener("click", closeDis);
};