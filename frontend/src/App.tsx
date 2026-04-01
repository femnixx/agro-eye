import './App.css'
import { useTelemetry } from './hooks/useTelemetry'

function App() {
    useTelemetry();
  
    return (
      <div className="App">
      <h1>Sentinel Dashboard</h1>
      <p>Move your mouse around to generate data for the Go Backend.</p>
      
      {/* Later, we will put our Charts and Threat Maps here */}
      <div className="status-card">
        Monitoring active...
      </div>
    </div>
    )
}

export default App
