if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  document.getElementById('theme-toggle').checked = true
} else {
  document.documentElement.classList.remove('dark')
  document.getElementById('theme-toggle').checked = false
}

document.getElementById('theme-toggle').addEventListener('change', function (event) {
  if (event.target.checked) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
});
