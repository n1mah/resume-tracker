<?php

namespace App\Http\Controllers;

use App\Http\Requests\MySkill\StoreMySkillRequest;
use App\Http\Requests\MySkill\UpdateMySkillRequest;
use App\Models\MySkill;
use Inertia\Inertia;

class MySkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $my_skills = MySkill::where('is_active',1)->paginate(10)->onEachSide(2);
        return Inertia::render('Dashboard/Company/Index',[
            'companies'=>CompanyResource::collection($companies),
            'message'=>session('message')
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
