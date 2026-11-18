"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../lip/supabaseClient";

export default function Login() {
  const router = useRouter();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function iniciarSesion(e) {
    e.preventDefault();

    setMensaje("Iniciando sesión...");

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: correo,
      password: password,
    });

    if (error) {
      setMensaje("Correo o contraseña incorrectos.");
      return;
    }

    setMensaje("Inicio de sesión correcto.");

    router.push("/");
    router.refresh();
  }

  return (
    <main className="loginPagina">
      <section className="loginCaja">

        <div className="loginLogo">
          <h1>PruebaApp</h1>
          <p>Acceso al sistema</p>
        </div>

        <form onSubmit={iniciarSesion}>

          <div className="loginCampo">
            <label>Correo electrónico</label>

            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div className="loginCampo">
            <label>Contraseña</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button type="submit" className="loginBoton">
            Iniciar sesión
          </button>

          {mensaje && (
            <p className="loginMensaje">
              {mensaje}
            </p>
          )}

        </form>

      </section>
    </main>
  );
}