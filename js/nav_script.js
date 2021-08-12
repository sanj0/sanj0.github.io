const DIV_START = "divstart";
const DIV_WHO = "divwho";
const DIV_WHAT = "divwhat";
const DIV_WHERE = "divwhere";
const DIV_WHY = "divwhy";

const BTN_START = "btnstart";
const BTN_WHO = "btnwho";
const BTN_WHAT = "btnwhat";
const BTN_WHERE = "btnwhere";
const BTN_WHY = "btnwhy";

const BTN_PREFIX = "btn";
const DIV_PREFIX = "div";

const TRANSFORM_TRANSITION_SPEED = 150;

let current_div = DIV_START;
let next_skew_negative = false;

async function on_nav_btn_click(item) {
    
    let current = document.getElementById(current_div);
    let next = document.getElementById(btn_to_div(item.id));

    current.style.transform = next_skew();
    next.style.display = "block";
    next.style.transform = current.style.transform;
    await sleep(TRANSFORM_TRANSITION_SPEED);
    current.style.display = "none";
    next.style.transform = "skew(0deg, 0deg)";
    await sleep(TRANSFORM_TRANSITION_SPEED);
    current_div = next.id;
    return false;
}

function next_skew() {
    next_skew_negative = !next_skew_negative;
    if (next_skew_negative) {
        return "skew(45deg, 45deg)";
    } else {
        return "skew(-45deg, -45deg)"; 
    }
}

function btn_to_div(btn) {
    return DIV_PREFIX + btn.substring(BTN_PREFIX.length);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}