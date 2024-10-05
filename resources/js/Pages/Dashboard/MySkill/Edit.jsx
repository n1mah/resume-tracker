import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link , useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import TextAreaInput from "@/Components/TextAreaInput.jsx";

function Edit({my_skill,subject,skills}) {
    const { data, setData, put, errors } = useForm({
        id: my_skill.data.id || '',
        skill_id: my_skill.data.skill_id || '',
        level: my_skill.data.level || '',
        experience: my_skill.data.experience || '',
        _method:'PUT'
    });

    const submit = (e) => {
        e.preventDefault();
        put(route('my-skill.update',skill.data.id));
    };
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('my-skill.index')}>{subject}</Link> -> edit</h2>}
        >
            <Head title={subject+' Edit'} />
            <div className="w-9/12 mx-auto py-12">
                <div className={'w-full my-4 px-1'}>
                    <Link href={route('my-skill.index')}
                          className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}> {'<'} {subject}s</Link>
                </div>
                <form onSubmit={submit} method={'post'}
                      className="w-8/12 mx-auto rounded-2xl flex flex-col justify-start items-center bg-white my-3 p-6">
                    <h3 className={'w-full font-bold text-xl text-center mx-auto mb-6'}>Edit {subject}</h3>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="skill_id" value="Skill"/>
                        <SelectInput
                            id="skill_id"
                            name="skill_id"
                            value={data.skill_id}
                            className="mt-1 block w-full"
                            onChange={(e) => setData('skill_id', e.target.value)}
                            required
                        >
                            <option>Select Skill</option>
                            {skills?.data && skills.data.map((skill) => (
                                <option key={skill.id} value={skill.id}>{skill.title}</option>
                            ))}
                        </SelectInput>

                        <InputError message={errors.skill_id} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="level" value="Level (1-10)"/>
                        <TextInput
                            id="level"
                            name="level"
                            value={data.level}
                            type={'number'}
                            className="mt-1 block w-full"
                            autoComplete="level"
                            onChange={(e) => setData('level', e.target.value)}
                            required
                        />
                        <InputError message={errors.level} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="experience" value="Years of Experience"/>
                        <TextInput
                            id="experience"
                            name="experience"
                            value={data.experience}
                            type={'number'}
                            className="mt-1 block w-full"
                            autoComplete="experience"
                            onChange={(e) => setData('experience', e.target.value)}
                            required
                        />
                        <InputError message={errors.experience} className="mt-2"/>
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
