import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getGroceries = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const groceries: AxiosResponse<ApiDataType> = await axios.get(baseUrl + '/groceries')
        return groceries
    } catch (error: any) {
        throw new Error(error)
    }
}

export const addGrocery = async (formData: IGrocery): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const grocery: Omit<IGrocery, "_id"> = {
            name: formData.name,
            quantity: formData.quantity,
            status: false,
        }
        const apiUrl = baseUrl + '/add-grocery'
        const saveGrocery: AxiosResponse<ApiDataType> = await axios.request({
            method: 'POST',
            url: apiUrl,
            params: grocery
        })
        
        return saveGrocery
    } catch (error: any) {
        throw new Error(error)
    }
}

export const updateGrocery = async (grocery: IGrocery): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const groceryUpdate: Pick<IGrocery, "status"> = {
            status: true
        }
        const apiUrl = `${baseUrl}/edit-grocery/${grocery._id}`;
        const updatedGrocery: AxiosResponse<ApiDataType> = await axios.request({
            method: 'PUT',
            url: apiUrl,
            params: groceryUpdate
        })
        

        return updatedGrocery
    } catch (error: any) {
        throw new Error(error)
    }
}

export const deleteGrocery = async (_id: string): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedGrocery: AxiosResponse<ApiDataType> = await axios.delete(`${baseUrl}/delete-grocery/${_id}`)
        
        return deletedGrocery
    } catch (error: any) {
        throw new Error(error)
    }
}