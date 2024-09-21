import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head } from '@inertiajs/react';

function Index() {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Country</h2>}
        >
            <Head title="Country" />

            <div className="py-12">

            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
