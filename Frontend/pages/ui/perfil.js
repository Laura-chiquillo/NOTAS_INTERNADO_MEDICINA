import React, { useState } from "react";
import Head from "next/head";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import Link from "next/link";

const Perfil = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
  
      <Card>
          <h1>hola</h1>
      </Card>
    
    </div>
  );
};

Perfil.layout = "MenuLayout"
export default Perfil;
