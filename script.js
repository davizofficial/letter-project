const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know, I still think about you sometimes.\n\nWe both tried. We both cared. But the universe just never gave us enough space to become “us.”\n\nI just wonder… if we had met at a different point in life, would the ending have been different?\n\nAnyway, I hope you're doing okay, even though we’re not in each other’s lives anymore.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  const letterBox = document.getElementById("letterBox");
  const typedText = document.getElementById("typedText");

  // Putar musik saat user klik tombol
  const bgMusic = document.getElementById("bgMusic");
  if (bgMusic) {
    bgMusic.volume = 1;
    bgMusic.muted = false;
    bgMusic.play().catch((err) => {
      console.warn("Musik tetap gagal diputar:", err);
    });
  }

  // Ketik surat setelah 600ms
  setTimeout(() => {
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 160);
      }
    }

    typeWriter();
  }, 600);
}
