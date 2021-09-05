import { useState } from 'react';
import ReusableButton from './components/Button/ReusableButton';
import CustomModal from './components/Modal/CustomModal';
import './App.css';
function App() {
  const [show, setShow] = useState(false);

  const toggleModal = () => {
    return setShow(!show);
  };

  return (
    <div className="App">
      <h1>TYPESCRIPT / REACT REUSABLE COMPONENTS</h1>
      <button onClick={toggleModal}> Open Modal</button>
      {show && (
        <CustomModal closeModal={toggleModal} small="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          obcaecati, modi amet necessitatibus laboriosam quo odit aperiam,
          aliquid provident vero quia rem vel consequatur nostrum cumque
          blanditiis ipsum nihil doloremque.
        </CustomModal>
      )}
      <div style={{ margin: '3vh' }}>
        <ReusableButton title="Button" onClick={() => console.log('yeah')} />
      </div>
    </div>
  );
}

export default App;
