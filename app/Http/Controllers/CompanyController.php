<?php

namespace App\Http\Controllers;

use App\Http\Requests\Company\StoreCompanyRequest;
use App\Http\Requests\Company\UpdateCompanyRequest;
use App\Http\Resources\CityResource;
use App\Http\Resources\CompanyResource;
use App\Models\City;
use App\Models\Company;
use Inertia\Inertia;

class CompanyController extends Controller
{

    public function index()
    {
        $companies = Company::where('is_active',1)->paginate(10)->onEachSide(2);
        return Inertia::render('Dashboard/Company/Index',[
            'companies'=>CompanyResource::collection($companies),
            'message'=>session('message')
        ]);
    }

    public function create()
    {
        $cities = City::all();
        return Inertia::render('Dashboard/Company/Create', [
            'cities'=>CityResource::collection($cities),
        ]);
    }

    public function store(StoreCompanyRequest $request)
    {
        Company::create($request->validated());
        return to_route('company.index')->with(['message' => "Company $request->name added successfully."]);
    }

    public function show(Company $company)
    {

    }

    public function edit(Company $company)
    {
        $cities = City::all();
        return Inertia::render('Dashboard/Company/Edit',[
            'company'=>new CompanyResource($company),
            'cities'=>CityResource::collection($cities),
        ]);
    }

    public function update(UpdateCompanyRequest $request, Company $company)
    {
        //
    }

    public function destroy(Company $company)
    {
        //
    }
}
