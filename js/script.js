let current = 0;
  const total = 7;

  function goTo(n) {
    document.getElementById('slide-' + current).classList.remove('active');
    current = n;
    document.getElementById('slide-' + current).classList.add('active');

    const btns = document.querySelectorAll('.nav button');
    btns.forEach((b, i) => b.classList.toggle('active', i === n));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }