import axios, { AxiosResponse } from 'axios'
import { addGrocery, getGroceries } from '../API'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('API tests', () => {
    test ('getGroceries()', async () => {
        const groceries = [
            {
                name: 'bananas',
                quantity: 2,
                status: false
            }
        ]

        const mockedResponse: AxiosResponse = {
            data: groceries,
            status: 200,
            statusText: 'OK',
            headers: {},
            config: {},
        }

        mockedAxios.get.mockResolvedValueOnce(mockedResponse)

        expect(axios.get).not.toHaveBeenCalled()
        const data = await getGroceries()
        expect(axios.get).toHaveBeenCalled()
        expect(data.data).toEqual(groceries)
    })
    // test ('addGrocery()', async () => {
    //     const newGrocery: IGrocery = {
    //         _id: "1",
    //         name: "Banana",
    //         quantity: 2,
    //         status: false,
    //     }
    //     const data = {
    //         message: "Grocery added",
    //         grocery: newGrocery,
    //         groceries: [
    //             {
    //                 _id: "1",
    //                 name: "Banana",
    //                 quantity: 2,
    //                 status: false,
    //             },
    //             {
    //                 _id: "2",
    //                 name: "Strawberry",
    //                 quantity: 1,
    //                 status: true,
    //             }
    //         ]
    //     }

    //     mockedAxios.post.mockImplementationOnce(() => Promise.resolve(data))

    //     await expect(addGrocery(newGrocery)).resolves.toEqual(data)
    //     expect(axios.post).toHaveBeenCalled()
    // })
})