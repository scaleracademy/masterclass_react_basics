const randomNumber = Math.floor(Math.random() * 100)


function Heading() {
  return <h1> Guess the number !!!</h1>
}

// Guesser is a React Component
function Guesser() {
  
  function guess() {
    const inputEl = document.getElementById("user_input")
    const userGuess = +inputEl.value

    if (userGuess === randomNumber) {
      alert("You're right")
    } else if (userGuess > randomNumber) {
      alert("You're HOT") 
    } else if (userGuess < randomNumber) {
      alert("You're COLD") 
    }
  }

  return (
    <div>
      <input type="text" id="user_input" />
      <button onClick={guess}>Guess</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Heading />
      <Guesser />
    </div>
  )
}

ReactDOM.render(
  <App />,
  // React.createElement(HelloWorld),
  document.getElementById("app")
)