// Get modal elements
const modal = document.getElementById("appointmentModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.querySelector(".close-btn");
const appointmentForm = document.getElementById("appointmentForm");

// Function to open the modal
function openModal() {
    // modal.style.display = "block";
    modal.classList.add('modal-visible');
    document.body.classList.add('modal-open'); // Prevent background scrolling
}

// Function to close the modal
function closeModal() {
    // modal.style.display = "none";
    modal.classList.remove('modal-visible');
    document.body.classList.remove('modal-open'); // Allow background scrolling
}

// Event listeners
if (openModalBtn) {
    openModalBtn.addEventListener("click", openModal);
}

if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
}

// Close modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
    // Check if the click is directly on the modal overlay (not the content)
    if (event.target == modal) {
        closeModal();
    }
});

// Optional: Close modal on Escape key press
document.addEventListener('keydown', function(event) {
    // Check if modal is visible using the class
    if (event.key === "Escape" && modal.classList.contains('modal-visible')) {
        closeModal();
    }
});

// Handle form submission (basic example)
if (appointmentForm) {
    appointmentForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission for now
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const selectedDate = document.getElementById('callDate').value;

        // Only check if the required date field is filled
        if (selectedDate) {
            console.log("Appointment details:", { firstName, lastName, email, selectedDate });
            alert(`Great, ${firstName || 'friend'}! We'll pencil you in for ${selectedDate}. Prepare for financial enlightenment! ✨`);
            closeModal(); // Close modal after submission
        } else {
            alert("Please select a preferred date!");
        }
        // Here you would typically send the data to a server
    });
} 