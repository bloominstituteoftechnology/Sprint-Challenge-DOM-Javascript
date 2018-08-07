function toggleElement() {
  let showHide = document.getElementById('btn1' || 'btn2' || 'btn3');
  if (showHide.style.display === 'none') {
    showHide.style.display = 'inline';
  } else {
    showHide.style.display = 'none';
  }
}
module.exports = toggleElement

{/* <script>
function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
</script> */}