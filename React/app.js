
const Title = (props) => {
    return <h1>{props.text}</h1>
}

const Subtitle = (props) => {
    return <h2>{props.text}</h2>
}


const List = (props) => {
    return <li>{props.productItem}</li>
}



const ProductItem = (props) => {
    return <li>{props}</li>
}



const Products = [
    " Cokolada",
    "Kinder",
    "Toblerone"

]



const Separator = () => {
    return <hr />
}

/*const Button = (props) => {
    return <input type="button" value="Click  me" />
}

*/

const App = (props) => {
    return (
        <div><Title text="First title is the most important" />
            <Subtitle text="Subtitle is bljak" />
            <ul>
                <List productItem={Products[0]} />
                <List productItem={Products[1]} />
                <List productItem={Products[2]} />
            </ul>
            <Separator />



        </div>
    )
}
const rootElement = document.querySelector(".root")
ReactDOM.render(<App />, rootElement)