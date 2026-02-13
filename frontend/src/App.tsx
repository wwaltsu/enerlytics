import { useEffect, useState } from 'react';
import SiteForm from './components/SiteForm';
import { siteSchema } from './schemas/SiteSchema';
import axios from 'axios';

type Site = {
  id: number;
  name: string;
  status: string;
};


function App() {
  const [sites, setSites] = useState<Site[]>([]);
  const [siteName, setSiteName] = useState('');
  const [siteStatus, setSiteStatus] = useState('');

  const handleAddSite = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const siteToAdd: Site = {
      id: sites.length + 1,
      name: siteName,
      status: siteStatus,
    };

    const result = siteSchema.safeParse(siteToAdd);
    if (!result.success) {
      alert(result.error.issues.map((e) => e.message).join('\n'));
      return;
    }
    setSites((prev) => [...prev, siteToAdd]);
    setSiteName('');
    setSiteStatus('');
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/sites/${id}`)
      setSites(prev => prev.filter(site => site.id !== id))
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Site[]>('/api/sites')
        setSites(res.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        minHeight: '100vh',
        color: 'black',
      }}
    >
      <h1 style={{ marginBottom: '1.5rem' }}>Enerlytics Dashboard</h1>

      <SiteForm
        siteName={siteName}
        setSiteName={setSiteName}
        siteStatus={siteStatus}
        setSiteStatus={setSiteStatus}
        handleAddSite={handleAddSite}
      />

      {sites.length === 0 ? (
        <p>Loading sites...</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {sites.map((site) => (
            <li
              key={site.id}
              style={{
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '6px',
                marginBottom: '0.5rem',
              }}
            >
              <strong>{site.name}</strong> — {site.status}
              <button
                onClick={() => handleDelete(site.id)}
                className="ml-6 text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-red-500 hover:text-red-600 transition"
              >
                Delete
              </button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
