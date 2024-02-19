function help() {
    var no1 = document.getElementById("helpList1")
    var no2 = document.getElementById("helpList2")
    var no3 = document.getElementById("helpList3")
    var no4 = document.getElementById("helpList4")
    var no5 = document.getElementById("helpList5")
    no1.innerHTML = "1. Type your 1st number in the 1st box, then type your 2nd number in the 2nd box and click the button of whichever operation you wish to do."
    no2.innerHTML = "2. Although a notification will be given, fill in both spaces first, before clicking any operation."
    no3.innerHTML = '3. For any information about me, here is a page  <a href="about.html" target="_blank">About Me</a>'
    no4.innerHTML = '4. To set the time for the answer to disappear, type the time here <input type="text" id="time"> then click <button onclick="timeOutForAns()">Change</button>'
    no5.innerHTML = '5. To stop this from disappearing, click <button onclick"stopHelpDisappear()">Stop</button>'


    function clearHelp() {
        var no1 = document.getElementById("helpList1")
        var no2 = document.getElementById("helpList2")
        var no3 = document.getElementById("helpList3")
        var no4 = document.getElementById("helpList4")
        var no5 = document.getElementById("helpList5")
        no1.innerHTML = ""
        no2.innerHTML = ""
        no3.innerHTML = ""
        no4.innerHTML = ""
        no5.innerHTML = ""
    }

    setTimeout(clearHelp, 7000)
}

function timeOutForAns() {
    var timeOut = document.getElementById("time").value

    function clearAnswer() {
        var var1 = document.getElementById("answer")
        var1.innerHTML = ""
    }

    if (timeOut == "") {
        timeOut = 5000

        setTimeout(clearAnswer, timeOut)
    } else {
        timeOut *= 1000

        setTimeout(clearAnswer, timeOut)
    }
}

function clearAnswerDefaultly() {
    var var1 = document.getElementById("answer")
    var1.innerHTML = ""
}

function divide() {
    var var1 = document.getElementById("firstNumber").value
    var var2 = document.getElementById("secondNumber").value
    var var3 = var1 / var2
    answer = document.getElementById("answer")
    answer.innerHTML = "Your answer is " + var3
    
    timeOutForAns()
}

function multiply() {
    var var1 = document.getElementById("firstNumber").value
    var var2 = document.getElementById("secondNumber").value
    var var3 = var1 * var2
    answer = document.getElementById("answer")
    answer.innerHTML = "Your answer is " + var3

    timeOutForAns()
}

function subtract() {
    var var1 = document.getElementById("firstNumber").value
    var var2 = document.getElementById("secondNumber").value
    var var3 = var1 - var2
    answer = document.getElementById("answer")
    answer.innerHTML = "Your answer is " + var3
    
    timeOutForAns()
}

function add() {
    var var1 = Number(document.getElementById("firstNumber").value)
    var var2 = Number(document.getElementById("secondNumber").value)
    var var3 = Number(var1) + Number(var2)
    answer = document.getElementById("answer")
    answer.innerHTML = "Your answer is " + var3
    
    timeOutForAns()
}

function empty() {
    var var1 = document.getElementById("firstNumber").value
    var var2 = document.getElementById("secondNumber").value
    answer = document.getElementById("answer")

    if (var1 == "") {
        answer.innerHTML = "Please fill in both spaces"
    } else if (var2 == "") {
        answer.innerHTML = "Please fill in both spaces"
    } else if (var1 == "" && var2 =="") {
        answer.innerHTML = "Please fill in both spaces"
    }
    
    setTimeout(clearAnswer, 5000)
}