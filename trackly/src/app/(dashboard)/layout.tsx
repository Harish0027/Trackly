import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import CreateWorkspaceModal from "@/features/workspaces/components/create-workspace-modal";

interface childProps {
  children: React.ReactNode;
}

const dashboardLayout = ({ children }: childProps) => {
  return (
    <div className="min-h-screen">
      <CreateWorkspaceModal />
      <div className="flex w-full h-full">
        <div className="fixed left-0 top-0 hidden lg:block lg:w-[264px] h-full overflow-y-auto">
          <Sidebar />
        </div>
        <div className="lg:pl-[264px] w-full">
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar/>
            <main className="m-4">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboardLayout;
