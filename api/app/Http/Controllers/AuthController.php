<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Exception;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * ユーザー登録
     * 
     * @param Request
     * @return JsonResponse
     */
    public function register(Request $request)
    {
        $user = new User();

        // 入力値
        $params = $request->all();
        $params['password'] = Hash::make($params['password']);

        // 登録処理
        $user->fill($params)->save();

        return response()->json([
            'status' => "success",
            'message' => "ユーザー登録に成功しました。",
        ]);
    }

    /**
     * ログイン
     * 
     * @param Request
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        // 認証情報
        $credentials = $request->only(['email', 'password']);

        if (Auth::attempt($credentials)) {
            // 認証成功
            $request->session()->regenerate();
            return response()->json(['auth' => Auth::user()]);
        }

        // 認証失敗
        throw new Exception('ログイン失敗');
    }

    /**
     * ログアウト
     * 
     * @return JsonResponse
     */
    public function logout()
    {
        Auth::logout();

        return response()->json();
    }

    /**
     * ログインユーザー
     * 
     * @return JsonResponse
     */
    public function me()
    {
        return response()->json(['auth' => Auth::user()]);
    }
}
