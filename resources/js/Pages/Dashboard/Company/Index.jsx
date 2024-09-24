import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link } from '@inertiajs/react';
import Pagination from "@/Components/Pagination.jsx";

function Index({companies,message}) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company</h2>}
        >
            <Head title="Company" />

            {message &&
                (<div className="w-9/12 mx-auto flex justify-between items-center my-5 py-2 px-5 text-center bg-gray-800 text-white rounded-2xl">
                   <span>!</span> {message} <span>!</span>
                </div>)
            }
            <div className="w-9/12 mx-auto py-12">

                <div className={'w-full my-4 px-1'}>
                    <Link href={route('company.create')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}>Add Company</Link>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead
                            className="text-xs text-white font-bold uppercase bg-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Office
                            </th>
                            <th scope="col" className="px-6 py-5">
                                discovery
                            </th>
                            <th scope="col" className="px-6 py-5">
                                number
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {companies.data && companies.data.map((company) => (
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {company.name}
                                </th>

                                <td className="px-6 py-4">
                                    {company.city.name}
                                </td>
                                <td className="px-6 py-4">
                                    {company.discovery_source}
                                </td>
                                <td className="px-6 py-4">
                                    {company.number}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Link href={route('company.show',  company.id)}
                                       className="font-medium text-blue-600  hover:underline mx-2">Show Details</Link>|
                                    <Link href={route('company.edit',  company.id)}
                                       className="font-medium text-blue-600  hover:underline mx-2">Edit</Link> |
                                    <Link href={route('company.destroy',  company.id)}
                                       className="font-medium text-blue-600  hover:underline mx-2">Delete</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {companies && companies.meta && companies.meta.links.length>3 && companies.meta.links?
                        <Pagination links={companies.meta.links} />
                        :''}

                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
