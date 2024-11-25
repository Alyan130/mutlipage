import Link from "next/link";
import "./header.css"
import { FaXbox } from "react-icons/fa";
import { SiCodestream } from "react-icons/si";
import { Gi3dGlasses} from "react-icons/gi";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react";
  

export default function Header(){
    return(
    <header className="header">
       <nav className="navbar">
        <div className="logo"></div>
        <ul className="linkbar">
         <Link href={"/"}><li>MAIN</li></Link>
         <Link href={"/about"}><li>ABOUT</li></Link>
         <Link href={"/buynow"}><li>BUY NOW</li></Link>
        </ul>
        <div className="icons">
            <FaXbox/>
            <SiCodestream/>
            <Gi3dGlasses/>
        </div>
       <Sheet>
  <SheetTrigger className="menuicon"><MenuIcon/></SheetTrigger>
  <SheetContent  className="container">
  <ul className="mlinkbar">
         <Link href={""}><li>MAIN</li></Link>
         <Link href={""}><li>ABOUT</li></Link>
         <Link href={""}><li>GAME FEATURES</li></Link>
        </ul>
  </SheetContent>
</Sheet>
</nav>
    </header>
    );
}