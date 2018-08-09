
let currentState = 1, dataBal = 0;
const noOfItemShow = 2;
const noOfItemScroll = 2;
let merginLeft = 0;
var numItems = 0;
let currentMargin = [];
let yetToScroll = 0;
function MoInit() {
    numItems = $('.mordor-jq-item').length;
    if (numItems <= noOfItemShow) {
        $(".mordor-left-arrow").attr("disabled", "disabled");
        $(".mordor-right-arrow").attr("disabled", "disabled");
    }
    else {
        YetToScroll = numItems - noOfItemShow;
        let calAddVal = 100 / noOfItemShow;
        $(".mordor-jq-item").css("width", calAddVal + "%")
        // Its just for notation
        $(".mordor-dots").append("<hr>")
        for (let i = 0; i < numItems; i++) {
            $(".mordor-dots").append(`<span>${i + 1}</span>`)

        }
        $(".mordor-dots").append("<hr>")
        $(".mordor-left-arrow").attr("disabled", "disabled");

    }
    // Its just for notation
}


function next() {

    if (YetToScroll > 0) {


        let calAddVal = 100 / noOfItemShow;
        let marginLeftVal = 0
        if (currentState == 1 && dataBal == 0) {
            merginLeft = 0;
            marginLeftVal = -(merginLeft + calAddVal) * noOfItemScroll;
            ++dataBal;

            currentMargin.push(marginLeftVal)
            $(".mordor-jq-item:first-child").css("margin-left", marginLeftVal + "%");
            $(".mordor-left-arrow").removeAttr("disabled");

        }
        else if (currentState == 1 && dataBal != 1) {
            $(".mordor-jq-item:first-child").css("margin-left", 0 + "%");
            $(".mordor-left-arrow").attr("disabled", "disabled");
        }
        else {
            merginLeft = currentState * calAddVal;
            marginLeftVal = -(merginLeft) * noOfItemScroll;

            currentMargin.push(marginLeftVal)
            $(".mordor-jq-item:first-child").css("margin-left", marginLeftVal + "%")

            $(".mordor-left-arrow").removeAttr("disabled");
        }
        if (numItems === currentState) {
            merginLeft = 0;
            $(".mordor-right-arrow").attr("disabled", "disabled");
        }
        ++currentState;

        if (YetToScroll < noOfItemScroll || YetToScroll === 0) {
            $(".mordor-right-arrow").attr("disabled", "disabled");
        }
        YetToScroll = YetToScroll - noOfItemScroll;
    }
    else {
        $(".mordor-right-arrow").attr("disabled", "disabled");
    }

}

function prev() {
    let calAddVal = 100 / noOfItemShow;
    YetToScroll = YetToScroll + noOfItemScroll;
    let currentPop = ((currentMargin.pop() / noOfItemShow) + calAddVal) * noOfItemScroll;
    $(".mordor-jq-item:first-child").css("margin-left", currentPop + "%");
    --currentState;
    if (currentState === 1) {
        currentState = 1;
        merginLeft = 0;
        $(".mordor-left-arrow").attr("disabled", "disabled");
    }
    else if (currentState == 1) {
        $(".mordor-left-arrow").attr("disabled", "disabled");
    }
    $(".mordor-right-arrow").removeAttr("disabled");
}