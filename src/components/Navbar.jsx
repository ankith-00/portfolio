import { Drawer } from "vaul";
import { Link } from "react-router-dom";

import { RiMenu4Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import "../App.css";

export default function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <div className="box">
          <h2 className="logo">ANKITH</h2>
        </div>

        <Drawer.Root>
            <div className="box">
            <Drawer.Trigger className="drawer-trigger">
                <RiMenu4Fill size={30} color="#fff"/>
            </Drawer.Trigger>
            </div>

            <Drawer.Portal>
                {/* DRAWER - OVERLAY */}
                <Drawer.Overlay className="drawer-overlay" />
                    <Drawer.Content className="drawer-content">
                    <div className="drawer-handle" /> 
                    <div className="drawer-body">
                        <Drawer.Title className="drawer-title"> </Drawer.Title>
                        <div className="drawer-nav-links">


                            <Link className="link">
                                Home
                                <div className="arrow">
                                    <MdOutlineKeyboardArrowRight size={23}/>
                                </div>
                            </Link>

                            <Link className="link">
                                Skills
                                <div className="arrow">
                                    <MdOutlineKeyboardArrowRight size={23}/>
                                </div>
                            </Link>


                            <Link className="link">
                                Projects
                                <div className="arrow">
                                    <MdOutlineKeyboardArrowRight size={23}/>
                                </div>
                            </Link>

                            <Link className="link">
                                Experinece
                                <div className="arrow">
                                    <MdOutlineKeyboardArrowRight size={23}/>
                                </div>
                            </Link>

                            <Link className="link">
                                Experties
                                <div className="arrow">
                                    <MdOutlineKeyboardArrowRight size={23}/>
                                </div>
                            </Link>


                            <button>Let's Connect</button>
                        </div>
                    </div>
                    </Drawer.Content>
            </Drawer.Portal>

        </Drawer.Root>
      </nav>
    </div>
  );
}