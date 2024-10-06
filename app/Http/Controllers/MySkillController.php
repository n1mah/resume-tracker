<?php

namespace App\Http\Controllers;

use App\Http\Requests\MySkill\StoreMySkillRequest;
use App\Http\Requests\MySkill\UpdateMySkillRequest;
use App\Http\Resources\MySkillResource;
use App\Http\Resources\SkillResource;
use App\Models\MySkill;
use App\Models\Skill;
use Inertia\Inertia;

class MySkillController extends Controller
{

    public function index()
    {
        $title='My Skill';
        $user=auth()->user();
        $my_skills = MySkill::where('is_active',1)->where('user_id',$user->id)->paginate(10)->onEachSide(2);
        return Inertia::render('Dashboard/MySkill/Index',[
            'my_skills'=>MySkillResource::collection($my_skills),
            'message'=>session('message'),
            'subject'=>$title

        ]);
    }

    public function create()
    {
        $title='My Skill';
        $skills=Skill::all();
        return Inertia::render('Dashboard/MySkill/Create',[
            'subject'=>$title,
            'skills'=> SkillResource::collection($skills),
        ]);
    }


    public function store(StoreMySkillRequest $request)
    {
        MySkill::create([
            'user_id'=>auth()->id(),
            ...$request->validated(),
        ]);
        return to_route('my-skill.index')->with(['message' => "My Skill $request->name added successfully."]);
    }


    public function edit(MySkill $mySkill)
    {
        $title='My Skill';
        $skills=Skill::all();
        return Inertia::render('Dashboard/MySkill/Edit',[
            'subject'=>$title,
            'my_skill'=>new MySkillResource($mySkill),
            'skills'=> SkillResource::collection($skills),
        ]);
    }

    public function update(UpdateMySkillRequest $request, MySkill $mySkill)
    {
        $mySkill->update($request->validated());
        return to_route('my-skill.index')->with(['message' => "My Skill $mySkill->title updated successfully."]);

    }

    public function destroy(MySkill $mySkill)
    {
        //
    }
}
