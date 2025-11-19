function showContent(id) {
  // Sembunyikan semua konten
  document.querySelectorAll('.content').forEach(el => el.style.display = 'none');

  // Tampilkan konten sesuai ID
  document.getElementById(id).style.display = 'block';
}

<script>
function showContent(id) {
  // sembunyikan semua content
  const contents = document.querySelectorAll('.content');
  contents.forEach(c => c.classList.remove('active'));

  // tampilkan content sesuai id
  document.getElementById(id).classList.add('active');
}
</script>
