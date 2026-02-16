import axios from 'axios'
import type { Site } from '../schemas/SiteSchema'

export const getAll = async (): Promise<Site[]> => {
    const response = await axios.get<Site[]>('/api/sites')
    return response.data
}

export const remove = async (id: number) => {
    await axios.delete(`/api/sites/${id}`)

}

export const update = async (
    id: number,
    updatedSite: { name: string; status: string }
) => {
    const res = await axios.put(`/api/sites/${id}`, updatedSite)
    return res.data as Site
}

export const create = async (
    newSite: { name: string; status: string }
): Promise<Site> => {
    const res = await axios.post('api/sites', newSite)
    return res.data as Site
}

