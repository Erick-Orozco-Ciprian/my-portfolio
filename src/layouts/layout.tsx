// layouts/Layout.js
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;