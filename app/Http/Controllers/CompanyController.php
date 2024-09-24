<?php

namespace App\Http\Controllers;

use App\Http\Requests\Company\StoreCompanyRequest;
use App\Http\Requests\Company\UpdateCompanyRequest;
use App\Http\Resources\CompanyResource;
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
        //
    }

    public function store(StoreCompanyRequest $request)
    {
        //
    }

    public function show(Company $company)
    {
        //
    }

    public function edit(Company $company)
    {
        //
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
