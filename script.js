document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()

    const pseudo = document.getElementById('pseudo').value
    const email = document.getElementById('email').value
    const content = document.getElementById('contenu-formulaire')

    content.innerText = pseudo + ' ' + email 
})
const colorToggleButton = document.getElementById('colorToggleButton');

colorToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});