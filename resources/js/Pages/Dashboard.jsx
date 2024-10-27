import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";

export default function Dashboard() {
    const user = usePage().props.auth.user;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                {!user.email_verified_at && (
                    <div className="mx-auto max-w-full sm:px-6 lg:px-8">
                        <div
                            className="overflow-hidden bg-white shadow-sm sm:rounded-lg
                         my-2"
                        >
                            <div className="p-6 text-red-600 font-bold">
                                Please verify your email!
                            </div>
                        </div>
                    </div>
                )}
                <div className="mx-auto max-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 font-bold">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
