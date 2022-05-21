import { TestimonialItem } from "./components/TestimonialItem";


function App() {
  return (
    <div className="p-10"> 
      <TestimonialItem/>
      
      <a className="block shadow bg-green-600 text-white text-center p-4 w-11/12 mx-auto mt-5 rounded-xl hover:bg-green-500" href="www.google.com.br">Quero me inscrever no curso</a>
    </div>
  );
}

export default App;
