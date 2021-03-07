import '../styles/components/Element.css';


function Element(props)  {
    return(
        <div className="element" id={props.type}></div>
    )
}

export default Element;