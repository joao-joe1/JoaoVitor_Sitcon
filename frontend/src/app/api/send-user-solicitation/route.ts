

type TPatient = {
  id: number;
  nome: string;
  dataNasc: string;
  cpf: string;
};

interface IBody {
  data: {
    patient: TPatient,
  },
  status: number
}

export default async function POST(req: Request) {
  console.log("POST /send-user-solicitation has fired");
    
  const formData = await req.formData();
  console.log("FormData value: ", formData)

    
}