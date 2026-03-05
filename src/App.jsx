import "./styles/App.css";
import { services } from "./data/services";
import ServiceCard from "./components/servicesCard";
import UserChart from "./components/userChart";

function App() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div className="grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <UserChart />
    </div>
  );
}

export default App;