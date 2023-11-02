import ResponsiveAppBar from '../components/navbar';
import ContactUs from '../components/contactus';
import { Outlet, Link } from "react-router-dom";
export default function Layout(){
    return (
        <div>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Outlet></Outlet>
        <ContactUs></ContactUs>
        </div>

    )
}