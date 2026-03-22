// LOGIN SYSTEM
function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "ACCESS DENIED";
    }
}

// LOGOUT
function logout() {
    window.location.href = "index.html";
}

// TERMINAL
function openTerminal() {
    document.getElementById("terminal").style.display = "block";
}

function runCommand(e) {
    if (e.key === "Enter") {
        let cmd = document.getElementById("cmd").value;
        let output = document.getElementById("output");

        let result = "";

        switch(cmd) {
            case "help":
                result = "Commands: help, date, hack, clear";
                break;

            case "date":
                result = new Date();
                break;

            case "hack":
                result = "Bypassing firewall... Access Granted!";
                break;

            case "clear":
                output.innerHTML = "";
                document.getElementById("cmd").value = "";
                return;

            default:
                result = "Unknown command";
        }

        output.innerHTML += `<p>> ${cmd}</p><p>${result}</p>`;
        document.getElementById("cmd").value = "";
    }
}

// SCAN SYSTEM
function showScan() {
    let box = document.getElementById("scanBox");
    let result = document.getElementById("scanResult");

    box.style.display = "block";
    result.innerHTML = "Scanning...";

    setTimeout(() => {
        result.innerHTML = `
        ✔ System Secure<br>
        ✔ No Threats Found<br>
        ✔ Firewall Active
        `;
    }, 2000);
}