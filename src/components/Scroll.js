import React from 'react'

// scroll is going to be a wrapping component
// we have props, we have state , and then from wrapping probably we have childern
const Scroll = (props) =>{
	return(
		<div style = {{overflowY: 'scroll' ,border: '5px solid black', height:'800px'}}>
			{props.children}
		</div>
	)
}

export default Scroll