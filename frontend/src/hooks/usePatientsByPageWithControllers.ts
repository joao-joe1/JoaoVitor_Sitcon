import { useEffect, useState } from "react";



type TPatient = {
    id: number;
    nome: string;
    dataNasc: string;
    cpf: string;
};

export default function usePatientsByPageWithControllers(page: number) {
    const [data, setData] = useState<TPatient[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function getPatientsPerPage() {
            try {
                const data = await fetch(`http://localhost:3001/api/patients?page=${page}`, { signal });
                console.log("data value: ", DataTransferItem)
                const json = await data.json();
                console.log("json: ", json)

                setData(json.data)
            } catch (error) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }

        getPatientsPerPage()

        return () => {
            controller.abort()
        };
    }, [page]);

    return {
        data,
        isLoading,
        isError
    }
}