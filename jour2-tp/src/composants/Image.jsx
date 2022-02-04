export const Image = ({data , action}) => {
    return <div className="col-3 d-flex flex-column"> 
        <img src={data.url} alt={data.titre} className={data.status ? "img-responsive" : "img-responsive border border-dark border-3"} onClick={ () => action(data) }/>
        <button className="btn btn-danger mt-2" onClick={ () => action(data) }>show</button>
    </div> 
}