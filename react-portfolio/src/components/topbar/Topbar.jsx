import "./topbar.scss";


export default function Topbar({ menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        
        <div className="wrapper">
            <div className="left">
            <div> <a href="#intro" className="logo">Marko Petreski</a></div>
            <div className="itemContainer">
                <span className="private">Mobile:0475795309 </span>
                </div>
            </div>
            <div className="itemContainer">
            <span className="private">Email: marko99@live.com.au</span>
        </div>
        <div className="itemContainer">
            <span className="private">Github:Marko-Petreski </span>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
        </div>
        </div>
        </div>
    </div>    
    
  )
}
