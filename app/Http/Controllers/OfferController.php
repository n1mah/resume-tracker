<?php

namespace App\Http\Controllers;

use App\Http\Requests\Offer\StoreOfferRequest;
use App\Http\Requests\Offer\UpdateOfferRequest;
use App\Http\Resources\CompanyResource;
use App\Http\Resources\OfferResource;
use App\Http\Resources\SkillResource;
use App\Models\City;
use App\Models\Company;
use App\Models\Offer;
use App\Models\Skill;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OfferController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $title='Offer';
        $offers = Offer::where('is_active',1)->where('user_id',Auth::id())->paginate(10)->onEachSide(2);
        return Inertia::render('Dashboard/Offer/Index',[
            'offers'=>OfferResource::collection($offers),
            'message'=>session('message'),
            'subject'=>$title
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $title='Offer';
        $companies=Company::all();
        $cities=City::all();
        $skills=Skill::all();
        return Inertia::render('Dashboard/Offer/Create',[
            'subject'=>$title,
            'skills'=> SkillResource::collection($skills),
            'companies'=> CompanyResource::collection($companies),
            'cities'=> CompanyResource::collection($cities),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreOfferRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Offer $offer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Offer $offer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOfferRequest $request, Offer $offer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offer $offer)
    {
        //
    }
}
