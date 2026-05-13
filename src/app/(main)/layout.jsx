import BreakingNewsPage from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <BreakingNewsPage />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
