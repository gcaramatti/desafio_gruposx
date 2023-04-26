<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Auth;
use Validator;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    
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

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        if($id) {
            $userById = DB::table('users')
                ->select('*')
                ->where('id', $id)
                ->get();

            if(count($userById) > 0){
                return Response(['data' => $userById], 200);
            }
        }

        return Response(['data' => null], 400);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Auth::user();

        if($user->is_admin && Auth::check() && assert($id)) {
            User::destroy($id);

            return Response(['data' => 'Usuario apagado com sucesso'], 200);
        }
        
        return Response(['data' => 'Não autorizado'], 401);
    }
}