// Function to get URL parameters
function getQueryParams() {
    let params = new URLSearchParams(window.location.search);
    return {
        name: params.get("name"),
        company: params.get("company"),
        employees: params.get("employees"),
        email: params.get("email"),
        phone: params.get("phone"),
        date: params.get("date"),
    };
}

// Get form data from URL
let formData = getQueryParams();

// Display form data on the Thank You page
document.getElementById("display-name").textContent = formData.name || "N/A";
document.getElementById("display-company").textContent = formData.company || "N/A";
document.getElementById("display-employees").textContent = formData.employees || "N/A";
document.getElementById("display-email").textContent = formData.email || "N/A";
document.getElementById("display-phone").textContent = formData.phone || "N/A";
document.getElementById("display-date").textContent = formData.date || "N/A";
