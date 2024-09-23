import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link , useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import {useEffect} from "react";

function Create({countries}) {
    const { data, setData, post, errors } = useForm({
        name: '',
        country_id: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('city.store'));
    };
/*    useEffect(() => {
        if (countries.data)
            setData('country_id', countries.data[0].id);
    }, countries);*/

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('city.index')}>City</Link> -> create</h2>}
        >
            <Head title="City" />
            <div className="w-9/12 mx-auto py-12">
                <div className={'w-full my-4 px-1'}>
                    <Link href={route('city.index')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}> {'<'} Cities</Link>
                </div>

                <form onSubmit={submit} method={'post'} className="w-8/12 mx-auto rounded-2xl flex flex-col justify-start items-center bg-white my-3 p-6">
                    <h3 className={'w-full font-bold text-xl text-center mx-auto mb-6'}>Create City</h3>
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
                        <InputLabel htmlFor="country_id" value="country_id"/>

                        <SelectInput
                            id="country_id"
                            name="country_id"
                            value={data.country_id}
                            className="mt-1 block w-full"
                            autoComplete="country_id"
                            defaultValue={null}
                            // defaultValue={countries.data[0].id}
                            onChange={(e) => setData('country_id', e.target.value)}
                            required
                        >
                            <option>Select Country</option>
                            {countries && countries.data.map((country) => (
                                <option key={country.id} value={country.id}>{country.name}</option>
                            ))}
                        </SelectInput>
                        <InputError message={errors.country_id} className="mt-2"/>
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
