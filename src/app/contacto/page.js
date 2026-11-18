/*input para correo 
inputpara motivo
text para comentarlo 
boton para enviar*/

export default function Contacto() {
  return (
    <main className="flex justify-center p-10">

      <div className="border p-6 w-96">

        <h1 className="text-2xl font-bold mb-5 text-center">
          Contacto
        </h1>

        <form>

          <label>Correo:</label>
          <input
            type="email"
            className="border p-2 w-full mb-4"
          />

          <label>Motivo:</label>
          <input
            type="text"
            className="border p-2 w-full mb-4"
          />

          <label>Comentario:</label>
          <textarea
            className="border p-2 w-full mb-4"
            rows="5"
          ></textarea>

          <button
            className="bg-blue-500 text-white px-4 py-2 w-full"
          >
            Enviar
          </button>

        </form>

      </div>

    </main>
  );
}