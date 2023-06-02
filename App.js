
/*
function Profile(){
    return(
        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine"/>
    )
}

export default function Gallery(){
    return(
        <section>
            <h1>Amazing scientists</h1>
            <Profile/>
            <Profile/>
            <Profile/>
        </section>
    )
}
*/
//Pure JS
var app = document.getElementById("zone")
/*
const header = document.createElement('h1')

const headerContent = document.createTextNode(
    'Develop. Preview. Ship. 🚀', //this comma to avoid poss future errors :)
)

header.appendChild(headerContent)

app.appendChild(header)
*/
//With React
ReactDOM.render(<h1>Develop. Preview. Ship. 🚀</h1>, app)