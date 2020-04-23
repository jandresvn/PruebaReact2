<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testUser()
    {
        $response = $this->json('POST','/api/login', [
            'email' => 'j@gmail.com',
            'password' => '123456',
        ]);

        $response->assertStatus(200);
    }

}
