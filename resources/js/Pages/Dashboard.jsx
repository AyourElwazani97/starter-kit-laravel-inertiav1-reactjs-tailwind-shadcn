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
                {/* grid-cols-1  */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4 rounded-xl bg-muted/85 p-4">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 min-h-[350px]">
                    </div>
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 min-h-[350px]">
                    </div>
                    <div className="w-full lg:col-span-6 sm:col-span-2">
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Dashboard;
