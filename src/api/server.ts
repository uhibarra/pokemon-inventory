let token = '08874aa91cef05f29341d5d354441e1ddcf1b92e4ac0cd0d'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async( data:any = {} ) => {
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },

    update: async ( id:string, data:any = {} ) => {
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
    },
    
    delete: async( id:string ) => {
        const response = await fetch(`https://drone-inventory-tm-81.herokuapp.com/api/drones/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
    }
}