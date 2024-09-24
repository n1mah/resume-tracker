import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link , useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import TextAreaInput from "@/Components/TextAreaInput.jsx";

function Create({cities}) {
    const { data, setData, post, errors } = useForm({
        name: '',
        website: '',
        number: '',
        application_source: '',
        discovery_source: '',
        description: '',
        center_office_city_id: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('company.store'));
    };


    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('company.index')}>Company</Link> -> create</h2>}
        >
            <Head title="Company" />
            <div className="w-9/12 mx-auto py-12">
                <div className={'w-full my-4 px-1'}>
                    <Link href={route('company.index')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}> {'<'} Company</Link>
                </div>

                <form onSubmit={submit} method={'post'}
                      className="w-8/12 mx-auto rounded-2xl flex flex-col justify-start items-center bg-white my-3 p-6">
                    <h3 className={'w-full font-bold text-xl text-center mx-auto mb-6'}>Create Company</h3>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="name" value="Name"/>

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="website" value="Website"/>
                        <TextInput
                            id="website"
                            name="website"
                            type={'text'}
                            value={data.website}
                            className="mt-1 block w-full"
                            autoComplete="website"
                            isFocused={true}
                            onChange={(e) => setData('website', e.target.value)}
                            required
                        />
                        <InputError message={errors.website} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="number" value="Number"/>
                        <TextInput
                            id="number"
                            name="number"
                            type={'text'}
                            value={data.number}
                            className="mt-1 block w-full"
                            autoComplete="number"
                            isFocused={true}
                            onChange={(e) => setData('number', e.target.value)}
                            required
                        />
                        <InputError message={errors.number} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="application_source" value="Application"/>
                        <TextInput
                            id="application_source"
                            name="application_source"
                            type={'text'}
                            value={data.application_source}
                            className="mt-1 block w-full"
                            autoComplete="application_source"
                            isFocused={true}
                            onChange={(e) => setData('application_source', e.target.value)}
                            required
                        />
                        <InputError message={errors.application_source} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="discovery_source" value="Discovery"/>
                        <TextInput
                            id="discovery_source"
                            name="discovery_source"
                            type={'text'}
                            value={data.discovery_source}
                            className="mt-1 block w-full"
                            autoComplete="discovery_source"
                            isFocused={true}
                            onChange={(e) => setData('discovery_source', e.target.value)}
                            required
                        />
                        <InputError message={errors.discovery_source} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="center_office_city_id" value="Office"/>
                        <SelectInput
                            id="center_office_city_id"
                            name="center_office_city_id"
                            value={data.center_office_city_id}
                            className="mt-1 block w-full"
                            autoComplete="center_office_city_id"
                            defaultValue={null}
                            // defaultValue={companies.data[0].id}
                            onChange={(e) => setData('center_office_city_id', e.target.value)}
                            required
                        >
                            <option>Select City</option>
                            {cities && cities.data && cities.data.map((city) => (
                                <option key={city.id} value={city.id}>{city.name}</option>
                            ))}
                        </SelectInput>
                        <InputError message={errors.center_office_city_id} className="mt-2"/>
                    </div>

                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="description" value="Description"/>
                        <TextAreaInput
                            id="description"
                            name="description"
                            type={'text'}
                            value={data.description}
                            className="mt-1 block w-full"
                            autoComplete="description"
                            isFocused={true}
                            onChange={(e) => setData('description', e.target.value)}
                        ></TextAreaInput>
                        <InputError message={errors.description} className="mt-2"/>
                    </div>
                    <PrimaryButton className="w-11/12 mx-auto text-center flex justify-center items-center my-3 py-3">
                        Create
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

export default Create;
