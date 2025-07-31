document.addEventListener('DOMContentLoaded', function() {
  const orderForm = document.getElementById('orderFormA');
  if (!orderForm) return;
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const qty = orderForm.quantity.value;
    const flavor = orderForm.flavor.value;
    alert(`주문: ${qty}개, 맛: ${flavor}`);
  });
  const cartBtn = document.querySelector('.add-to-cart');
  if (cartBtn) {
    cartBtn.addEventListener('click', function() {
      const qty = orderForm.quantity.value;
      const flavor = orderForm.flavor.value;
      alert(`장바구니 담기: ${qty}개, 맛: ${flavor}`);
    });
  }
});
