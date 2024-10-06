import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link , useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import TextAreaInput from "@/Components/TextAreaInput.jsx";

function Create({subject}) {
    const { data, setData, post, errors } = useForm({
        title: '',
        type: '',
        description: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('skill.store'));
    };
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('skill.index')}>{subject}</Link> {'->'} create</h2>}
        >
            <Head title={subject+' Create'} />
            <div className="w-9/12 mx-auto py-12">
                <div className={'w-full my-4 px-1'}>
                    <Link href={route('skill.index')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}> {'<'} {subject}s</Link>
                </div>

                <form onSubmit={submit} method={'post'}
                      className="w-8/12 mx-auto rounded-2xl flex flex-col justify-start items-center bg-white my-3 p-6">
                    <h3 className={'w-full font-bold text-xl text-center mx-auto mb-6'}>Create {subject}</h3>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="title" value="Title"/>

                        <TextInput
                            id="title"
                            name="title"
                            value={data.title}
                            className="mt-1 block w-full"
                            autoComplete="title"
                            isFocused={true}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                        />
                        <InputError message={errors.name} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="type" value="Type"/>

                        <SelectInput
                            id="type"
                            name="type"
                            value={data.type}
                            className="mt-1 block w-full"
                            autoComplete="type"
                            defaultValue={null}
                            // defaultValue={countries.data[0].id}
                            onChange={(e) => setData('type', e.target.value)}
                            required
                        >
                            <option>Select Type</option>
                            <option value={1}>Specialized</option>
                            <option value={2}>Hard Skill</option>
                            <option value={3}>Soft Skill</option>
                            <option value={4}>Dev Ops</option>
                        </SelectInput>
                        <InputError message={errors.type} className="mt-2"/>
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
