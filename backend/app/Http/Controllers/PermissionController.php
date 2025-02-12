<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    /**
     * Get all permissions (Obtener todos los permisos).
     */
    public function index()
    {
        return response()->json(Permission::all(), 200);
    }

    /**
     * Create a new permission (Crear un nuevo permiso).
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:permissions,name'
        ]);
        $permission = Permission::create($request->only(['name']));
        return response()->json([
            'message' => 'Permission created successfully',
            'permission' => $permission
        ], 201);
    }

    /**
     * Assign a permission to a role (Asignar permiso a un rol).
     */
    public function assignPermission(Request $request, $roleId)
    {
        $request->validate([
            'permission_id' => 'required|exists:permissions,id'
        ]);
        $role = Role::findOrFail($roleId);
        $role->permissions()->attach($request->permission_id);
        return response()->json(['message' => 'Permission assigned successfully'], 200);
    }

    /**
     * Remove a permission from a role (Eliminar permiso de un rol).
     */
    public function removePermission(Request $request, $roleId)
    {
        $request->validate([
            'permission_id' => 'required|exists:permissions,id'
        ]);
        $role = Role::findOrFail($roleId);
        $role->permissions()->detach($request->permission_id);
        return response()->json(['message' => 'Permission removed successfully'], 200);
    }
}
