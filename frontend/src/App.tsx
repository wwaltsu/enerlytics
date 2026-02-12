import { useEffect, useState } from "react";
import SiteForm from "./components/SiteForm";
import { siteSchema } from "./schemas/SiteSchema";

type Site = {
  id: number,
  name: string,
  status: string,
}

function App() {
  const [sites, setSites] = useState<Site[]>([]);
  const [siteName, setSiteName] = useState('');
  const [siteStatus, setSiteStatus] = useState('');

  const handleAddSite = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const siteToAdd: Site = {
      id: sites.length + 1,
      name: siteName,
      status: siteStatus
    };

    const result = siteSchema.safeParse(siteToAdd);
    if (!result.success) {
      alert(result.error.issues.map(e => e.message).join("\n"));
      return;
    }
    setSites(prev => [...prev, siteToAdd]);
    setSiteName('');
    setSiteStatus('');
  };

  useEffect(() => {
    fetch("/api/sites")
      .then((res) => res.json())
      .then((data) => setSites(data))
      .catch((err) => console.error("API error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", backgroundColor: "white", minHeight: "100vh", color: "black" }}>

      <h1 style={{ marginBottom: "1.5rem" }}>Enerlytics Dashboard</h1>

      <SiteForm siteName={siteName} setSiteName={setSiteName}
        siteStatus={siteStatus} setSiteStatus={setSiteStatus}
        handleAddSite={handleAddSite} />

      {sites.length === 0 ? (
        <p>Loading sites...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {sites.map((site) => (
            <li
              key={site.id}
              style={{
                padding: "0.75rem",
                border: "1px solid #ddd",
                borderRadius: "6px",
                marginBottom: "0.5rem"
              }}
            >
              <strong>{site.name}</strong> — {site.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
