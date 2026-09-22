function addToCart(name){
  const el = document.getElementById('cart-message');
  el.textContent = name + ' is toegevoegd aan je winkelmandje. 🧢';
}
function sendMessage(e){
  e.preventDefault();
  alert('Bedankt! Je bericht is klaar om verzonden te worden. Koppel dit formulier later aan je e-mailservice.');
}
document.querySelector('.menu-toggle').addEventListener('click',()=>{
  const nav=document.querySelector('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.position='absolute'; nav.style.top='82px'; nav.style.left='0'; nav.style.right='0';
  nav.style.padding='20px 7%'; nav.style.background='#090909'; nav.style.flexDirection='column';
});
