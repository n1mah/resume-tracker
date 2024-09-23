<?php

namespace App\Http\Requests\City;

use Illuminate\Foundation\Http\FormRequest;

class StoreCityRequest extends FormRequest
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
            'name' => 'required|string|min:3|unique:cities,name',
            'country_id' => 'required|exists:countries,id',
        ];
    }
    public function messages(): array{
        return [
            'country_id.required' => 'Country name is required.',
            'country_id.exists' => 'Country name does not exist.',
        ];
    }
}
