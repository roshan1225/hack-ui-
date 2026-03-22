// LOGIN
function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "admin" && pass === "1234") {
        localStorage.setItem("auth", "true");
        window.location.href = "./dashboard.html";
    } else {
        document.getElementById("error").innerText = "ACCESS DENIED";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("auth");
    window.location.href = "index.html";
}

// SOUND
function playSound() {
    document.getElementById("clickSound").play();
}

// WINDOWS
function openWindow(id) {
    playSound();
    document.getElementById(id).style.display = "block";
}

function closeWindow(id) {
    document.getElementById(id).style.display = "none";
}

// TERMINAL
function runCommand(e) {
    if (e.key === "Enter") {
        let cmd = document.getElementById("cmd").value.trim();
        let output = document.getElementById("output");

        let result = "";

        switch(cmd) {
            case "help":
                result = "Commands: help, date, hack, whoami, ls, cat logs.txt, clear";
                break;

            case "date":
                result = new Date();
                break;

            case "hack":
                result = "Bypassing firewall... Access Granted!";
                break;

            case "whoami":
                result = "admin";
                break;

            case "ls":
                result = "logs.txt  system.cfg  users.db";
                break;

            case "cat logs.txt":
                result = "Access log: 192.168.0.1 connected...";
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

// SCAN
function startScan() {
    let result = document.getElementById("scanResult");

    result.innerText = "Scanning...";

    setTimeout(() => {
        result.innerText = "✔ System Secure\n✔ No Threats Found\n✔ Firewall Active";
    }, 2000);
}
