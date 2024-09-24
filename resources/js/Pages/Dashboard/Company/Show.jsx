import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link , useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import TextAreaInput from "@/Components/TextAreaInput.jsx";

function Show({company}) {
    const { data } = useForm({
        id:company.data.id || '',
        name:company.data.name || '',
        center_office_city_id:company.data.city.id || null,
        website: company.data.website || '',
        number:company.data.number || '',
        application_source:company.data.application_source || '',
        discovery_source: company.data.discovery_source || '',
        description: company.data.description || '',
    });


    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('company.index')}>Company</Link> -> show</h2>}
        >
            <Head title="Company" />
            <div className="w-9/12 mx-auto py-12">
                <div className={'w-full my-4 px-1'}>
                    <Link href={route('company.index')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}> {'<'} Cities</Link>
                </div>

                <div
                      className="w-8/12 mx-auto rounded-2xl flex flex-col justify-start items-center bg-white my-3 p-6">
                    <h3 className={'w-full flex justify-center items-center font-bold text-xl text-center mx-auto mb-6'}>Show
                        Company - <span
                            className={'inline-flex py-1.5 px-3 bg-gray-800/60 text-white ml-2 rounded'}> #{data.id} {data.name}</span>
                    </h3>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="name" value="Name"/>
                        <TextInput
                            disabled
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            required
                        />
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="website" value="Website"/>
                        <TextInput
                            disabled
                            id="website"
                            name="website"
                            type={'text'}
                            value={data.website}
                            className="mt-1 block w-full"
                            autoComplete="website"
                            required
                        />
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="number" value="Number"/>
                        <TextInput
                            disabled
                            id="number"
                            name="number"
                            type={'text'}
                            value={data.number}
                            className="mt-1 block w-full"
                            autoComplete="number"
                            required
                        />
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="application_source" value="Application"/>
                        <TextInput
                            disabled
                            id="application_source"
                            name="application_source"
                            type={'text'}
                            value={data.application_source}
                            className="mt-1 block w-full"
                            autoComplete="application_source"
                            required
                        />
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="discovery_source" value="Discovery"/>
                        <TextInput
                            disabled
                            id="discovery_source"
                            name="discovery_source"
                            type={'text'}
                            value={data.discovery_source}
                            className="mt-1 block w-full"
                            autoComplete="discovery_source"
                            required
                        />
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="center_office_city_id" value="center_office_city_id"/>
                        <SelectInput
                            disabled
                            id="center_office_city_id"
                            name="center_office_city_id"
                            value={company.data.city.id}
                            className="mt-1 block w-full"
                            autoComplete="center_office_city_id"
                            defaultValue={company.data.city.id}
                        >
                            <option>Select Country</option>
                                <option key={company.data.city.id} value={company.data.city.name}>{company.data.city.name}</option>
                        </SelectInput>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="description" value="Description"/>
                        <TextAreaInput
                            disabled
                            id="description"
                            name="description"
                            type={'text'}
                            value={data.description}
                            className="mt-1 block w-full"
                            autoComplete="description"
                        ></TextAreaInput>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Show;
