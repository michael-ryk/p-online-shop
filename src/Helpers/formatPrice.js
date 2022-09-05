export function formatPrice(value) {
  const formatedValue = Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
  }).format(value / 100);
  return formatedValue;
}