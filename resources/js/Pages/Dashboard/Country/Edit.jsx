import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link , useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from "@/Components/PrimaryButton.jsx";

function Edit({country}) {
    const { data, setData, put, errors } = useForm({
        id:country.data.id || '',
        name:country.data.name || '',
        continent:country.data.continent || '',
        language:country.data.language || '',
        _method:'PUT'
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('country.update',country.data.id));
    };
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('country.index')}>Country</Link> {'->'} edit</h2>}
        >
            <Head title="Country" />
            <div className="w-9/12 mx-auto py-12">
                <div className={'w-full my-4 px-1'}>
                    <Link href={route('country.index')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}> {'<'} Countries</Link>
                </div>

                <form onSubmit={submit} className="w-8/12 mx-auto rounded-2xl flex flex-col justify-start items-center bg-white my-3 p-6">
                    <h3 className={'w-full flex justify-center items-center font-bold text-xl text-center mx-auto mb-6'}>Edit Country - <span className={'inline-flex py-1.5 px-3 bg-gray-800/60 text-white ml-2 rounded'}> #{data.id} {data.name}</span></h3>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="name" value="Name" />

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
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="continent" value="Continent" />

                        <TextInput
                            id="continent"
                            name="continent"
                            value={data.continent}
                            className="mt-1 block w-full"
                            autoComplete="continent"
                            onChange={(e) => setData('continent', e.target.value)}
                        />
                        <InputError message={errors.continent} className="mt-2" />
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="language" value="Language" />

                        <TextInput
                            id="language"
                            name="language"
                            value={data.language}
                            className="mt-1 block w-full"
                            autoComplete="language"
                            onChange={(e) => setData('language', e.target.value)}
                        />
                        <InputError message={errors.language} className="mt-2" />
                    </div>
                    <PrimaryButton className="w-11/12 mx-auto text-center flex justify-center items-center my-3 py-3">
                        Edit
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

export default Edit;
