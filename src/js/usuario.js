const botaoPesquisa = document.getElementById("botao_Pesquisa");

const request = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { "Content-Type": "application/json" } : {},
    }).then((response) => {
      return response.json();
    });
  };

const getUser = (e) => {
    e.preventDefault();
    
    const userGit = document.getElementById("userLogin").value;
    request("GET", `https://api.github.com/users/${userGit}`)
      .then((responseData) => {
              
        document.getElementById("usuario-imagem").src = responseData.avatar_url;
        document.getElementById("usuario_card_username").innerText = responseData.name;
        document.getElementById("usuario_card_userlogin").innerText = responseData.login;
        document.getElementById("organizacao").innerText = responseData.company || "Não defindo";
        document.getElementById("localizacao").innerText = responseData.location || "Não Definido";
        document.getElementById("qtdrepositorio").innerText = responseData.public_repos || 0;
        document.getElementById("seguidores").innerText = responseData.followers || 0;
      })
      .catch((err) => {
        window.location.href = "./../src/notfound.html"
      });
  };
  
  botaoPesquisa.addEventListener("click", getUser);