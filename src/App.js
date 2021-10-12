
import './App.css';


const Box=(props)=>{
  return(
    <div className="box">
      <div>
        <h2>{props.name}</h2>
        <p>Title: {props.title}</p>
        <p>Age:{props.age}</p>
      </div>
    </div>
  )
}

function App() {
  return (
  <>
    <header>
    <h1>Logo</h1>
    </header>
    <main>
      <Box name="Maria" title="CEO" age="29"/>
      <Box name="Anjula" title="Developer" age="31"/>
      <Box name="Mary" title="Designer" age="28"/>
    </main>
    <footer>
    <p><small>Copyrights</small></p>
    </footer>
    </> 
    
    )
   
}
export default App;
