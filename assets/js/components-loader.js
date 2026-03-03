document.addEventListener('DOMContentLoaded', async () => {
  async function loadComponent(selector, path) {
    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.status}`);
      }
      const html = await response.text();
      const target = document.querySelector(selector);
      if (target) target.innerHTML = html;
    } catch (error) {
      console.error(error);
    }
  }

  await Promise.all([
    loadComponent('#navbar', '/components/navbar.html'),
    loadComponent('#footer', '/components/footer.html')
  ]);
});
