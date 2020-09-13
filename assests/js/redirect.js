function redirect () {
    const userGit = document.getElementById("userLogin").value;    
    window.location.href=`../../resultado.html?${userGit}`
}
