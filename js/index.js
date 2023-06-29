addEventListener("DOMContentLoaded", () => {
  submit()
})
function submit(){
  let submitButton = document.getElementById('github-form')
  submitButton.addEventListener('submit' , function(){
    event.preventDefault()
    console.log('submitted')
    let userInput = document.getElementById('search').value 
    fetch(`https://api.github.com/search/users?q=${userInput}`, {
     method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/vnd.github.v3+json"
      }
    })
    .then(res => res.json())
    .then(data =>data.items.forEach(item => {
      let userAbout =document.createElement('div')
      userAbout.innerHTML =`
      <img src="${item.avatar_url}">
      <p>${item.login}</p>
      <a href="${item.html_url}>${item.html_url}</a>
      `
      document.querySelector('#user-list').appendChild(userAbout)
    }))
  })
}
