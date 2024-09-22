import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void; // Função de callback ao submeter a pesquisa
};

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState(""); // Estado para armazenar o valor da pesquisa

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query); // Chama a função de callback passando o termo de busca
      setQuery("")
    }

  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-l-lg border border-gray-300 text-black bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search for items..."
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-r-lg transition duration-300"
      >
        Search
      </button>
    </form>
  );
}
