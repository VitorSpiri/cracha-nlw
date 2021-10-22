const LinksSocialMedia = {  
  github: "vitorspiri",
  youtube: "aceytgamersbrasil",
  facebook: "vitor.spiri",
  instagram: "the_confuse_one",
  twitter: "vetooor_"
}

/*Como estamos utilizando um ID, podemos simplificar o código com o nome do ID e o comando que desejamos:
userName.textContent = "Vitor"
Como vemos abaixo:
*/

function changeSocialMediaLinks(){

  for(let li of socialLinks.children){

  const social = li.getAttribute('class')

  li.children[0].href = `http://${social}.com/${LinksSocialMedia[social]}`

    /*o const muda porque ele é uma variável de escopo, a cada incremento do for, cria-se um novo const = social*/
  }  

}

changeSocialMediaLinks()

function getGithubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {

    userName.textContent = data.name
    userBio.textContent = data.bio
    userLinkGithub.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })



}

getGithubProfileInfos()
