import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head } from '@inertiajs/react';

function Index({countries}) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Country</h2>}
        >
            <Head title="Country" />

            <div className="w-10/12 mx-auto py-12">

                <div className={'w-full my-4 px-1'}>
                    <button className={'px-3 py-1.5 bg-gray-800 text-white rounded-2xl'}>Add Country</button>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Continent
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Language
                            </th>
                            <th scope="col" className="px-6 py-5">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {countries.data && countries.data.map((country) => (
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {country.name}
                                </th>
                                <td className="px-6 py-4">
                                    {country.continent}
                                </td>
                                <td className="px-6 py-4">
                                    {country.language}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#"
                                       className="font-medium text-blue-600  hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
