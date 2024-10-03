<?php

namespace App\Http\Controllers;

use App\Http\Requests\Skill\StoreSkillRequest;
use App\Http\Requests\Skill\UpdateSkillRequest;
use App\Http\Resources\SkillResource;
use App\Models\Skill;
use Inertia\Inertia;

class SkillController extends Controller
{

    public function index()
    {
        $title='Skill';
        $skills = Skill::where('is_active',1)->paginate(10)->onEachSide(2);
        return Inertia::render('Dashboard/Skill/Index',[
            'skills'=>SkillResource::collection($skills),
            'message'=>session('message'),
            'subject'=>$title
        ]);
    }

    public function create()
    {
        $title='Skill';
        return Inertia::render('Dashboard/Skill/Create',[
            'subject'=>$title
        ]);
    }

    public function store(StoreSkillRequest $request)
    {
        Skill::create($request->validated());
        return to_route('skill.index')->with(['message' => "Skill $request->name added successfully."]);
    }

    public function edit(Skill $skill)
    {
        $title='Skill';
        return Inertia::render('Dashboard/Skill/Edit',[
            'subject'=>$title,
            'skill'=>new SkillResource($skill),
        ]);
    }

    public function update(UpdateSkillRequest $request, Skill $skill)
    {
        //
    }

}
