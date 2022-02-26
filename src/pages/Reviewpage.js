import React from 'react';
import FirstStep from './steps/FirstStep'
import  SecandStep from "./steps/SecandStep"
import ThirdStep from "./steps/ThirdStep"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {useState} from "react"


function Reviewpage() {
  return (

  <div className='content-group'>
                                <FirstStep />
            </div>
  );
}

export default Reviewpage;
