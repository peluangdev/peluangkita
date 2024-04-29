import HeaderDesktop from '@/components/Header';
import CategoryMenu from '@/components/CategoryMenu';
import Footer from '@/components/Footer';

export default function MainLayout({children}) {
    return (
        <>
        <HeaderDesktop/>
        <CategoryMenu/>
        <main>{children}</main>
        <Footer/>
        </>
    )
}