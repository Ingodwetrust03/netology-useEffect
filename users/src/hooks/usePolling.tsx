import {useEffect, useState} from "react";

const usePolling = (url, initialData) => {
    const[data, setData] = useState(initialData)
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(false)


    useEffect( () => {

            let controller

            const stop = () => {
                if (controller) {
                    controller.abort()
                }
            }

            const fetchData = async () => {

                try {
                    stop()

                    controller = new AbortController();
                    setLoading(true)

                    const response = await fetch(url, controller.signal)
                    if(!response.ok) {
                        throw new Error ("Ошибка при передаче данных")
                    }
                    const json = await response.json()
                    setData(json)
                } catch (error) {
                    setError(error)
                    console.log(error.message)
                } finally {
                    setLoading(false)
                }
            }


            fetchData();

            return () => {
                stop()
            }


        }, [url])


    return [{data, loading, error}]

}

export default usePolling