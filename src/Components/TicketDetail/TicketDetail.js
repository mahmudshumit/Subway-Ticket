import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import Ticket from '../Ticket/Ticket';
import ticketData from '../fakeData/data';


const TicketDetail = () => {
  const {ticketId} = useParams();
  const  [ticket,setTicket]  = useState({});
  // useEffect(() => {
  //   setTicket(ticketData/`${ticketId}`)
  // },[]);
  // const ticketData = 
    const tickets = ticketData.find(ticket =>ticket.id===ticketId);
  return (
    <div>
        <h1>Ticket Type : {ticketId}</h1>
        <Ticket ticket={ticket}></Ticket>
         
      
        
    </div>
  );
};

export default TicketDetail;