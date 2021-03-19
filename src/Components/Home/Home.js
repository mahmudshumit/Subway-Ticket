import React, { useEffect, useState } from 'react';



import ticketData from '../fakeData/data'
import Ticket from '../Ticket/Ticket';


const Home = () => {
  const [tickets,setTickets] =useState([]);
  useEffect(()=>{
setTickets(ticketData)
  },[])
    // const history = useHistory();

    // function handleClick() {
    //   history.push("/destination");
    // }
  
    return (

       <div className="row">

       {
          tickets.map(ticket =><Ticket ticket={ticket}></Ticket>)
       }
   </div>

         
        

    );
};

export default Home;