"use server";

export default async function getPatientsPerPage(page: number) {
  "use server"
  try {
    const data = await fetch(`http://localhost:3001/get-patiens?page=${page}`);
    const json = await data.json();

    return json
  } catch (error) {
    console.error(error);
    throw error;
  }
}