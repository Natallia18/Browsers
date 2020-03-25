async function waitForelementIsPresent(elem) {
    let i = 0;
    while (i < 60 && !await elem.isPresent()) {
    browser.sleep(3000);
      i++;
    }
}
module.exports = {waitForelementIsPresent}

