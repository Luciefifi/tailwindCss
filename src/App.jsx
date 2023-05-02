import chatlogo from './images/chatlogo.png'
// import './App.css'
function App() {


  return (
  
      <div>
        {/* <p className="text-3xl font-bold   underline" >
          Hello world
        </p>
        <button className="text-white px-4 sm:px-8 py-2 sm:py-3  bg-sky-700 hover:bg-sky-800"> click me</button>
        {/* <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button> */}
        {/* <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" >.......</button> */}
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 ">
          <div className="shrink-0">
            <img className="h-12 w-12" src={chatlogo} alt="chit chat logo"/>
          </div>
          <div >
            <h4 className="text-xl font-medium text-black"> chitChat</h4>
            <p className="text-slate-500"> you have a new message</p>
          </div>
        </div>


        <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={chatlogo} alt="Woman's Face"/>
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p className="text-slate-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>

        </div>
        


       
      
 
  )
}

export default App
