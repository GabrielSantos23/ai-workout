"use client";

import { LoaderCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redireciona para a página de login se não estiver autenticado
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className=" w-full h-screen flex justify-center items-center">
        <LoaderCircle className=" text-white animate-spin" />
      </div>
    ); // Exibe um carregamento enquanto verifica a sessão
  }

  return <>{children}</>;
}
