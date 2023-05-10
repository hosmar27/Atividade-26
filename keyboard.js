document.onkeydown = Pega_Tecla;

function Pega_Tecla(e) 
{	
    e = e || window.event;

    tecla = e.keyCode;
    console.log(tecla); // MOSTRA O CÓDIGO DA TECLA PRESSIONADA

}
function TirarCores()
{
    for (x=1;x<=300;x++)
    {
        try{
            document.getElementById(x).style.backgroundColor = "lightblue"
        }
        catch(erro)
        {   }
    }
}