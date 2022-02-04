export function Article({data , action}){
    // console.log(data , action)

    return <div className="col-4 mt-2">
        <article className="card">
            <header className="card-header">
                <h2>{data.titre}</h2>
            </header>
            <img src="https://via.placeholder.com/400x100" alt="" className="card-img" />
            <div className="card-body">
                <p className="mb-0">{data.contenu}</p>
            </div>
            <footer className="card-footer align-items-center d-flex">
                <button className="btn btn-dark" onClick={() => { action (data.id ) }}>liker</button> 
                <span className="ms-4">{ data.like }</span>
            </footer>
        </article>
    </div>
}