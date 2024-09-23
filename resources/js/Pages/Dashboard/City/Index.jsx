import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link } from '@inertiajs/react';
import Pagination from "@/Components/Pagination.jsx";

function Index({cities,message}) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">City</h2>}
        >
            <Head title="City" />

            {message &&
                (<div className="w-9/12 mx-auto flex justify-between items-center my-5 py-2 px-5 text-center bg-gray-800 text-white rounded-2xl">
                   <span>!</span> {message} <span>!</span>
                </div>)
            }
            <div className="w-9/12 mx-auto py-12">

                <div className={'w-full my-4 px-1'}>
                    <Link href={route('city.create')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}>Add City</Link>
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
                                Country
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {cities.data && cities.data.map((city) => (
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {city.name}
                                </th>
                                <td className="px-6 py-4">
                                    {city.country.name}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Link href={route('city.edit',  city.id)}
                                       className="font-medium text-blue-600  hover:underline">Edit</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {cities && cities.meta && cities.meta.links.length>3 && cities.meta.links?
                        <Pagination links={cities.meta.links} />
                        :''}

                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Index;
