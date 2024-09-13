let repos = []

fetch("https://api.github.com/users/VictorFrancelino/repos")
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            if (repo.name !== "portfolio") {
                repos.push(repo)
            }
        });
        createProject()
    })
    .catch(error => console.log("Error: ", error))

function createProject() {
    if (repos.length > 0) {
        let contentPortfolio = document.getElementsByClassName("content-portfolio")[0]
        contentPortfolio.innerHTML = repos.map(repo =>
            `<div class="project">
                <h3 class="project-title">${repo.name}</h3>
                <p class="project-description">${repo.description || "No description available"}</p>
                <div class="project-links">
                    <a href="${repo.html_url}" target="_blank" rel="external" title="Ir para o repositório no GitHub"><img src="../imgs/repository-icon.png" alt="Ícone de código" ></a>
                    <a href="${repo.homepage}" target="_blank" rel="external" title="Ir para o projeto"><img src="../imgs/play.png" alt="Ícone de play"></a>
                </div>
            </div>`
        ).join("")
    }
}