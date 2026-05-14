import { useState } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
} from "lucide-react";

function App() {
  const [cart, setCart] = useState(0);

  const products = [
    {
      id: 1,
      name: "Moletom Cyber",
      price: "R$ 199",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      name: "Óculos Neon",
      price: "R$ 149",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      name: "Jaqueta Street",
      price: "R$ 299",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const addToCart = () => {
    setCart(cart + 1);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black text-green-400">
              CYBER MARKET
            </h1>

            <p className="text-zinc-500 text-sm">
              marketplace futurista
            </p>
          </div>

          <nav className="hidden md:flex gap-8 text-zinc-400">
            <a href="#inicio" className="hover:text-green-400">
              Início
            </a>

            <a href="#produtos" className="hover:text-cyan-400">
              Produtos
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl bg-zinc-900">
              <Search size={18} />
            </button>

            <button className="relative p-2 rounded-xl bg-green-500 text-black">
              <ShoppingCart size={18} />

              {cart > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 rounded-xl bg-zinc-900">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="h-screen flex items-center justify-center text-center px-6"
      >
        <div>
          <h2 className="text-5xl md:text-7xl font-black">
            COMPRE.
            <span className="text-green-400"> RÁPIDO.</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg">
            Loja futurista inspirada no universo cyberpunk.
          </p>

          <a
            href="#produtos"
            className="inline-block mt-8 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-2xl font-bold"
          >
            ENTRAR
          </a>
        </div>
      </section>

      {/* PRODUTOS */}
      <section
        id="produtos"
        className="py-24 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">
            Produtos
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-zinc-900 rounded-3xl overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-green-400 text-3xl font-black mt-4">
                    {product.price}
                  </p>

                  <button
                    onClick={addToCart}
                    className="mt-6 w-full bg-green-500 hover:bg-green-400 text-black py-4 rounded-2xl font-bold"
                  >
                    ADICIONAR
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-10 text-center text-zinc-500">
        © 2026 - DEVs ( EMITÊ - ELICÊ )
      </footer>
    </div>
  );
}

export default App;