

export const Toto = (props) => {
    console.log(props)
    if(! props.source  ) return <img src="https://via.placeholder.com/200x100?text=NoImage" alt="" className="img1" />
    return <img src={props.source} alt="" className="img1" />
}