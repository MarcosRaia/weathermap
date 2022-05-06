import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Head() {
    return <>
        <div className="container">
            <h1 className="p-5 d-flex justify-content-center">Previsão do Tempo</h1>
            <div className=" p-5 d-flex justify-content-center">
            <i className="material-icons">search</i><input style={{width:'50%'}} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
        </div>
    </>
}

export default Head;