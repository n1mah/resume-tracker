<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CompanyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'name'=>$this->name,
            'website'=>$this->website,
            'description'=>$this->description,
            'city'=>$this->city,
            'number'=>$this->number,
            'application_source'=>$this->application_source,
            'discovery_source'=>$this->discovery_source,
            'is_active'=>$this->discovery_source,
            'created_at'=>(new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'=>(new Carbon($this->created_at))->format('Y-m-d'),
        ];
    }
}
