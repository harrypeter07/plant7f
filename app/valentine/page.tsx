"use client"
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ValentineAnimation from "@/components/ValentineAnimation";

export default function ValentinePage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authToken");

    if (!isAuthenticated) {
      router.push("/"); // Redirect to the main page (auth page)
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <p className="text-2xl font-semibold">Happy Rose Day Chingiii</p>
      <ValentineAnimation />
    </main>
  );
}
