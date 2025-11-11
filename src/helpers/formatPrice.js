export function formatPrice(amount) {
  // Làm tròn tới 2 chữ số thập phân
  const rounded = Math.round(amount * 100) / 100;

  // Format kiểu Việt Nam
  return (
    rounded.toLocaleString("vi-VN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " ₫"
  );
}
