const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class ="info">
                            <img src = "${user.avatarUrl}" alt = "Foto do perfil do usuário" /> 
                            <div class = "data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😭'}</h1>
                                <p>${user.bio ?? 'Não possui uma bio cadastrada 😔'}</p>
                            </div>
                         </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target = "_blank">${repo.name}</a></li>`
            
        );

        if(user.repositories.lenght > 0){
            this.userProfile.innerHTML += `<div class = "repositories section">
                                            <h2>Alguns dos Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                            </div>`
        }
}
}

export {screen}


