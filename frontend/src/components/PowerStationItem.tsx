import { useState } from 'react'
import type { PowerStation } from '../schemas/PowerStationSchema'

type PowerStationItemProps = {
    powerStation: PowerStation
    handleDelete: (id: number) => void
    handleUpdate: (
        id: number,
        data: { name: string; status: string }
    ) => Promise<PowerStation>
}

const PowerStationItem = ({
    powerStation,
    handleDelete,
    handleUpdate,
}: PowerStationItemProps) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState(powerStation.name)
    const [editStatus, setEditStatus] = useState(powerStation.status)

    const startEdit = () => {
        setEditName(powerStation.name)
        setEditStatus(powerStation.status)
        setIsEditing(true)
    }

    const cancelEdit = () => {
        setIsEditing(false)
    }

    const saveEdit = async () => {
        await handleUpdate(powerStation.id, { name: editName, status: editStatus })
        setIsEditing(false)
    }

    return (
        <li
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
            {isEditing ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
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
                    <strong>{powerStation.name}</strong> — {powerStation.status}
                </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem' }}>
                {isEditing ? (
                    <>
                        <button
                            onClick={saveEdit}
                            className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-blue-500 hover:text-blue-600 transition"
                        >
                            Save
                        </button>
                        <button
                            onClick={cancelEdit}
                            className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-gray-400 transition"
                        >
                            Cancel
                        </button>
                    </>
                ) : (
                    <button
                        onClick={startEdit}
                        className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-blue-500 hover:text-blue-600 transition"
                    >
                        Edit
                    </button>
                )}

                <button
                    onClick={() => handleDelete(powerStation.id)}
                    className="text-xs px-2 py-1 border border-gray-300 rounded-md text-gray-500 hover:border-red-500 hover:text-red-600 transition"
                >
                    Delete
                </button>
            </div>
        </li>
    )
}
export default PowerStationItem