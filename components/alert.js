

export default function Alert({ preview }) {
  return (
<div className="relative bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span className="sr-only">LOGO</span>
          <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt=""/>
        </a>
      </div>

      

      <nav className="hidden md:flex space-x-10">
       
        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Quem sou eu
        </a>
        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Serviços
        </a>
        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Outra Coisa
        </a>
        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Contato
        </a>

      </nav>

      <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
          Sign in
        </a>
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
        Contato
        </a>
      </div>

    </div>
  </div>


  <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
          </div>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Quem sou eu
        </a>
        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Serviços
        </a>
        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
        Outra Coisa
        </a>
          <div className="-mr-2">
            <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Contato
          </a>
          </div>
        </div>
        
      </div>
     
    </div>
  </div>
</div>

  )
}
