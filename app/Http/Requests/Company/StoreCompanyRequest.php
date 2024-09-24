<?php

namespace App\Http\Requests\Company;

use Illuminate\Foundation\Http\FormRequest;

class StoreCompanyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3',
            'website' => 'required|string',
            'description' => 'nullable|string',
            'center_office_city_id' => 'required|exists:cities,id',
            'number' => 'required|string',
            'application_source' => 'nullable|string',
            'discovery_source' => 'nullable|string',
        ];
    }
    public function messages(): array{
        return [
            'center_office_city_id.required' => 'Office is required.',
            'center_office_city_id.exists' => 'Office does not exist.',
        ];
    }

}
