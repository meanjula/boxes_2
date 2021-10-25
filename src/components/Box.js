const Box=(props)=>{
	return(
	  <div className="box">
		<div>
		  <h2>{props.name}</h2>
		  <p>Title: {props.title}</p>
		  <p>Age:{props.age}</p>
		  <p>Love: {props.love}</p>
		</div>
	  </div>
	)
  }
  export default Box;