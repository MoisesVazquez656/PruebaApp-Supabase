"use client";

import { useRouter } from "next/navigation";
import { createClient } from "../lip/supabaseClient";

export default function Logout() {
  const router = useRouter();

  async function cerrarSesion() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");
    router.refresh();
  }

  return (
    <button
      onClick={cerrarSesion}
      className="botonEliminar"
    >
      Cerrar sesión
    </button>
  );
}