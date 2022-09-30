function encodeAndDecodeMessages() {
  let msgSendTxt = document
    .querySelector(`#main`)
    .children[0].querySelector(`textarea`);
  let msgSendBtn = document
    .querySelector(`#main`)
    .children[0].querySelector(`button`);
  let msgReciveTxt = document
    .querySelector(`#main`)
    .children[1].querySelector(`textarea`);
  let msgReciveBtn = document
    .querySelector(`#main`)
    .children[1].querySelector(`button`);

  msgSendBtn.addEventListener(`click`, () => {
    let currMsg = msgSendTxt.value;
    let cryptMsg = "";
    for (let chr of currMsg) {
      let currCharCode = chr.charCodeAt(0);
      currCharCode += 1;
      cryptMsg += String.fromCharCode(currCharCode);
    }
    msgReciveTxt.value = cryptMsg;
    msgSendTxt.value = ``;
  });
  msgReciveBtn.addEventListener(`click`, () => {
    let currMsg = msgReciveTxt.value;
    let unCryptMsg = "";
    for (let chr of currMsg) {
      let currCharCode = chr.charCodeAt(0);
      currCharCode -= 1;
      unCryptMsg += String.fromCharCode(currCharCode);
    }
    msgReciveTxt.value = unCryptMsg;
  });
}
