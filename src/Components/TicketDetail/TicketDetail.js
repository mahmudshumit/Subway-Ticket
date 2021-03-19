import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ticketData from '../fakeData/data';
import Ticket from '../Ticket/Ticket';


const TicketDetail = () => {
  const {ticketId} = useParams();
  const  [ticket,setTicket]  = useState({});
  useEffect(() => {
    setTicket(ticketData/`${ticketId}`)
  },[]);

  return (
    <div>
        <h1>Ticket Name : {ticketId}</h1>
         
      
        
    </div>
  );
};

export default TicketDetail;