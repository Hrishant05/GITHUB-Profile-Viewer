const BASE_URL = "https://api.github.com/users/";

const Name = document.getElementById("name")
const Bio = document.getElementById("bio")
const Followers = document.getElementById("followers")
const Following = document.getElementById("following")
const ReposNum = document.getElementById("reposNum")


const getUserData = async(username) => {
    const response = await fetch(BASE_URL + username);
    const data = await response.json()
    updateDOM(data)
}

const getRepos = async(username) => {
    const response = await fetch(BASE_URL + username + "/repos")
    const data = await response.json()
    const repos = document.getElementById("repos")
    repos.innerText = ""
    data.forEach(
        (item) => {
            console.log(item)
            const anchorElement = document.createElement("a")
            anchorElement.href = item.html_url
            anchorElement.innerText = item.name
            anchorElement.target = "_blank"
            repos.appendChild(anchorElement)
        }
    )
}

const updateDOM = data => {
    avatar.src=`${data.avatar_url}`
    Name.innerText=`${data.name}`
    Bio.innerText=`${data.bio}`
    Followers.innerText=`${data.followers} Followers`
    Following.innerText=`${data.following} Following`
    ReposNum.innerText=`${data.public_repos} Repos`
}

const searchUsername = () => {
    const username = document.getElementById('search').value;
    getUserData(username)
    getRepos(username)
}

getUserData("Devsoc-BPGC")
getRepos("Devsoc-BPGC")