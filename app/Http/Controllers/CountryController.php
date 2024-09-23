<?php

namespace App\Http\Controllers;

use App\Http\Requests\Country\StoreCountryRequest;
use App\Http\Requests\Country\UpdateCountryRequest;
use App\Http\Resources\CountryResource;
use App\Models\Country;
use Inertia\Inertia;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::paginate(10)->onEachSide(2);
        return Inertia::render('Dashboard/Country/Index',[
            'countries'=>CountryResource::collection($countries),
            'message'=>session('message')
        ]);
    }

    public function create()
    {
        return Inertia::render('Dashboard/Country/Create');
    }

    public function store(StoreCountryRequest $request)
    {
        Country::create($request->validated());
        return to_route('country.index')->with(['message' => "Country $request->name added successfully."]);
    }

    public function edit(Country $country)
    {
        return Inertia::render('Dashboard/Country/Edit',[
            'country'=>new CountryResource($country)
            ]);
    }

    public function update(UpdateCountryRequest $request, Country $country)
    {
        $country->update($request->validated());
        return to_route('country.index')->with(['message' => "Country $country->name updated successfully."]);
    }

}
