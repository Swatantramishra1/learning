
let cstmObj = {
    currentState: 1,
    dataBal: 0,
    noOfItemShow: 1,
    noOfItemScroll: 1,
    merginLeft: 0,
    numItems: 0,
    currentMargin: [],
    yetToScroll: 0
}

function _m(selector) {
    let self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);
    self.html = function () {
        return self.element;
    }
    self.attr = function (name, value) {
        if (!value) return self.element.getAttribute(name);
        self.element.setAttribute(name, value);
        return self;
    }

    self.on = function (type, callback) {
        self.element['on' + type] = callback;
        return self;
    }
    self.css = function (type, value) {
        if (!value) return self.element.getAttribute(name);
        self.element.style[type] = value;
        return self;
    }

    self.init = function (obj) {

        for (const key in cstmObj) {
            if (obj.hasOwnProperty(key)) {
                cstmObj[key] = obj[key];
            }
        }
        cstmObj.numItems = $('.mordor-jq-item').length;
        if (cstmObj.numItems <= cstmObj.noOfItemShow) {
            $(".mordor-left-arrow").attr("disabled", "disabled");
            $(".mordor-right-arrow").attr("disabled", "disabled");
        }
        else {
            cstmObj.YetToScroll = cstmObj.numItems - cstmObj.noOfItemShow;
            let calAddVal = 100 / cstmObj.noOfItemShow;
            $(".mordor-jq-item").css("width", calAddVal + "%")
            // Its just for notation
            $(".mordor-dots").append("<hr>")
            for (let i = 0; i < cstmObj.numItems; i++) {
                $(".mordor-dots").append(`<span>${i + 1}</span>`)
            }
            $(".mordor-dots").append("<hr>")
            $(".mordor-left-arrow").attr("disabled", "disabled");
        }
    }

    self.next = function () {
        if (cstmObj.YetToScroll > 0) {


            let calAddVal = 100 / cstmObj.noOfItemShow;
            let marginLeftVal = 0
            if (cstmObj.currentState == 1 && cstmObj.dataBal == 0) {
                cstmObj.merginLeft = 0;
                marginLeftVal = -(cstmObj.merginLeft + calAddVal) * cstmObj.noOfItemScroll;
                ++cstmObj.dataBal;

                cstmObj.currentMargin.push(marginLeftVal)
                $(".mordor-jq-item:first-child").css("margin-left", marginLeftVal + "%");
                $(".mordor-left-arrow").removeAttr("disabled");

            }
            else if (cstmObj.currentState == 1 && cstmObj.dataBal != 1) {
                $(".mordor-jq-item:first-child").css("margin-left", 0 + "%");
                $(".mordor-left-arrow").attr("disabled", "disabled");
            }
            else {
                cstmObj.merginLeft = cstmObj.currentState * calAddVal;
                marginLeftVal = -(cstmObj.merginLeft) * cstmObj.noOfItemScroll;

                cstmObj.currentMargin.push(marginLeftVal)
                $(".mordor-jq-item:first-child").css("margin-left", marginLeftVal + "%")

                $(".mordor-left-arrow").removeAttr("disabled");
            }
            if (cstmObj.numItems === cstmObj.currentState) {
                cstmObj.merginLeft = 0;
                $(".mordor-right-arrow").attr("disabled", "disabled");
            }
            ++cstmObj.currentState;

            if (cstmObj.YetToScroll < cstmObj.noOfItemScroll || cstmObj.YetToScroll === 0) {
                $(".mordor-right-arrow").attr("disabled", "disabled");
            }
            cstmObj.YetToScroll = cstmObj.YetToScroll - cstmObj.noOfItemScroll;
        }
        else {
            $(".mordor-right-arrow").attr("disabled", "disabled");
        }
    }

    self.prev = function () {
        let calAddVal = 100 / cstmObj.noOfItemShow;
        cstmObj.YetToScroll = cstmObj.YetToScroll + cstmObj.noOfItemScroll;
        let currentPop = ((cstmObj.currentMargin.pop() / cstmObj.noOfItemShow) + calAddVal) * cstmObj.noOfItemScroll;
        $(".mordor-jq-item:first-child").css("margin-left", currentPop + "%");
        --cstmObj.currentState;
        if (cstmObj.currentState === 1) {
            cstmObj.currentState = 1;
            cstmObj.merginLeft = 0;
            $(".mordor-left-arrow").attr("disabled", "disabled");
        }
        else if (cstmObj.currentState == 1) {
            $(".mordor-left-arrow").attr("disabled", "disabled");
        }
        $(".mordor-right-arrow").removeAttr("disabled");
    }

    return self;
}


