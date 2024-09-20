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
        Schema::create('applies', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('offer_id')->constrained('offers');
            $table->string('resume_doc')->nullable();
            $table->longText('resume_text')->nullable();
            $table->integer('status')->default(1); //1=>applied , 2=>reject , 3=>next Level ,...
            $table->string('url')->nullable();
            $table->string('feedback')->nullable();
            $table->timestamp('applied_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('applies');
    }
};
