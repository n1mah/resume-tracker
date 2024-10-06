<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OfferResource extends JsonResource
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
            'user'=>$this->user,
            'company'=>$this->company,
            'city'=>$this->city,
            'title'=>$this->title,
            'position'=>$this->position,
            'employment_type'=>$this->employment_type,
            'location'=>$this->location,
            'description'=>$this->description,
            'salary_min'=>$this->salary_min,
            'salary_max'=>$this->salary_max,
            'salary_text'=>$this->salary_text,
            'benefits'=>$this->benefits,
            'document_url'=>$this->document_url,
            'application_url'=>$this->application_url,
            'is_visa_needed'=>$this->is_visa_needed,
            'is_authorized'=>$this->reference,
            'is_living'=>$this->reference,
            'reference'=>$this->reference,
            'added_at'=>$this->added_at,
            'is_active'=>$this->is_active,
            'created_at'=>(new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'=>(new Carbon($this->created_at))->format('Y-m-d'),
        ];
    }
}
