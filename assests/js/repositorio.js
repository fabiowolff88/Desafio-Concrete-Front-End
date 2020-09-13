const botaoPesquisa2 = document.getElementById("botao_Pesquisa");
const repositorioLista = document.getElementById("repositorio_lista1");

const requisicao = (method, url, data) => {
    return fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { "Content-Type": "application/json" } : {},
    }).then((response) => {
      return response.json();
    });
  };

const getRepos = (e) => {
    e.preventDefault();
   
    let contEstrela = 0;
    const userGit = document.getElementById("userLogin").value;
    requisicao("GET", `https://api.github.com/users/${userGit}/repos`)
      .then((responseData) => {
          const lists = responseData.sort(function (a, b) {
          if (a.stargazers_count < b.stargazers_count) {
            return 1;
          }
          if (a.stargazers_count > b.stargazers_count) {
            return -1;
          }
          return 0;
        });
        repositorioLista.innerHTML = ""
        const renderRepos = () => {
        for (repos of lists) {
          
          let containerItem = document.createElement("li")
          let containerItemLista = document.createElement("div")
          let containerItemListaNome = document.createElement("h3")
          let containerItemListaDescricao = document.createElement("p")
          let containerItemListaImgestrela = document.createElement("span")
          let containerItemListaQtdestrela = document.createElement("span")
          
          containerItemListaNome.className = "repositoriolista__nome"
          containerItemListaDescricao.className = "repositoriolista__descricao"
          containerItemListaImgestrela.className = "detalhes__icons"
          containerItemListaQtdestrela.className = "repositoriolista__descricao"
          
          let nome = document.createTextNode(repos.name)
          let descricao = document.createTextNode(repos.description || "" )
          let qtdEstrela = document.createTextNode(repos.stargazers_count)
          let img = document.createElement("IMG")
          img.src = "./assests/img/star-icon.png"
            
          containerItemListaNome.appendChild(nome)
          containerItemListaDescricao.appendChild(descricao)
          containerItemListaImgestrela.appendChild(img)
          containerItemListaQtdestrela.appendChild(qtdEstrela)
            
          containerItemLista.appendChild(containerItemListaNome)
          containerItemLista.appendChild(containerItemListaDescricao)
          containerItemLista.appendChild(containerItemListaImgestrela)
          containerItemLista.appendChild(containerItemListaQtdestrela)
            
          containerItem.appendChild(containerItemLista)

          repositorioLista.appendChild(containerItem)
                    
          contEstrela += repos.stargazers_count 
          document.getElementById("estrelas").innerText = contEstrela

          }
        };
        return renderRepos();
      })
      .catch((err) => {
         window.location.href = "../../notfound.html"
      });
  };

  botaoPesquisa2.addEventListener("click", getRepos);