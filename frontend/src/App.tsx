import { useEffect, useState } from 'react'
import SiteForm from './components/SiteForm'
import { siteSchema } from './schemas/SiteSchema'
import axios from 'axios'

type Site = {
  id: number
  name: string
  status: string
}

function App() {
  const [sites, setSites] = useState<Site[]>([])
  const [siteName, setSiteName] = useState('')
  const [siteStatus, setSiteStatus] = useState('')

  const [editingId, setEditingId] = useState<number | null>(null)
  const [editName, setEditName] = useState('')
  const [editStatus, setEditStatus] = useState('')

  const handleAddSite = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    const newSite = { name: siteName, status: siteStatus }

    const results = siteSchema.safeParse({ id: 1, ...newSite })
    if (!results.success) {
      alert(results.error.issues.map((e) => e.message).join('\n'))
      return
    }

    try {
      const res = await axios.post('/api/sites', newSite)
      const created = res.data as Site

      setSites((prev) => [...prev, created])
      setSiteName('')
      setSiteStatus('')
    } catch (err) {
      console.error('Failed to create site:', err)
    }
  }


  const handleUpdate = async (
    id: number,
    updatedSite: { name: string; status: string }
  ): Promise<Site> => {
    const res = await axios.put(`/api/sites/${id}`, updatedSite)

    console.log('PUT response.data', res.data)
    const updated = res.data as Site

    setSites((prev) => prev.map((s) => (s.id === id ? updated : s)))
    return updated
  }

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/api/sites/${id}`)
      setSites((prev) => prev.filter((site) => site.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              {editingId === site.id ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    flex: 1,
                  }}
                >
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
                  />

                  <input
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
                  />
                </div>
              ) : (
                <div style={{ flex: 1 }}>
                  <strong>{site.name}</strong> — {site.status}
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {editingId === site.id ? (
                  <>
                    <button
                      onClick={async () => {
                        await handleUpdate(site.id, {
                          name: editName,
                          status: editStatus,
                        })
                        setEditingId(null)
                      }}
                      className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-blue-500 hover:text-blue-600 transition"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditingId(null)}
                      className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-gray-400 transition"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setEditingId(site.id)
                      setEditName(site.name)
                      setEditStatus(site.status)
                    }}
                    className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-blue-500 hover:text-blue-600 transition"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => handleDelete(site.id)}
                  className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-red-500 hover:text-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
