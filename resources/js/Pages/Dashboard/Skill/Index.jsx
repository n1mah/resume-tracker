import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link } from '@inertiajs/react';
import Pagination from "@/Components/Pagination.jsx";

function Index({skills,message,title}) {
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
        >
            <Head title={title} />

            {message &&
                (<div className="w-9/12 mx-auto flex justify-between items-center my-5 py-2 px-5 text-center bg-gray-800 text-white rounded-2xl">
                   <span>!</span> {message} <span>!</span>
                </div>)
            }
            <div className="w-9/12 mx-auto py-12">

                <div className={'w-full my-4 px-1'}>
                    <Link href={route('skill.create')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}>Add {title}</Link>
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
                                Type
                            </th>
                            <th scope="col" className="px-6 py-5">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-5 text-center">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {skills?.data && skills.data.map((skill) => (
                            <tr className="bg-white border-b  hover:bg-gray-50 ">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                    {skill.title}
                                </th>
                                <td className="px-6 py-4">
                                    {skill.type}
                                </td>
                                <td className="px-6 py-4">
                                    {skill.description}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <Link href={route('skill.edit', skill.id)}
                                          className="font-medium text-blue-600  hover:underline mx-2">Edit</Link>
                                    {/* |
                                    <Link href={route('skill.destroy', skill.id)}*/}
                                    {/*      className="font-medium text-blue-600  hover:underline mx-2">De active</Link>*/}
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
