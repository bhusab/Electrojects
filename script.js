(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // <-- Replace this with your Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      document.getElementById("status").innerText = "✅ Message sent successfully!";
      this.reset();
    }, (err) => {
      document.getElementById("status").innerText = "❌ Failed to send message.";
      console.error("EmailJS Error:", err);
    });
});
