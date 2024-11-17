const startVoiceBtn = document.getElementById("start-voice");

// Cek dukungan Speech Recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = "id-ID"; // Bahasa Indonesia
  recognition.continuous = false;

  // Event: Mulai mendengarkan
  startVoiceBtn.addEventListener("click", () => {
    recognition.start();
  });

  // Event: Mendapatkan hasil suara
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();

    if (transcript.includes("pindah ke halaman beranda")) {
      window.location.href = "beranda.html";
    } else if (transcript.includes("pindah ke halaman tentang")) {
      window.location.href = "tentang.html";
    } else {
      alert("Perintah tidak dikenali!");
    }
  };

  // Event: Error
  recognition.onerror = (event) => {
    console.error("Error:", event.error);
  };
} else {
  alert("Browser Anda tidak mendukung Speech Recognition.");
}
