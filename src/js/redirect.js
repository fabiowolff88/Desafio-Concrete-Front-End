function redirect () {
    const userGit = document.getElementById("userLogin").value;    
    window.location.href=`./../src/resultado.html?${userGit}`
}
