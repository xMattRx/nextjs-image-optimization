// src/app/page.tsx
export default function Home() {
  const items = Array.from({ length: 6 }, (_, i) => i);

  return (
    <main className="flex flex-col items-center gap-8 p-8">
      <h1 className="text-2xl font-bold">Página de Teste - Versão ANTES</h1>

      <img
        src="https://picsum.photos/1200/600"
        alt="Imagem principal aleatória"
        width={1200}
        height={600}
        style={{ display: "block", maxWidth: "100%", height: "auto" }}
      />

      <div className="grid grid-cols-2 gap-4">
        {items.map((idx) => (
          <img
            key={`img-${idx}`}
            src={`https://picsum.photos/600/400?random=${idx + 1}`}
            alt={`Imagem ${idx + 1}`}
            width={600}
            height={400}
            loading="eager"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </main>
  );
}
