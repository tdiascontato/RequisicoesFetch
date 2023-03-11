//if(xhr.status >= 200 && xhr.status < 300)
document.addEventListener('click',(e)=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPag(el);
    }
});
//API Fetch
async function carregaPag(el){
    const href = el.getAttribute('href');
    const response = await fetch(href);
//Errozin básico, ver a melhor restrição    
    if(response.status !== 200) throw new Error('Opa! Não consegui acessar!');
    const html = await response.text();
    carregaResultado(html);

}
function carregaResultado(response){
    const resultado = document.querySelector('.Resultado');
    resultado.innerHTML = response;
};