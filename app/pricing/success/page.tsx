"use client"

// Dynamic page - personalized success redirect
export const dynamic = 'force-dynamic';

import { redirect } from "next/navigation";

export default function SuccessPage() {
  redirect("/dashboard");
}