// layouts/Layout.js
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;