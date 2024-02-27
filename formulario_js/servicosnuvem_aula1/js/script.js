
function chamarServicoViaCEP() {
    cep_digitado = document.getElementById("numero_cep").value;

    const urlViaCEP = "https://viacep.com.br/ws/" + cep_digitado + "/json/";

    alert(urlViaCEP);

    fetch(urlViaCEP)

        .then(response => {

            if (response.ok) {
                alert("Resposta OK");

                return response.json();
            }

            if (!response.ok) {
                alert("Resposta não OK");


            }
        })

        .then((data) => {

            alert(data.bairro);
            console.log(data);
        })

        .catch(error => {
            alert("Erro na tentativa de requisito de serviço na nuvem");
            console.error("Erro na tentativa de requisito de serviço na nuvem");
        });
}

