import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 text-center">Oops!</h1>
        <p className="text-lg text-gray-700 text-center mt-4">
          Sorry, something went wrong with your request.
        </p>
        <p className="text-sm text-gray-500 text-center mb-4">
          { error ? 
    
           (
            <i>{(error as Error).message || "An unexpected error has occurred."}</i>
          ): <h1>Unknown error</h1>}
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
      <footer className="mt-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Your E-commerce, All Rights Reserved
      </footer>
    </div>
    </div>
  );
}