<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoPermiso extends Model
{
    protected $fillable = ['id', 'nombre'];

    public function permissions()
    {
        return $this->hasMany('Caffeinated\Shinobi\Models\Permission');
    }
}
