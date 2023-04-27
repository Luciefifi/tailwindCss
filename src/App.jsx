import chatlogo from './images/chatlogo.png'
import './App.css'
function App() {


  return (
  
      <div>
        {/* <p className="text-3xl font-bold   underline" >
          Hello world
        </p>
        <button className="text-white px-4 sm:px-8 py-2 sm:py-3  bg-sky-700 hover:bg-sky-800"> click me</button>
        {/* <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">...</button> */}
        {/* <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" >.......</button> */}
        <div className="chat-notification">
          <div className="chat-notification-logo-wrapper">
            <img className="chat-notification-logo" src={chatlogo} alt="chit chat logo"/>
          </div>
          <div className="chat-notification-content">
            <h4 className="chat-notification-title"> chitChat</h4>
            <p className="chat-notification-message"> you have a new message</p>
          </div>
        </div>
        </div>
       
      
 
  )
}

export default App
