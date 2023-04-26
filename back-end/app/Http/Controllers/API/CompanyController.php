<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Company;
use Illuminate\Support\Facades\DB;

class CompanyController extends Controller
{
    public function index()
    {
        return Response(['data' => Company::all()], 200);
    }

    public function store(Request $request)
    {
        if(!is_null($request)){
            Company::create($request->all());

            return Response(['data' => 'Empresa criada com sucesso'], 200);
        }

        return Response(['data' => 'Erro ao criar empresa'], 400);
    }

    public function destroy($id)
    {
        if(assert($id)) {
            Company::destroy($id);

            return Response(['data' => 'Empresa deletada com sucesso'], 200);
        }
        
        return Response(['data' => 'Não autorizado'], 401);
    }

    public function show($id)
    {
        if($id) {
            $companyById = DB::table('companies')
                ->select('*')
                ->where('id', $id)
                ->get();
            if(sizeof($companyById) > 0)
                return Response(['data' => $companyById], 200);
        }

        return Response(['data' => $companyById], 400);
    }
}
