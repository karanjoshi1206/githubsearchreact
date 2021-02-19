import react, { useState } from "react"
import ReactDOM from "react-dom"
function App() {
    const [api, setapi] = useState(`https://api.github.com/users/USERNAME`)
    const [user, setuser] = useState([])
    const changeapi = (e) => {
        setapi(`https://api.github.com/users/${e.target.value}`)
    }
    const searchuser = async () => {
        const main = document.querySelector(".container")
        main.style.display = "flex"
        let response = await fetch(api)
        let data = await response.json();
        setuser(data)

    }
    return (
        <>
            <div className="main_container">
                <label htmlFor="username">Enter the username</label>
                <center><input type="text" placeholder="Enter the username " onChange={changeapi} /></center>
                <center><button onClick={searchuser}>Search</button> </center>
                <div className="container">
                    <div className="card">
                        <div className="left">
                            <img src={user.avatar_url} alt="" />
                        </div>
                        <div className="right">
                            <h1 className="name"><span>Name</span> {user.name}</h1>
                            <h2 className="username"><span>UserName</span> {user.login}</h2>
                            <a href={user.html_url}>Visit profile</a>
                            <div className="content">
                                <div className="repo">
                                    <span>Repositiry</span>
                                    <h4>{user.public_repos}</h4>
                                </div>
                                <div className="location">
                                    <span>location</span>
                                    <h4>{user.location}</h4>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App;