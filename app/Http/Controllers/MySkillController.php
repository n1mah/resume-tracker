<?php

namespace App\Http\Controllers;

use App\Http\Requests\MySkill\StoreMySkillRequest;
use App\Http\Requests\MySkill\UpdateMySkillRequest;
use App\Http\Resources\MySkillResource;
use App\Models\MySkill;
use Inertia\Inertia;

class MySkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMySkillRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(MySkill $mySkill)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MySkill $mySkill)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateMySkillRequest $request, MySkill $mySkill)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MySkill $mySkill)
    {
        //
    }
}
