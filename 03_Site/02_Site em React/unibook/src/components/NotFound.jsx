import iconNotFound from '../templates/images/not-found.svg';
import '../templates/styles/styles-not-found.css'


function NotFound(){
    return(
    <div className="col-12 px-0 bg-white bg-height d-flex justify-content-center">
        <div className="bg-height d-flex align-items-center">
            <div className="d-flex flex-wrap justify-content-center align-items-center col-12 text-center text-white">
                <div className="col-12">
                    <h1 className="text-dark">Pagina não Encontrada !</h1>
                </div>
                <img className="image-not-found" src={iconNotFound} alt="Not Found"/>
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        
                        <button
                        className="bg-blue rounded-pill border border-white text-white border-2 fw-bold px-4 py-3 w-100"
                        >
                        Voltar para home
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default NotFound;