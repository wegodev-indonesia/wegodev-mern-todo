import React from 'react';

const App: React.FC = () => {
  return (
    <div className="lg:container lg:mx-auto">
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
        <img className="w-full" src={require('./assets/images/image.jpg')} alt="developer working" />
        <div className="px-6 py-4">
          <h1 className="font-bold text-purple-700 text-xl mb-2">Hello</h1>
          <p className="text-gray-700 text-base">
            Wkwkwkwk ya kali ah <span role="img" aria-label="emoji">😆</span>
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            #FrontendEngineer #Coder #Hehe
          </span>
        </div>
      </div>
    </div>
  )
}

export default App;
