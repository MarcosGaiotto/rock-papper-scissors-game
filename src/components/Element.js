import '../styles/components/Element.css';


function Element(props)  {
    return(
        <div className={props.classElement} id={props.type}></div>
    )
}

export default Element;