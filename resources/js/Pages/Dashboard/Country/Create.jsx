import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link , useForm} from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from "@/Components/PrimaryButton.jsx";

function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        continent: '',
        language: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('country.store'), {
            onFinish: () => {}
        });
    };
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('country.index')}>Country</Link> -> create</h2>}
        >
            <Head title="Country" />
            <div className="w-9/12 mx-auto py-12">
                <div className={'w-full my-4 px-1'}>
                    <Link href={route('country.index')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}> {'<'} Countries</Link>
                </div>

                <form onSubmit={submit} className="w-full flex flex-col justify-start items-center  p-6">
                    <h3 className={'w-full font-bold text-xl text-center mx-auto mb-6'}>Create Country</h3>
                    <div className={'w-8/12 my-3'}>
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
                    <div className={'w-8/12 my-3'}>
                        <InputLabel htmlFor="continent" value="Continent" />

                        <TextInput
                            id="continent"
                            name="continent"
                            value={data.continent}
                            className="mt-1 block w-full"
                            autoComplete="continent"
                            isFocused={true}
                            onChange={(e) => setData('continent', e.target.value)}
                            required
                        />
                        <InputError message={errors.continent} className="mt-2" />
                    </div>
                    <div className={'w-8/12 my-3'}>
                        <InputLabel htmlFor="language" value="Language" />

                        <TextInput
                            id="language"
                            name="language"
                            value={data.language}
                            className="mt-1 block w-full"
                            autoComplete="language"
                            isFocused={true}
                            onChange={(e) => setData('language', e.target.value)}
                            required
                        />
                        <InputError message={errors.language} className="mt-2" />
                    </div>
                    <PrimaryButton className="w-8/12 mx-auto text-center flex justify-center items-center my-3 py-3" disabled={processing}>
                        Create
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

export default Create;
