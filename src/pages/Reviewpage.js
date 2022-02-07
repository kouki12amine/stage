import React ,{useState} from 'react';
import FirstStep from './steps/FirstStep'


function Reviewpage() {
    const [step, setStep] = useState(1);

    const  nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
      };
    
      // Go back to prev step
      const prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
      };
    
      // Handle fields change
      handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };
  return (
      <React.Fragment>
            <FirstStep />
      </React.Fragment>
  );
}

export default Reviewpage;
