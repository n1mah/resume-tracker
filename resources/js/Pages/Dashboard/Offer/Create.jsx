import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import { Head , Link , useForm } from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SelectInput from "@/Components/SelectInput.jsx";
import SelectMultipleInput from "@/Components/SelectMultipleInput.jsx";

function Create({subject,skills,companies,cities}) {
    const { data, setData, post, errors } = useForm({
        skill_id: '',
        level: '',
        years_of_experience: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('offer.store'));
    };
    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"><Link href={route('offer.index')}>{subject}</Link> {'->'} create</h2>}
        >
            <Head title={subject+' Create'} />
            <div className="w-9/12 mx-auto py-12">
                <div className={'w-full my-4 px-1'}>
                    <Link href={route('offer.index')} className={'px-5 py-2 bg-gray-800 text-white rounded-2xl'}> {'<'} {subject}s</Link>
                </div>

                <form onSubmit={submit} method={'post'}
                      className="w-8/12 mx-auto rounded-2xl flex flex-col justify-start items-center bg-white my-3 p-6">
                    <h3 className={'w-full font-bold text-xl text-center mx-auto mb-6'}>Create {subject}</h3>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="skill_id" value="Skill"/>
                        <SelectMultipleInput
                            className="mt-1 block w-full"
                            id="skill_id"
                            name="skill_id"
                            onChange={(e) => setData('skill_id', e.target.value)}
                            required
                        >
                            <option>Select Skill</option>
                            {skills?.data && skills.data.map((skill) => (
                                <option key={skill.id} value={skill.id}>{skill.title}</option>
                            ))}
                        </SelectMultipleInput>

                        <InputError message={errors.skill_id} className="mt-2"/>
                    </div>
                    <div className={'w-11/12 my-3'}>
                        <InputLabel htmlFor="company_id" value="Company"/>
                        <SelectInput
                            id="company_id"
                            name="company_id"
                            value={data.company_id}
                            className="mt-1 block w-full"
                            defaultValue={null}
                            onChange={(e) => setData('company_id', e.target.value)}
                            required
                        >
                            <option>Select Skill</option>
                            {companies?.data && companies.data.map((company) => (
                                <option key={company.id} value={company.id}>{company.name}</option>
                            ))}
                        </SelectInput>

                        <InputError message={errors.company_id} className="mt-2"/>
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
                        <InputLabel htmlFor="years_of_experience" value="Years of Experience"/>
                        <TextInput
                            id="years_of_experience"
                            name="years_of_experience"
                            value={data.years_of_experience}
                            type={'number'}
                            className="mt-1 block w-full"
                            autoComplete="years_of_experience"
                            onChange={(e) => setData('years_of_experience', e.target.value)}
                            required
                        />
                        <InputError message={errors.years_of_experience} className="mt-2"/>
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
