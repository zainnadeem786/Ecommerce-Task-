const colorInput = document.getElementById('colorInput');
const colorPreview = document.getElementById('color-preview');

colorInput.addEventListener('input', () => {
  const colorValue = colorInput.value;
  document.body.style.backgroundColor = colorValue;
  colorPreview.style.backgroundColor = colorValue;
});