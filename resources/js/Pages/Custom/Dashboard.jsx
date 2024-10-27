import MainLayout from "@/Layouts/MainLayout";

const Dashboard = () => {
    return (
        <MainLayout>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="min-h-[150px] rounded-xl bg-muted/90" />
                    <div className="min-h-[150px] rounded-xl bg-muted/90" />
                    <div className="min-h-[150px] rounded-xl bg-muted/90" />
                </div>
                <div className="min-h-[600px] flex-1 rounded-xl bg-muted/85"></div>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
