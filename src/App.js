import React, { useState, useRef } from 'react';
import Header from './components/Header';
import FoodInput from './components/FoodInput';
import NutritionLabel from './components/NutritionLabel';
import ExportControls from './components/ExportControls';
import './styles/global.css';

function App() {
  const [nutritionData, setNutritionData] = useState(null);
  const labelRef = useRef();

  return (
    <div className="App">
      <Header />
      <div className="container">
        <FoodInput onNutritionData={setNutritionData} />
        <div ref={labelRef}>
          <NutritionLabel nutritionData={nutritionData} />
        </div>
        {nutritionData && <ExportControls labelRef={labelRef} />}
      </div>
    </div>
  );
}

export default App;