import { Link } from "react-router-dom";
import s from "./SideNavigation.module.css";
import { useState } from "react";

export default function SideNavigation() {
  const [showDashBoard,setShowDashBoard] = useState(true)

  const toogleDashBoard = ()=>{
    setShowDashBoard(!showDashBoard)
  }
  return (
    <div className={`${s.mainSideContainer}`}>
     <div  onClick={toogleDashBoard} className={` d-flex align-items-center ${s.itemContainer} `}>
          <ion-icon name="apps-outline"></ion-icon>
          <h2 className={`text-start  ${s.textDashboard}`}>Dashboard</h2>
      </div>
    {showDashBoard && (<section className={`${s.sideContainer} `}>
      
     

    <ul className={`${s.listGroup}'list-group'  `}>
      <div className={`d-flex align-items-center list-group-item-action p-2 ${s.elementHover}`}>
      <ion-icon name="bar-chart-outline" className='fs-2' ></ion-icon>
    
        <li className="list-group-item text-center p-2 ">
          <Link
            className="text-decoration-none text-reset "
            to={"/dashboard"}
          >
            Main
          </Link>
        </li>
      </div>

      <div className={`d-flex align-items-center list-group-item-action p-2 ${s.elementHover}`}>
      <ion-icon name="happy-outline"></ion-icon>
        <li className="list-group-item text-center p-2 ">
          <Link
            className="list-group-item-action text-decoration-none"
            to={"/clients"}
          >
            Clients
          </Link>
        </li>
      </div>
      <div className={`d-flex align-items-center list-group-item-action p-2 ${s.elementHover}`}>
      <ion-icon name="man-outline"></ion-icon>
        <li className="list-group-item text-center p-2 ">
          <Link
            className="list-group-item-action text-decoration-none"
            to={"/barbers"}
          >
            Barbers
          </Link>
        </li>
      </div>
      <div className={`d-flex align-items-center list-group-item-action  p-2 ${s.elementHover}`}>
      <ion-icon name="cube-outline"></ion-icon>
        <li className="list-group-item text-center p-2 ">
          <Link
            className="list-group-item-action text-decoration-none"
            to={"/dashboard"}
          >
            Iventory
          </Link>
        </li>
      </div>
      <div className={`d-flex align-items-center list-group-item-action p-2 ${s.elementHover}`}>
      <ion-icon name="settings-outline"></ion-icon>
        <li className="list-group-item text-center p-2 ">
          <Link
            className="list-group-item-action text-decoration-none"
            to={"/dashboard"}
          >
            Settings
          </Link>
        </li>
      </div>
    </ul>
  </section>)}
 
  
    </div> 
     )
    
}
