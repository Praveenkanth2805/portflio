"use client";

import { useEffect, useState } from "react";

export default function TestEnv() {
  const [envVars, setEnvVars] = useState({});

  useEffect(() => {
    setEnvVars({
      email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      github: process.env.NEXT_PUBLIC_GITHUB_URL,
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    });
  }, []);

  return (
    <div style={{ padding: "2rem", color: "white", background: "#050505", minHeight: "100vh" }}>
      <h1>Environment Variables Test</h1>
      <pre style={{ background: "#0c0c0c", padding: "1rem", borderRadius: "8px" }}>
        {JSON.stringify(envVars, null, 2)}
      </pre>
    </div>
  );
}