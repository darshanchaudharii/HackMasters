
  // CART FUNCTIONALITY
  const cart = [];

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.product-card');
      const name = card.querySelector('h3').innerText;
      const price = parseInt(card.querySelector('.price').innerText.replace('₹', ''));
      cart.push({ name, price });
      alert(`${name} added to cart! 🛒`);
    });
  });

  // FILTER FUNCTIONALITY
  function applyFilters() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;

    document.querySelectorAll('.product-card').forEach(card => {
      const name = card.dataset.name.toLowerCase();
      const productCategory = card.dataset.category;
      const price = parseInt(card.dataset.price);

      const matchesKeyword = name.includes(keyword);
      const matchesCategory = !category || productCategory === category;
      const matchesPrice = price >= minPrice && price <= maxPrice;

      if (matchesKeyword && matchesCategory && matchesPrice) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

