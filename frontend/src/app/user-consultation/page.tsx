import FormPatient from '@/layouts/FormPatient'

async function getPatientById(id: number) {
  try {
    const data = await fetch(`http://localhost:3001/api/patients/one-by-id?id=${id}`)
    console.log("data value: ", data);
    const json = await data.json()
    console.log("json value: ", json);

    return json.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default async function UserConsultation({
  searchParams
 } : {
  searchParams: {[key: string]: number }
 }) {
  const { patient_id } = searchParams
  const patient = await getPatientById(patient_id)

  return (
    <>
      <FormPatient data={patient} />
    </>
  );
}