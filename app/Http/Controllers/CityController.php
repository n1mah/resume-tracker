<?php

namespace App\Http\Controllers;

use App\Http\Requests\City\StoreCityRequest;
use App\Http\Requests\City\UpdateCityRequest;
use App\Http\Resources\CityResource;
use App\Http\Resources\CountryResource;
use App\Models\City;
use App\Models\Country;
use Inertia\Inertia;

class CityController extends Controller
{

    public function index()
    {
        $cities = City::paginate(10)->onEachSide(2);
        return Inertia::render('Dashboard/City/Index',[
            'cities'=>CityResource::collection($cities),
            'message'=>session('message')
        ]);
    }

    public function create()
    {
        $countries = Country::all();
        return Inertia::render('Dashboard/City/Create', [
            'countries'=>CountryResource::collection($countries),
        ]);

    }

    public function store(StoreCityRequest $request)
    {
        City::create($request->validated());
        return to_route('city.index')->with(['message' => "City $request->name added successfully."]);
    }

    public function edit(City $city)
    {
        $countries = Country::all();
        return Inertia::render('Dashboard/City/Edit',[
            'city'=>new CityResource($city),
            'countries'=>CountryResource::collection($countries),
        ]);
    }

    public function update(UpdateCityRequest $request, City $city)
    {
        $city->update($request->validated());
        return to_route('city.index')->with(['message' => "City $city->name updated successfully."]);
    }

}
