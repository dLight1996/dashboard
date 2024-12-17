import { Button } from "@nextui-org/react";
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/login');
  }
  
  redirect('/dashboard');
}
