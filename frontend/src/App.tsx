import { useEffect, useState } from "react";

type Site = {
  id: number;
  name: string;
  status: string;
};

function App() {
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    fetch("/api/sites")
      .then((res) => res.json())
      .then((data) => setSites(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="">Enerlytics Dashboard</h1>

      {sites.length === 0 ? (
        <p>Loading sites...</p>
      ) : (
        <ul>
          {sites.map((site) => (
            <li key={site.id}>
              <strong>{site.name}</strong> — {site.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}



export default App;