/* ================= NAVIGATION ================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("mobile");

}


/* ================= SCROLL ================= */

function scrollToJobs() {

    document.getElementById("jobs").scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= LOGIN MODAL ================= */

function openLogin() {

    document.getElementById("loginModal")
        .classList.add("active");

}

function openRegister() {

    document.getElementById("registerModal")
        .classList.add("active");

}

function closeModal(id) {

    document.getElementById(id)
        .classList.remove("active");

}


/* ================= SWITCH MODALS ================= */

function switchToRegister(event) {

    event.preventDefault();

    closeModal("loginModal");

    openRegister();

}


function switchToLogin(event) {

    event.preventDefault();

    closeModal("registerModal");

    openLogin();

}


/* ================= LOGIN ================= */

function login(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    showMessage(
        "Login successful for " + email
    );

    closeModal("loginModal");

}


/* ================= REGISTER ================= */

function register(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value;

    const role =
        document.getElementById("registerRole").value;

    showMessage(
        "Welcome " + name + "! Registered as " + role
    );

    closeModal("registerModal");

}


/* ================= FORGOT PASSWORD ================= */

function forgotPassword(event) {

    event.preventDefault();

    showMessage(
        "Password reset feature will be connected to backend."
    );

}


/* ================= APPLY ================= */

function applyJob(jobName) {

    showMessage(
        "You selected: " + jobName
    );

}


/* ================= TOAST ================= */

function showMessage(message) {

    const toast =
        document.getElementById("toast");

    const toastMessage =
        document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toast.classList.add("active");

    setTimeout(function () {

        toast.classList.remove("active");

    }, 3000);

}


/* ================= CHATBOT ================= */

function openChat(event) {

    if (event) {
        event.preventDefault();
    }

    document.getElementById("chatbot")
        .classList.add("active");

}


function closeChat() {

    document.getElementById("chatbot")
        .classList.remove("active");

}


function handleChatKey(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}


function sendMessage() {

    const input =
        document.getElementById("chatInput");

    const message =
        input.value.trim();

    if (message === "") {
        return;
    }

    addUserMessage(message);

    input.value = "";

    setTimeout(function () {

        botAnswer(message);

    }, 500);

}


function addUserMessage(message) {

    const chatBody =
        document.getElementById("chatBody");

    const div =
        document.createElement("div");

    div.className = "user-message";

    div.textContent = message;

    chatBody.appendChild(div);

    chatBody.scrollTop =
        chatBody.scrollHeight;

}


function addBotMessage(message) {

    const chatBody =
        document.getElementById("chatBody");

    const div =
        document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = message;

    chatBody.appendChild(div);

    chatBody.scrollTop =
        chatBody.scrollHeight;

}


function botAnswer(message) {

    const text =
        message.toLowerCase();

    if (
        text.includes("job") ||
        text.includes("jobs")
    ) {

        addBotMessage(
            "💼 You can find available jobs in the <b>Featured Jobs</b> section. Click Apply to select an opportunity."
        );

    }

    else if (
        text.includes("internship") ||
        text.includes("intern")
    ) {

        addBotMessage(
            "🎓 Check the <b>Popular Internships</b> section to explore internship opportunities."
        );

    }

    else if (
        text.includes("application") ||
        text.includes("apply")
    ) {

        addBotMessage(
            "📄 After applying, you will be able to track your application status from your Student Dashboard."
        );

    }

    else if (
        text.includes("hello") ||
        text.includes("hi")
    ) {

        addBotMessage(
            "👋 Hello! I'm CampusBot. I can help you with jobs, internships and applications."
        );

    }

    else {

        addBotMessage(
            "🤖 I'm currently a demo AI assistant. Try asking about <b>jobs</b>, <b>internships</b> or <b>applications</b>."
        );

    }

}


/* ================= QUICK CHAT BUTTONS ================= */

function botReply(type) {

    openChat();

    if (type === "jobs") {

        addUserMessage("I want to find jobs.");

        setTimeout(function () {

            addBotMessage(
                "💼 We currently have Software Developer, Software Engineer and Graduate Developer opportunities."
            );

        }, 400);

    }

    else if (type === "internship") {

        addUserMessage(
            "I want an internship."
        );

        setTimeout(function () {

            addBotMessage(
                "🎓 We have Java, Python and AI/ML internship opportunities."
            );

        }, 400);

    }

    else if (type === "application") {

        addUserMessage(
            "How can I track my application?"
        );

        setTimeout(function () {

            addBotMessage(
                "📄 After login, open your Student Dashboard → Applications to track your application status."
            );

        }, 400);

    }

}


/* ================= CLOSE MODAL ON OUTSIDE CLICK ================= */

window.addEventListener("click", function(event) {

    const loginModal =
        document.getElementById("loginModal");

    const registerModal =
        document.getElementById("registerModal");

    if (event.target === loginModal) {

        closeModal("loginModal");

    }

    if (event.target === registerModal) {

        closeModal("registerModal");

    }

});