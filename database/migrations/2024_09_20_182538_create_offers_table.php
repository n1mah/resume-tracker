<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('company_id')->constrained('companies');
            $table->foreignId('city_id')->constrained('cities');
            $table->string('title');
            $table->string('position');
            $table->string('location')->nullable();
            $table->string('salary_text')->nullable();
            $table->decimal('salary_min',12,1)->nullable();
            $table->decimal('salary_max',12,1)->nullable();
            $table->longText('description')->nullable();
            $table->integer('employment_type')->default(1); //1=>unknown - 2=>on-site - 3=>remote - 4=>hybrid - - ...
            $table->text('benefits')->nullable();
            $table->string('document_url')->nullable();
            $table->string('application_url')->nullable();
            $table->boolean('is_visa_needed')->nullable();
            $table->boolean('is_authorized')->nullable();
            $table->boolean('is_living')->nullable();
            $table->timestamp('added_at')->nullable();
            $table->string('reference')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offers');
    }
};
