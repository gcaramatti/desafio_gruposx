<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Auth;
use Validator;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index() 
    {
        return Response(['data' => User::all()], 200);
    }

    public function login(Request $request): Response
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
   
        if($validator->fails()){

            return Response(['message' => $validator->errors()], 401);
        }
   
        if(Auth::attempt($request->all())){

            $user = Auth::user(); 
    
            $success =  $user->createToken('MyApp')->plainTextToken; 
        
            return Response(['token' => $success], 200);
        }

        return Response(['message' => 'email or password wrong'], 401);
    }

    public function userDetails(): Response
    {
        if (Auth::check()) {
            $user = Auth::user();

            $company = DB::table('companies')
            ->select('*')
            ->where('id', $user->company_id)
            ->get();

            return Response(['data' => ['user' => $user, 'company' => $company[0]]], 200);
        }

        return Response(['data' => 'Unauthorized'], 401);
    }
    
    public function logout(): Response
    {
        $user = Auth::user();

        $user->currentAccessToken()->delete();
        
        return Response(['data' => 'User Logout successfully.'], 200);
    }
    
    public function store(Request $request)
    {
        if(!is_null($request)){
            $request['password'] = bcrypt($request['password']);
            User::create($request->all());

            return Response(['data' => 'Usuário criado com sucesso'], 200);
        }

        return Response(['data' => 'Erro ao criar usuário'], 400);
    }

    public function storeUserOnOnboarding(Request $request)
    {
        $noCompanyData = [ 
            "cnpj" => "99999999999999",
            "social_name" => "Sem empresa",
            "email" => "semempresa@mail.com",
            "phone_number" => "99999999999",
            "postal_code" => "N/T",
            "street" => "N/T",
            "number" => "N/T",
            "neighborhood" => "N/T",
            "state" => "N/T"
        ];

        if(!is_null($request)) {
            if(!Company::latest()->first()->id > 0 || is_null(Company::latest()->first()->id)) {
                Company::create($noCompanyData);
            }

            $request['password'] = bcrypt($request['password']);

            $request['company_id'] = $request['company_id'];
            if($request['company_id'] === 1) {
                $request['company_id'] = Company::latest()->first()->id;
            }

            User::create($request->all());

            return Response(['data' => 'Usuário criado com sucesso'], 200);
        }

        return Response(['data' => 'Erro ao criar usuário'], 400);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        if($id) {
            $userWithCompany = DB::table('users')
                ->join('companies', 'users.company_id' , '=', 'companies.id')
                ->where('users.id', '=', $id)
                ->select('users.id', 'users.cpf', 'users.name', 'users.email', 
                'users.phone_number', 'users.postal_code', 
                'users.street', 'users.number', 'users.neighborhood', 'users.password', 
                'users.state', 'users.company_id', 'companies.social_name as company_name')
                ->get();

            if(count($userWithCompany) > 0){
                return Response(['data' => $userWithCompany[0]], 200);
            }
        }

        return Response(['data' => null], 400);
    }

    public function update(Request $request, $id) {
        if($request) {
            $user = User::find($id);
            
            $user->cpf = $request->cpf;
            $user->name = $request->name;
            $user->email = $request->email;
            $user->phone_number = $request->phone_number;
            $user->postal_code = $request->postal_code;
            $user->street = $request->street;
            $user->number = $request->number;
            $user->neighborhood = $request->neighborhood;
            $user->state = $request->state;

            $user->save();

            return Response(['data' => 'Usuário atualizado com sucesso'], 200);
        }
        
        return Response(['data' => 'Erro ao atualizar usuário'], 400);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Auth::user();

        if(Auth::check() && assert($id)) {
            User::destroy($id);

            return Response(['data' => 'Usuario apagado com sucesso'], 200);
        }
        
        return Response(['data' => 'Não autorizado'], 401);
    }
}