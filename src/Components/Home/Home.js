import React from 'react';
import { useHistory } from "react-router-dom";


const Home = () => {
    const history = useHistory();

    function handleClick() {
      history.push("/destination");
    }
  
    return (
        <div class="row mt-5 pt-5 ml-5">
            <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Subway Online Ticket </h5> 
              <button onClick={handleClick} class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Subway Online Ticket </h5> 
              <button onClick={handleClick} class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Subway Online Ticket </h5> 
              <button onClick={handleClick} class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;