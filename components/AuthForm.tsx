"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (answer.toLowerCase() === "neet") {
      localStorage.setItem("authToken", "authenticated"); // Store auth status
      router.push("/valentine"); // Redirect to Valentine page
    } else {
      setError("Incorrect answer. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center justify-center min-h-screen">
      <div>
        <label htmlFor="security-question" className="block mb-2 text-lg font-bold">
          What do you say when I ask about JEE?
        </label>
        <input
          type="text"
          id="security-question"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="bg-red-500 text-white p-2 rounded hover:bg-red-600 w-40"
      >
        Enter
      </button>
    </form>
  );
}
