export default function ServiceCard({ service }) {
  return (
    <div className="card">
      <h3>{service.name}</h3>

      <p>
        Status:
        <span className={service.status === "online" ? "online" : "offline"}>
          {service.status}
        </span>
      </p>

      <p>Uptime: {service.uptime}</p>
    </div>
  );
}