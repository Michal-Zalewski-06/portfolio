const button = document.getElementById('copyButton');
  const message = document.getElementById('copyMessage');

  button.addEventListener('click', () => {
    const email = button.getAttribute('data-email');

    navigator.clipboard.writeText(email).then(() => {
      // Pokaż komunikat
      message.style.display = 'inline';

      // Ukryj po 2 sekundach
      setTimeout(() => {
        message.style.display = 'none';
      }, 2000);
    }).catch(err => {
      console.error('Błąd przy kopiowaniu: ', err);
    });
  });
