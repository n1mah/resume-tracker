<?php

namespace App\Http\Requests\MySkill;

use Illuminate\Foundation\Http\FormRequest;

class StoreMySkillRequest extends FormRequest
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
            'skill_id' => 'required|exists:skills,id|unique:skill_user,skill_id',
            'level' => 'required|integer|between:1,10',
            'years_of_experience'=>'nullable|integer|between:1,50',
        ];
    }
}
