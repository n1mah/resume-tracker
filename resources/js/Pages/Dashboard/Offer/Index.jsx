import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link } from '@inertiajs/react';

function Index({offers,message,subject}) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{subject}</h2>}
        >
            <Head title={subject} />

            {message &&
                (<div className="w-9/12 mx-auto flex justify-between items-center my-5 py-2 px-5 text-center bg-gray-800 text-white rounded-2xl">
                    <span>!</span> {message} <span>!</span>
                </div>)
            }
            <div className="w-9/12 mx-auto py-12">

                <div className={'w-full my-4 px-1'}>
                    <Link href={route('offer.create')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}>Add {subject}</Link>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead
                            className="text-xs text-white font-bold uppercase bg-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-5">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Company
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                central office
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                salary
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                salary Between
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Url
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Added Date
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {offers?.data && offers.data.map((offer) => (
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {offer.title}
                                </th>
                                <td className="px-6 py-4">
                                    {offer.position}
                                </td>
                                <td className="px-6 py-4">
                                    {offer.company.name}
                                </td>
                                <td className="px-6 py-4">
                                    {offer.employment_type}
                                </td>
                                <td className="px-6 py-4">
                                    {offer.city.name}
                                </td>
                                <td className="px-6 py-4">
                                    {offer.salary_text}
                                </td>
                                <td className="px-6 py-4">
                                    {offer.salary_min} - {offer.salary_max}
                                </td>
                                <td className="px-6 py-4">
                                    {offer.document_url}
                                </td>
                                <td className="px-6 py-4">
                                    {offer.added_at}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Link href={route('offer.edit', offer.id)}
                                          className="font-medium text-blue-600  hover:underline mx-2">Edit</Link>
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
