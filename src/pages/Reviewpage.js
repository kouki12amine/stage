import React from 'react';
import FirstStep from './steps/FirstStep'
import  SecandStep from "./steps/SecandStep"
import ThirdStep from "./steps/ThirdStep"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Topnavigation from "./Topnavigation"
import {useState} from "react"


function Reviewpage() {
  const [tabIndex, setTabIndex] = useState(0);
  return (

  <div className='content-group'>
  <Topnavigation />
  <Tabs className="res" >
        <TabList  className="tabs-title">
              <Tab >Title 1</Tab>
              <Tab>Title 2</Tab>
              <Tab>Title 3</Tab>
        </TabList>
            <div className="container">
                  <TabPanel className="content-tabs">
                        <FirstStep />
                  </TabPanel>
                  <TabPanel className="content-tabs">
                          <SecandStep />
                    </TabPanel>
                    <TabPanel className="content-tabs">
                          <ThirdStep />
                    </TabPanel>
            </div>
   </Tabs>
  </div>
  );
}

export default Reviewpage;
