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
import ProfileCard from "../../src/components/ProfileCard";
const Perfil = () => {
  // For Dismiss Button with Alert
  const [visible, setVisible] = useState(true);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <div>
  
      <Card>
          <ProfileCard></ProfileCard>
      </Card>
    
    </div>
  );
};

Perfil.layout = "MenuLayout"
export default Perfil;
