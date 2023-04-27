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
        </div>

/* <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
<div class="shrink-0">
  <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
</div>
<div>
  <div class="text-xl font-medium text-black">ChitChat</div>
  <p class="text-slate-500">You have a new message!</p>
</div>
</div> */
       
      
 
  )
}

export default App
