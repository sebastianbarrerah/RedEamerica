const API = "https://jsonplaceholder.typicode.com/todos/1"
export const getUser = async() => {
    try {
        const response = await fetch(API);
        const data = await response.json()
        console.log(data, "Estos son los datos de la api")
        return data;
    } catch (error) {
        console.log("Hubo un error al traer los datos", error);
    }
}