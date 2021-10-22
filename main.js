const linksSocialMedias = {
  github: 'natashafarias',
  youtube: 'channel/UCJu7lyM814ImNzOWB1HOt9g',
  facebook: 'karoline.farias.184/',
  instagram: 'karolleta',
  twitter: '@karolleta'
}

function changeSocialMediasLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedias[social]}`
  }
}

changeSocialMediasLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedias.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
