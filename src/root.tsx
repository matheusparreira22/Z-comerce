import { Link, Outlet, useLoaderData } from "react-router-dom";
import getContacts from "./api/contacts/contacts";
import SearchBar from "./components/searchBar";
import { FaUserAstronaut } from "react-icons/fa";
type Contact = {
  first: string;
  last: string;
  avatar: string;
  twitter: string;
  notes: string;
  favorite: boolean;
  id?: number | string;
};

// Função loader para buscar os contatos
export async function loader() {
    
  const contacts: Contact[] =  getContacts();
 
  return  contacts ; // Retorna um objeto contendo a propriedade 'contacts'
}


// Função Root que contém o layout básico da página
export default function Root() {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
    // Aqui você pode adicionar a lógica para manipular a pesquisa, como realizar uma busca em uma API
  };
  return (
    <div className="flex flex-col min-h-screen">
    {/* Header com barra superior e número de contato */}
    <div className="bg-gray-100 text-gray-700 px-6 py-2">
      <div className="container mx-auto flex justify-between items-center text-sm p-5">
        <h3>Need help? Call us: (+98) 0234456789</h3>
        {/* Espaço para colocar links adicionais como "Login" ou "FAQ", se necessário */}
      </div>
    </div>
  
    {/* Header com navbar */}
    <header className="bg-gray-800 text-white p-4 md:p-6">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold">Z-commerce</div>
        <div className="mt-4 md:mt-0 w-full md:w-auto md:flex-grow">
          <SearchBar onSearch={handleSearch} />
        </div>
        <ul className="mt-4 md:mt-0 flex space-x-4 text-center">
          <li>
            <Link to="/" >
              <div className="flex  flex-row gap-1">
              <FaUserAstronaut/>
              <small className="hover:text-gray-300"> Sign in</small>
              </div>
              
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  
    {/* Conteúdo dinâmico com children (Outlet) */}
    <main className="flex-grow bg-gray-100 p-4 md:p-8">
      <Outlet /> {/* Aqui o conteúdo será trocado conforme as rotas */}
    </main>
  
    {/* Footer fixo na parte inferior */}
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Z-commerce. All rights reserved.</p>
    </footer>
  </div>
  
  );
}
