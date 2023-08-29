'use client';

type TUser = {
  id: number,

}

interface ClientRepository {
  getUserInfo(): Promise<TUser[]>
}

interface UserConsultationProps {

}

export default function UserConsultation({ }: UserConsultationProps) {
  // const userInfo = await ClientRepository.getUserInfo();

  return (
    
  )
}